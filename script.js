// ===================================================================
// PORTFOLIO DATA — single source of truth for the project cards and
// the "ask" console. Edit this object to update both at once.
// ===================================================================
const PORTFOLIO = {
  name: "Ravan (Ramkrishna Roy Barman)",
  role: "Cloud & Infrastructure Engineer",
  location: "Kolkata, India",
  experience: "around 2 years of hands-on production experience",
  current: {
    title: "Cloud & Infrastructure Engineer",
    org: "Stylopay (FinTech)",
    detail: "Works on cloud infrastructure for a financial platform — provisioning with Terraform, shipping through CI/CD, and monitoring system health via CloudWatch and the ELK stack."
  },
  prior: {
    title: "ML / Data Science background, then Instructor",
    org: "Digi Samurai LLP",
    detail: "Taught Python, Django and machine learning to college students, coming in from an ML / Data Science background."
  },
  education: [
    "B.Tech in Mechanical Engineering",
    "Post Graduate Certificate Program in Data Science"
  ],
  stack: {
    "Cloud & Provisioning": ["AWS", "Terraform", "ECS", "EKS"],
    "CI / CD": ["GitHub Actions", "Jenkins"],
    "Containers & Orchestration": ["Docker", "ECS/EKS", "Kubernetes"],
    "Observability": ["CloudWatch", "ELK Stack", "Prometheus", "Grafana"],
    "Systems & Scripting": ["Linux", "Python", "Bash"]
  },
  projects: [
    {
      name: "Predictive Ops for a Sample Microservice",
      status: "case-study",
      statusLabel: "Case study — completed",
      summary: "A recruitment case study built end-to-end: a Spring Boot service shipped via a multi-stage Dockerfile, GitHub Actions CI/CD using OIDC (no long-lived cloud keys), and Terraform-provisioned ECS/EKS infrastructure — paired with a Python ML service doing anomaly detection with LightGBM and EWMA, served over FastAPI.",
      tags: ["Spring Boot", "Docker", "GitHub Actions", "OIDC", "Terraform", "ECS/EKS", "Python", "FastAPI", "LightGBM"]
    },
    {
      name: "Text-to-Speech Application",
      status: "live",
      statusLabel: "Completed",
      summary: "A recruitment assignment: a Text-to-Speech service built on FastAPI and gTTS, deployed to ECS/Fargate with Terraform, wired up to Prometheus and Grafana for monitoring, with Kubernetes integration.",
      tags: ["FastAPI", "gTTS", "ECS/Fargate", "Terraform", "Prometheus", "Grafana", "Kubernetes"]
    },
    {
      name: "Secure File Upload Pipeline",
      status: "progress",
      statusLabel: "In progress",
      summary: "A portfolio project focused on handling untrusted uploads safely: multi-stage validation, a quarantine flow for anything suspicious, and magic-byte verification so files can't lie about their type. ClamAV integration is the next step.",
      tags: ["Security", "File validation", "Quarantine flow", "ClamAV (next)"]
    },
    {
      name: "Angular Railway Reservation Website",
      status: "progress",
      statusLabel: "In progress",
      summary: "An Angular-based railway reservation website, currently in active development.",
      tags: ["Angular", "Frontend", "Reservation system"]
    }
  ],
  exploring: {
    name: "Quantum Cloud Computing",
    detail: "A long-standing personal interest in quantum mechanics and quantum cloud computing — currently in a learning-and-planning phase rather than a shipped project. Rooted in studying quantum physics during his bachelor's degree."
  },
  contact: {
    note: "Best reached through the contact form on this page — replace the placeholder email/GitHub/LinkedIn links before deploying."
  }
};

// ===================================================================
// NAV TOGGLE
// ===================================================================
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}

// ===================================================================
// FOOTER YEAR
// ===================================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===================================================================
// BOOT TERMINAL (hero) — typewriter effect, skipped for reduced motion
// ===================================================================
const bootLines = [
  "$ whoami",
  PORTFOLIO.name,
  "",
  "$ role --current",
  `${PORTFOLIO.current.title} @ ${PORTFOLIO.current.org}`,
  "",
  "$ stack --primary",
  "AWS · Terraform · Docker · ECS/EKS · GitHub Actions · Jenkins · CloudWatch · ELK",
  "",
  "$ status",
  `Open to new opportunities — ${PORTFOLIO.location} (remote friendly)`
];

function typeBoot() {
  const el = document.getElementById("bootTerm");
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fullText = bootLines.join("\n");
  if (reduceMotion) {
    el.textContent = fullText;
    return;
  }
  let i = 0;
  function step() {
    el.textContent = fullText.slice(0, i);
    i++;
    if (i <= fullText.length) {
      requestAnimationFrame(() => setTimeout(step, 14));
    }
  }
  step();
}
typeBoot();

