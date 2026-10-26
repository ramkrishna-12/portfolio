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
    detail: "Works on cloud infrastructure for a financial platform — provisioning with Terraform, shipping through CI/CD, and monitoring system health via CloudWatch and the ELK stack. Docker Swarm runs production (a platform call from management); Kubernetes was set up independently for dev/QA.",
    highlight: "Led a zero-downtime, multi-region Blue-Green migration."
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
    "Cloud & Provisioning": ["AWS", "Terraform", "ECS", "EKS", "GCP (project)"],
    "CI / CD": ["GitHub Actions", "Jenkins"],
    "Containers & Orchestration": ["Docker", "Docker Swarm (production)", "Kubernetes (dev/QA)"],
    "Observability": ["CloudWatch", "ELK Stack", "Prometheus", "Grafana"],
    "Systems & Scripting": ["Linux", "Python", "Bash"]
  },
  links: {
    github: "https://github.com/ramkrishna-12",
    linkedin: "https://www.linkedin.com/in/ramkrishna-roy-barman-48391b16a",
    email: "rupambarmanxyz@gmail.com",
    mlRepo: "https://github.com/ramkrishna-12/machine-learning-projects"
  },
  projects: [
    {
      name: "Zero-Downtime Multi-Region Blue-Green Migration",
      status: "live",
      statusLabel: "Production — Stylopay",
      summary: "A multi-region cutover for a FinTech platform with no downtime. The new (green) stack was validated against QA environment APIs first, then switched to prod APIs, with traffic split roughly 60/40 blue/green for the first week while the previous infrastructure stayed up as a fallback (a company decision). Approximate scale: ~12 EC2 instances each running 3–4 microservices, 10–12 Lambdas fronted by an API Gateway per microservice API, 2 EC2 Swarm managers and 4 EC2 for frontend and other workloads — with ACM, Route 53 and ALB handling certificates, DNS and routing. Database migration/replication sat outside his scope.",
      tags: ["AWS", "Route 53", "ALB", "ACM", "EC2", "Lambda", "API Gateway", "Docker Swarm"]
    },
    {
      name: "Cloud Data Pipeline & CI/CD Gate",
      status: "case-study",
      statusLabel: "Case study — completed (Sept 2026)",
      summary: "A recruitment case study covering a GCP data pipeline and a deployment safety gate: Terraform-provisioned staging (a GCS raw landing zone feeding BigQuery, with IAM conditions and row-level security), a fail-closed CI/CD build gate in GitHub Actions so a bad build simply can't ship, and a Django REST Framework schema-validation layer — with tests — for a student-onboarding payload.",
      tags: ["GCP", "Terraform", "BigQuery", "IAM / Row-Level Security", "GitHub Actions", "Fail-closed CI/CD", "Django REST Framework"]
    },
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
      name: "Three-Tier Compliance Application",
      status: "live",
      statusLabel: "Completed",
      summary: "A foundational AWS project: a three-tier web app (Flask MVC, MySQL) deployed behind an Application Load Balancer inside a custom VPC on EC2 — the network-segmented, load-balanced setup compliance-minded infrastructure needs.",
      tags: ["Flask", "MySQL", "EC2", "ALB", "VPC"]
    },
    {
      name: "AWS Billing Prediction System",
      status: "live",
      statusLabel: "Completed",
      summary: "A forecasting tool for AWS spend, combining Linear Regression and ARIMA to predict billing within roughly ±10–20 USD — a small, practical link back to the ML/Data Science side of his background.",
      tags: ["Python", "Linear Regression", "ARIMA", "AWS cost forecasting"]
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
  "$ highlight --latest",
  PORTFOLIO.current.highlight,
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

  if (/blue.?green|migration|zero.?downtime|traffic split|route ?53|api gateway|lambda|\balb\b/.test(q)) {
    return "Ravan's signature production story at Stylopay: a zero-downtime, multi-region Blue-Green migration. The new stack was tested against QA environment APIs first, then switched to prod APIs, with traffic split roughly 60/40 blue/green for the first week while the old infrastructure stayed up (a company decision). Roughly: ~12 EC2 instances running 3–4 microservices each, 10–12 Lambdas behind API Gateway, 2 Docker Swarm manager nodes and 4 EC2 for frontend/other workloads, using ACM, Route 53 and ALB. Database migration/replication was outside his scope.";
  }

  if (/docker swarm|swarm/.test(q)) {
    return "Stylopay runs Docker Swarm in production — a platform decision from management, not Ravan's own choice — and he operates within it day to day.";
  }

  if (/kubernetes|k8s/.test(q)) {
    return "Ravan set up Kubernetes independently for dev/QA environments at Stylopay, separate from the production Docker Swarm setup.";
  }

  if (/gcp|bigquery|google cloud/.test(q)) {
    return "AWS is Ravan's primary cloud, but he's also built on GCP — most recently a Terraform-provisioned pipeline into BigQuery with IAM conditions and row-level security, as part of a recruitment case study.";
  }

  if (/repo|source code|machine learning project|ml project|chatbot project/.test(q)) {
    return `More of Ravan's work — especially ML and chatbot projects — is up on GitHub: ${PORTFOLIO.links.mlRepo}`;
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
