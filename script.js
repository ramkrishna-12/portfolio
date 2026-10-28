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
    "Cloud & Provisioning": ["AWS", "Terraform", "ECS", "EKS", "GCP (project)", "AWS Bedrock (project)"],
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
      name: "AWS Bedrock — AI Models on AWS",
      status: "progress",
      statusLabel: "Ongoing — 4 months",
      summary: "An ongoing project, about four months in, on how AI models actually run in AWS: models from Anthropic are pulled from AWS Bedrock and put to work on tasks.",
      tags: ["AWS Bedrock", "Anthropic", "AWS", "Generative AI"],
      url: "https://github.com/ramkrishna-12/aws-bedrock"
    },
    {
      name: "MLflow Model Pipeline on AWS ECS",
      status: "live",
      statusLabel: "Completed",
      summary: "An end-to-end MLOps pipeline for a fraud-detector model. Data (S3/parquet) is validated, a training sweep runs as MLflow nested runs, a quality gate decides whether a model gets registered, and a challenger is compared against the current champion; promotion is just moving the @champion alias. GitHub Actions CI runs lint, tests, a pipeline smoke test, Docker build and Terraform fmt/validate; CD trains, builds the image, waits for approval, then does an ECS rolling deploy followed by a smoke test. Serving runs on ECS Fargate behind an ALB, loading models:/fraud-detector@champion from an MLflow service backed by RDS Postgres and S3 artifacts.",
      tags: ["MLflow", "Python", "S3 / Parquet", "ECS Fargate", "ALB", "RDS Postgres", "Terraform", "GitHub Actions", "Docker"],
      url: "https://github.com/ramkrishna-12/Ml_Flow-Pipeline"
    },
    {
      name: "Habot Connect — Cloud Data Pipeline & CI/CD Gate",
      status: "live",
      statusLabel: "Hiring task — completed (Sept 2026)",
      summary: "A hands-on task set by Habot Connect for their Junior Cloud & DevOps Engineer hiring process, in three parts: Terraform-provisioned secure staging (a GCS raw landing bucket and a BigQuery staged/enforced dataset, with IAM conditions and row-level security); a fail-closed GitHub Actions gate covering formatting, linting, Terraform validation, infrastructure security scanning and hardcoded-secret detection; and a Django REST Framework serializer plus a deterministic Yes/No validation library for a student-onboarding payload, with tests. The brief gave no exact schema, so the assumptions are documented rather than silently invented.",
      tags: ["GCP", "Terraform", "BigQuery", "IAM / Row-Level Security", "GitHub Actions", "Fail-closed CI/CD", "Django REST Framework"],
      url: "https://github.com/ramkrishna-12/connect-gcp-aws-terraform"
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
      name: "Secure File Upload Pipeline",
      status: "live",
      statusLabel: "Completed",
      summary: "A staged defence for untrusted uploads, designed against a written threat model: filename validation (path traversal, double extensions), magic-byte content validation (extension and MIME spoofing), an antivirus/malware scan, and static analysis for scripts and macros (PDF JavaScript/OpenAction, VBA, SVG/HTML XSS). Downloads go through an API Gateway abstraction so infrastructure identity never reaches the client, with least-privilege IAM, audit logging, and checksum-based integrity verification.",
      tags: ["Security", "Threat modelling", "Magic-byte validation", "AV scan", "Static analysis", "API Gateway", "IAM least privilege"],
      url: "https://github.com/ramkrishna-12/file-upload-validation"
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
      name: "Shipment Error ETL Pipeline",
      status: "live",
      statusLabel: "Completed",
      summary: "A production-style ETL simulation for e-commerce shipment and order analytics on deliberately messy CSVs: data cleaning and standardization, duplicate handling, multi-table merging, revenue calculation and shipment aggregation, run automatically through GitHub Actions and packaged with Docker.",
      tags: ["Python", "Pandas", "GitHub Actions", "Docker", "docker-compose", "ETL"],
      url: "https://github.com/ramkrishna-12/shipment_error"
    }
  ],
  exploring: {
    name: "Quantum Cloud Computing",
    detail: "A long-standing personal interest in quantum mechanics and quantum cloud computing — currently in a learning-and-planning phase rather than a shipped project. Rooted in studying quantum physics during his bachelor's degree."
  },
  contact: {
    note: "Best reached through the contact form on this page, or directly by email, GitHub or LinkedIn (links in the contact section)."
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
      ${p.url ? `<a class="project-card__link" href="${p.url}" target="_blank" rel="noopener">View on GitHub →</a>` : ""}
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
    return "AWS is Ravan's primary cloud, but he's also built on GCP — most recently a Terraform-provisioned pipeline into BigQuery with IAM conditions and row-level security, as a hiring task for Habot Connect.";
  }

  if (/repo|source code|machine learning project|ml project|chatbot project/.test(q)) {
    return `More of Ravan's work — especially ML and chatbot projects — is up on GitHub: ${PORTFOLIO.links.mlRepo}`;
  }

  if (/bedrock|genai|generative|llm|anthropic|ai model/.test(q)) {
    return "Ravan's ongoing AWS Bedrock project (about four months so far) looks at how AI models run in AWS: models from Anthropic are pulled from AWS Bedrock and put to work on tasks. Repo: " + PORTFOLIO.links.github + "/aws-bedrock";
  }

  if (/mlflow|mlops|champion|challenger|fraud|model pipeline/.test(q)) {
    return "Ravan built an end-to-end MLflow pipeline for a fraud-detector model: validate data, run a training sweep, pass a quality gate, register, then compare challenger vs champion (promotion moves the @champion alias). CI/CD runs on GitHub Actions with an approval step and an ECS rolling deploy; serving is ECS Fargate behind an ALB with MLflow on RDS Postgres and S3. Repo: " + PORTFOLIO.links.github + "/Ml_Flow-Pipeline";
  }

  if (/upload|malware|virus|antivirus|threat model|magic.?byte|file security/.test(q)) {
    return "Ravan's Secure File Upload Pipeline is a staged defence: filename validation, magic-byte content validation, an AV/malware scan, and static analysis for scripts and macros — plus an API Gateway abstraction for downloads, least-privilege IAM, audit logging and checksum verification. Repo: " + PORTFOLIO.links.github + "/file-upload-validation";
  }

  if (/etl|pandas|shipment|csv/.test(q)) {
    return "Ravan's Shipment Error ETL Pipeline cleans and merges messy e-commerce order, product and shipment CSVs with Python and Pandas, computes revenue and shipment aggregates, and runs automatically through GitHub Actions and Docker. Repo: " + PORTFOLIO.links.github + "/shipment_error";
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
// CONTACT FORM — posts to a Google Apps Script web app, which appends
// each inquiry as a row in your Google Sheet. GitHub Pages is static, so
// the Apps Script acts as the "backend". Setup: README.md + apps-script/Code.gs
// Paste your deployed web app URL (ends in /exec) below.
// ===================================================================
const SHEETS_ENDPOINT = "https://formspree.io/f/xkjjbawa";

const inquiryForm = document.getElementById("inquiryForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

function setStatus(msg, kind) {
  formStatus.textContent = msg;
  formStatus.className = "form-status" + (kind ? ` is-${kind}` : "");
}

if (inquiryForm) {
  inquiryForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // honeypot: if filled, silently drop (bot submission)
    if (inquiryForm._gotcha.value) return;

    const name = inquiryForm.name.value.trim();
    const email = inquiryForm.email.value.trim();
    const message = inquiryForm.message.value.trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email and message.", "err");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("That email address doesn't look right.", "err");
      return;
    }

    if (SHEETS_ENDPOINT.startsWith("PASTE_")) {
      setStatus("Form isn't connected yet — add your Apps Script URL in script.js (see README.md).", "err");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    setStatus("", "");

    try {
      // Apps Script web apps don't return CORS headers, so we send in
      // no-cors mode: the request goes through, but the response is opaque.
      // A thrown error therefore means a network failure; success means "sent".
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, email, message })
      });
      setStatus("Thanks — your message is in. Ravan will get back to you soon.", "ok");
      inquiryForm.reset();
    } catch (err) {
      setStatus("Network error — try again, or use the email link on the right.", "err");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send inquiry";
    }
  });
}