// ===================================================================
// RENDER PROJECT CARDS from PORTFOLIO.projects
// ===================================================================
function badgeClass(status) {
  if (status === "live" || status === "case-study") return "badge--live";
  if (status === "progress") return "badge--progress";
  return "badge--muted";
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PORTFOLIO.projects.map(p => `
    <article class="panel project-card">
      <div class="project-card__head">
        <h3>${p.name}</h3>
        <span class="badge ${badgeClass(p.status)}">${p.statusLabel}</span>
      </div>
      <p>${p.summary}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </article>
  `).join("") + `
    <article class="panel project-card">
      <div class="project-card__head">
        <h3>${PORTFOLIO.exploring.name}</h3>
        <span class="badge badge--muted">exploring</span>
      </div>
      <p>${PORTFOLIO.exploring.detail}</p>
    </article>
  `;
}
renderProjects();

// ===================================================================
// TERMINAL CHAT CONSOLE — rule-based, answers only from PORTFOLIO
// ===================================================================
const chatOutput = document.getElementById("chatOutput");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatSuggestions = document.getElementById("chatSuggestions");

const SUGGESTED_PROMPTS = [
  "What's your stack?",
  "Tell me about Stylopay",
  "What projects have you built?",
  "Are you open to work?",
  "How do I contact you?"
];

function appendLine(text, who) {
  const p = document.createElement("p");
  p.className = `term-line term-line--${who}`;
  p.textContent = text;
  chatOutput.appendChild(p);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function answerFor(raw) {
  const q = raw.toLowerCase();

  if (/stack|tech|tool|technolog|language/.test(q)) {
    const lines = Object.entries(PORTFOLIO.stack)
      .map(([cat, items]) => `${cat}: ${items.join(", ")}`)
      .join("\n");
    return `Ravan's stack, by area —\n${lines}`;
  }

  if (/stylopay|current job|current role|now working/.test(q)) {
    return `${PORTFOLIO.current.detail} He's been there roughly ${PORTFOLIO.experience.replace("around ", "")}.`;
  }

  if (/digi samurai|teach|taught|previous job|prior role|before stylopay/.test(q)) {
    return `${PORTFOLIO.prior.detail} That was at ${PORTFOLIO.prior.org}, before Stylopay.`;
  }

  if (/project|built|work(?!ing at)|portfolio piece/.test(q)) {
    const list = PORTFOLIO.projects
      .map(p => `• ${p.name} (${p.statusLabel}) — ${p.summary}`)
      .join("\n");
    return `Projects on this page —\n${list}\n\nAlso exploring: ${PORTFOLIO.exploring.name} — ${PORTFOLIO.exploring.detail}`;
  }

  if (/quantum/.test(q)) {
    return PORTFOLIO.exploring.detail;
  }

  if (/education|degree|college|study|studied|university/.test(q)) {
    return `Ravan's education: ${PORTFOLIO.education.join(" · ")}.`;
  }

  if (/experience|how long|years/.test(q)) {
    return `Ravan has ${PORTFOLIO.experience}, most recently as ${PORTFOLIO.current.title} at ${PORTFOLIO.current.org}, and before that at ${PORTFOLIO.prior.org}.`;
  }

  if (/contact|reach|email|hire|available|opportunit|open to work/.test(q)) {
    return `Yes — Ravan is open to new opportunities. ${PORTFOLIO.contact.note}`;
  }

  if (/who are you|about|background|who is ravan/.test(q)) {
    return `${PORTFOLIO.name} — ${PORTFOLIO.role}, based in ${PORTFOLIO.location}. ${PORTFOLIO.current.detail}`;
  }

  if (/location|where|based|remote/.test(q)) {
    return `Ravan is based in ${PORTFOLIO.location}, and open to remote work.`;
  }

  return "I don't have anything on that specific point yet — the best way to get a direct answer is the contact form below the console; Ravan will get back to you.";
}

function handleQuestion(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  appendLine(trimmed, "user");
  const reply = answerFor(trimmed);
  setTimeout(() => appendLine(reply, "bot"), 220);
}

if (chatSuggestions) {
  SUGGESTED_PROMPTS.forEach(prompt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = prompt;
    btn.addEventListener("click", () => handleQuestion(prompt));
    chatSuggestions.appendChild(btn);
  });
}

if (chatForm) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleQuestion(chatInput.value);
    chatInput.value = "";
    chatInput.focus();
  });
}

// ===================================================================
// CONTACT FORM — submits to Formspree so GitHub Pages (static hosting)
// can still collect inquiries. Replace FORMSPREE_ENDPOINT below with
// your own form URL from https://formspree.io — see README.md.
// Inquiries can then be exported as a CSV from your Formspree dashboard.
// ===================================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // <-- replace YOUR_FORM_ID

const inquiryForm = document.getElementById("inquiryForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // honeypot: if filled, silently drop (bot submission)
    if (inquiryForm._gotcha.value) return;

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      formStatus.textContent = "Form isn't connected yet — add a Formspree form ID in script.js (see README.md).";
      formStatus.className = "form-status is-err";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(inquiryForm)
      });

      if (res.ok) {
        formStatus.textContent = "Thanks — your message is in. Ravan will get back to you soon.";
        formStatus.className = "form-status is-ok";
        inquiryForm.reset();
      } else {
        formStatus.textContent = "Something went wrong sending that — try again, or use the email link.";
        formStatus.className = "form-status is-err";
      }
    } catch (err) {
      formStatus.textContent = "Network error — try again, or use the email link on the right.";
      formStatus.className = "form-status is-err";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send inquiry";
    }
  });
}
