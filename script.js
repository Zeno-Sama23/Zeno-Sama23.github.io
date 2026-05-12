// ===========================
// DATA
// ===========================
const skills = [
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: "Cloud & Azure",
    tags: [
      { label: "Azure Sentinel", highlight: true },
      { label: "Defender XDR / 365", highlight: true },
      { label: "Log Analytics" },
      { label: "Entra ID" },
      { label: "Azure AD" },
      { label: "Conditional Access" },
      { label: "AIP" },
      { label: "RBAC" }
    ]
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "SecOps / SOC",
    tags: [
      { label: "Defender for Endpoint", highlight: true },
      { label: "MITRE ATT&CK", highlight: true },
      { label: "Threat Hunting" },
      { label: "IDS / IPS" },
      { label: "Trellix" },
      { label: "Incidents N1/N2" },
      { label: "Splunk", highlight: true },
      { label: "Wazuh SIEM" },
      { label: "ASR Rules" }
    ]
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: "Scripting & Automatisation",
    tags: [
      { label: "KQL", highlight: true },
      { label: "PowerShell", highlight: true },
      { label: "Logic Apps" },
      { label: "SOAR / Playbooks" },
      { label: "SPL (Splunk)" },
      { label: "VirusTotal API" },
      { label: "Python" }
    ]
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    title: "Gestion des Vulnérabilités",
    tags: [
      { label: "Nessus Essentials", highlight: true },
      { label: "Defender Vuln. Mgmt", highlight: true },
      { label: "CVSS" },
      { label: "Patch Management" },
      { label: "Remédiation" },
      { label: "Reporting RSSI" }
    ]
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: "Administration Systèmes",
    tags: [
      { label: "Windows Server 2019/2022" },
      { label: "AD DS / GPO" },
      { label: "Intune" },
      { label: "SCCM" },
      { label: "Linux" },
      { label: "Hyper-V / VMware / VirtualBox" },
      { label: "Wireshark" }
    ]
  },
  {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    title: "Conformité & GRC",
    tags: [
      { label: "ISO 27001 / 27005", highlight: true },
      { label: "EBIOS Risk Manager", highlight: true },
      { label: "RGPD" },
      { label: "Audit sécurité" },
      { label: "Révision PSSI" }
    ]
  }
];

const projects = [
  {
    title: "Azure Sentinel Detection Engineering Lab",
    description: "Déploiement complet de Microsoft Sentinel sur tenant Azure (Entra ID + Log Analytics Workspace). Écriture de 5 règles KQL de détection custom mappées MITRE ATT&CK, configuration des data connectors (SigninLogs, AuditLogs, Azure Activity) et création d'un Workbook de monitoring.",
    tags: ["Microsoft Sentinel","KQL","Entra ID","Log Analytics","MITRE ATT&CK"],
    result: "5/5 règles KQL livrées · Workbook dashboard · Data connectors actifs · MITRE ATT&CK mappé",
    status: "done",
    link: null,
    rules: [
      { mitre: "T1110.001", name: "Brute Force - Multiple Failed Signins", severity: "Medium", done: true },
      { mitre: "T1078", name: "Impossible Travel Detection", severity: "High", done: true },
      { mitre: "T1078.004", name: "Suspicious Privileged Role Assignment", severity: "High", done: true },
      { mitre: "T1136.003", name: "Account Created Outside Business Hours", severity: "Medium", done: true },
      { mitre: "T1485", name: "Multiple Azure Resource Deletions", severity: "High", done: true }
    ]
  },
  {
    title: "Microsoft Defender for Endpoint — Endpoint Security Lab",
    description: "Déploiement et configuration de Microsoft Defender for Endpoint en entreprise : onboarding d'endpoints Windows, configuration des Attack Surface Reduction rules, investigation d'incidents (device timeline, process tree, network connections) et analyse des anomalies. Lab de démonstration avec simulation d'attaques, threat hunting via Advanced Hunting KQL et workflow complet d'investigation SOC. Thème de mémoire de Master : analyse et suivi des anomalies lors du déploiement MDE.",
    tags: ["Microsoft Defender for Endpoint","EDR","ASR Rules","KQL","Advanced Hunting","Incident Investigation","Threat Hunting"],
    result: "Onboarding endpoints · ASR rules · Investigation incidents · Advanced Hunting KQL · Anomaly Detection",
    status: "done",
    link: null,
    rules: [
      { mitre: "T1566.001", name: "Phishing Attachment — ASR Rule Block", severity: "High", done: true },
      { mitre: "T1059.001", name: "PowerShell Suspicious Execution — Investigation & Containment", severity: "High", done: true },
      { mitre: "T1547.001", name: "Registry Run Key Persistence — Advanced Hunting KQL", severity: "Medium", done: true },
      { mitre: "T1110.001", name: "Brute Force Attempt — Incident Investigation (Device Timeline)", severity: "Medium", done: true }
    ]
  },
  {
    title: "Cloud Security Posture Automation",
    description: "Automatisation de l'évaluation de la posture de sécurité Azure via Python et l'API Microsoft Defender for Cloud — remontée des non-conformités et génération de rapports.",
    tags: ["Python","Azure","Defender for Cloud","Automation"],
    result: null,
    status: "soon",
    link: null
  },
  {
    title: "Automated Incident Response with SOAR",
    description: "3 playbooks Azure Logic Apps déclenchés automatiquement par Microsoft Sentinel : alerte email brute force (Outlook), désactivation automatique du compte compromis via Entra ID, et enrichissement IP en temps réel via l'API VirusTotal v3. MTTR réduit à moins de 60 secondes.",
    tags: ["Logic Apps","SOAR","Microsoft Sentinel","Entra ID","VirusTotal API"],
    result: "3/3 playbooks opérationnels · MTTR < 60s · Entra ID automatisé · VirusTotal API v3",
    status: "done",
    link: null,
    rules: [
      { mitre: "T1110.001", name: "Playbook 1 — Brute Force Email Notification", severity: "Medium", done: true },
      { mitre: "T1110.001", name: "Playbook 2 — Auto Disable Compromised User (Entra ID)", severity: "Medium", done: true },
      { mitre: "T1078.004", name: "Playbook 3 — IP Enrichment via VirusTotal API", severity: "High", done: true }
    ]
  },
  {
    title: "Terraform Secure Azure Baseline",
    description: "Déploiement IaC d'une baseline Azure sécurisée : policies, RBAC minimal, Log Analytics, Defender plans activés et alertes budget FinOps intégrées.",
    tags: ["Terraform","Azure","IaC","FinOps","Security"],
    result: null,
    status: "soon",
    link: null
  },
  {
    title: "Linux Log Analysis + Wazuh SIEM",
    description: "Lab Wazuh SIEM complet : manager sur WSL2, agent sur VM VirtualBox Ubuntu. Simulation d'attaques réelles (SSH brute force, escalade de privilèges sudo) et détection temps réel avec mapping MITRE ATT&CK. 406+ alertes générées.",
    tags: ["Wazuh","SIEM","Linux","MITRE ATT&CK","VirtualBox","WSL2"],
    result: "406+ alertes · 3 techniques MITRE ATT&CK · T1110.001 · T1548.003 · T1078",
    status: "done",
    link: null,
    rules: [
      { mitre: "T1110.001", name: "SSH Brute Force — Non-existent User (Rule 5710)", severity: "Medium", done: true },
      { mitre: "T1548.003", name: "Successful Sudo to ROOT (Rule 5402)", severity: "High", done: true },
      { mitre: "T1078", name: "PAM Session — Valid Account Access (Rule 5501)", severity: "Medium", done: true }
    ]
  },
  {
    title: "Splunk SIEM Lab — SPL & Detection Rules",
    description: "Déploiement Splunk Enterprise avec ingestion de logs Windows (EventCodes 4624, 4625, 4672, 4720, 4728). Écriture de 4 règles de détection en SPL mappées MITRE ATT&CK, dashboard Security Monitoring 3 panneaux et dataset de 40 événements simulés. Compétences multi-SIEM (KQL + SPL).",
    tags: ["Splunk","SPL","SIEM","MITRE ATT&CK","Windows Event Logs"],
    result: "4/4 règles SPL livrées · Dashboard 3 panneaux · 40 événements analysés · Multi-SIEM KQL+SPL",
    status: "done",
    link: null,
    rules: [
      { mitre: "T1110.001", name: "Brute Force — Multiple Failed Logons (4625)", severity: "Medium", done: true },
      { mitre: "T1136.001", name: "Account Created Outside Business Hours (4720)", severity: "Medium", done: true },
      { mitre: "T1078.003", name: "Privilege Escalation — Special Logon (4672)", severity: "High", done: true },
      { mitre: "T1078", name: "Impossible Travel — Dual Location Logon (4624)", severity: "High", done: true }
    ]
  },
  {
    title: "Vulnerability Management — Nessus Essentials",
    description: "Scan de vulnérabilités avec Nessus Essentials sur cible Metasploitable2 (VM VirtualBox). Identification de vulnérabilités Critical/High (services non patchés, CVEs exploitables), priorisation par score CVSS v3.0 et production d'un rapport de remédiation structuré.",
    tags: ["Nessus","CVSS","Vuln Management","Metasploitable2","Remédiation"],
    result: null,
    status: "done",
    link: null
  }
];

// Project screenshots — lives outside the sync.js-managed block
const projectImages = {
  'Microsoft Defender for Endpoint — Endpoint Security Lab': [
    { src: 'images/mde/device-onboarded.png',  alt: 'MDE - Device onboarded in Microsoft Defender portal' },
    { src: 'images/mde/asr-rules.png',          alt: 'MDE - Attack Surface Reduction rules configured via PowerShell' },
    { src: 'images/mde/alerts-list.png',         alt: 'MDE - Alerts list - Suspicious PowerShell detected' },
    { src: 'images/mde/alert-details.png',       alt: 'MDE - Alert details - Process tree cmd.exe to powershell.exe' },
  ],
  'Automated Incident Response with SOAR': [
    { src: 'images/soar/playbooks-list.png',       alt: 'Logic Apps - Liste des 3 playbooks SOAR' },
    { src: 'images/soar/playbook-brute-force.png',  alt: 'Playbook 1 - Brute Force Email Notification' },
    { src: 'images/soar/playbook-disable-user.png', alt: 'Playbook 2 - Auto Disable Compromised User' },
    { src: 'images/soar/playbook-virustotal.png',   alt: 'Playbook 3 - IP Enrichment via VirusTotal' },
  ],
  'Azure Sentinel Detection Engineering Lab': [
    { src: 'images/sentinel/brute-force.png',     alt: 'Règle KQL — Brute Force Detection' },
    { src: 'images/sentinel/privileged-role.png',  alt: 'Règle KQL — Privileged Role Assignment' },
    { src: 'images/sentinel/user-creations.png',   alt: 'Règle KQL — Account Created Outside Hours' },
    { src: 'images/sentinel/events-code.png',      alt: 'KQL Query — Events Code' },
  ],
  'Splunk SIEM Lab — SPL & Detection Rules': [
    { src: 'images/splunk/dashboard-real.png',     alt: 'Splunk - Dashboard Metasploitable2 Security Monitoring' },
    { src: 'images/splunk/brute-force-real.png',   alt: 'Splunk - SSH Brute Force T1110.001 - 55 evenements' },
    { src: 'images/splunk/login-after-failures.png', alt: 'Splunk - Login apres echecs T1078' },
    { src: 'images/splunk/account-enumeration.png', alt: 'Splunk - Enumeration comptes T1087' },
    { src: 'images/splunk/root-session.png',       alt: 'Splunk - Session root T1548' },
  ],
  'Linux Log Analysis + Wazuh SIEM': [
    { src: 'images/wazuh/agent-connected.png',    alt: 'Wazuh — Agent Ubuntu connecté au manager' },
    { src: 'images/wazuh/brute-force-alerts.png', alt: 'Wazuh — SSH Brute Force T1110.001 (Rule 5710)' },
    { src: 'images/wazuh/alerts-overview.png',    alt: 'Wazuh — Vue globale des alertes de sécurité' },
    { src: 'images/wazuh/priv-escalation.png',    alt: 'Wazuh — Privilege Escalation T1548.003 (Rule 5402)' },
  ],
  'Vulnerability Management — Nessus Essentials': [
    { src: 'images/nessus/overview.png',             alt: 'Nessus scan overview' },
    { src: 'images/nessus/bind-shell-backdoor.png',  alt: 'Nessus bind shell backdoor CVSS 9.8' },
    { src: 'images/nessus/vnc-default-password.png', alt: 'Nessus VNC default password CVSS 10.0' },
    { src: 'images/nessus/samba-badlock.png',        alt: 'Nessus Samba Badlock CVE-2016-2118' },
  ],
};

const lightboxGalleries = {};

// ===========================
// RENDER SKILLS
// ===========================
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = skills.map(cat => `
    <div class="skill-category reveal">
      <div class="skill-category-header">
        <div class="skill-category-icon">${cat.icon}</div>
        <span class="skill-category-title">${cat.title}</span>
      </div>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span class="skill-tag${t.highlight ? ' highlight' : ''}">${t.label}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===========================
// RENDER PROJECTS
// ===========================
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const sevClass = { High: 'sev-high', Medium: 'sev-medium' };
  const order    = { done: 0, wip: 1, soon: 2 };
  const sorted   = [...projects].sort((a, b) => (order[a.status] ?? 3) - (order[b.status] ?? 3));
  const done     = sorted.filter(p => p.status === 'done');
  const upcoming = sorted.filter(p => p.status !== 'done');

  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

  function buildMedia(p) {
    const imgs = projectImages[p.title] || [];
    const gid  = slug(p.title);
    if (imgs.length) lightboxGalleries[gid] = imgs;
    if (!imgs.length) return `
      <div class="pcard-media pcard-media-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" style="color:rgba(255,255,255,0.18);position:relative;z-index:1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>`;
    return `
      <div class="pcard-media">
        <img class="pcard-main-img" src="${imgs[0].src}" alt="${imgs[0].alt}" loading="lazy"
          data-lb-gallery="${gid}" data-lb-index="0">
        ${imgs.length > 1 ? `<div class="pcard-thumbs">
          ${imgs.slice(1, 4).map((img, i) => `<img class="pcard-thumb" src="${img.src}" alt="${img.alt}" loading="lazy" data-lb-gallery="${gid}" data-lb-index="${i + 1}">`).join('')}
          ${imgs.length > 4 ? `<button class="pcard-thumb-more" data-lb-gallery="${gid}" data-lb-index="4">+${imgs.length - 4}</button>` : ''}
        </div>` : ''}
      </div>`;
  }

  function buildRules(p) {
    if (!p.rules) return '';
    return `
      <div class="project-rules">
        <div class="rules-title">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Règles — MITRE ATT&CK
        </div>
        ${p.rules.map(r => `
          <div class="rule-row ${r.done ? 'rule-done' : 'rule-wip'}">
            <span class="rule-status-icon">${r.done ? '✓' : '⟳'}</span>
            <span class="rule-mitre">${r.mitre}</span>
            <span class="rule-name">${r.name}</span>
            ${r.severity && r.severity !== '—' ? `<span class="rule-sev ${sevClass[r.severity] || ''}">${r.severity}</span>` : ''}
          </div>`).join('')}
      </div>`;
  }

  const doneHTML = `<div class="projects-done-stack">
    ${done.map(p => `
    <article class="project-card-h reveal">
      ${buildMedia(p)}
      <div class="pcard-body">
        <div class="pcard-top">
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
          <span class="project-status status-done">Terminé</span>
        </div>
        <h3 class="pcard-title">${p.title}</h3>
        <p class="pcard-desc">${p.description}</p>
        ${buildRules(p)}
        ${p.result ? `<div class="project-result">${p.result}</div>` : ''}
        ${p.link ? `<div class="pcard-actions"><a href="${p.link}" target="_blank" rel="noopener" class="project-link">Voir sur GitHub <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>` : ''}
      </div>
    </article>`).join('')}
  </div>`;

  const upcomingHTML = upcoming.length ? `
    <div class="projects-upcoming-label">En préparation &nbsp;·&nbsp; ${upcoming.length} projets</div>
    <div class="projects-upcoming-grid">
      ${upcoming.map(p => `
      <div class="project-card-sm reveal">
        <div class="pcard-sm-header">
          <div class="pcard-sm-icon">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span class="project-status status-soon">À venir</span>
        </div>
        <h4 class="pcard-sm-title">${p.title}</h4>
        <p class="pcard-sm-desc">${p.description}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      </div>`).join('')}
    </div>` : '';

  grid.innerHTML = doneHTML + upcomingHTML;
}

// ===========================
// TYPEWRITER
// ===========================
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = ['Ingénieur Cybersécurité', 'Ingénieur Sécurité du Cloud'];
  let wi = 0, ci = 0, deleting = false;
  const type = () => {
    const word = words[wi];
    if (deleting) {
      el.textContent = word.slice(0, --ci);
    } else {
      el.textContent = word.slice(0, ++ci);
    }
    let delay = deleting ? 50 : 90;
    if (!deleting && ci === word.length) { delay = 1800; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
    setTimeout(type, delay);
  };
  setTimeout(type, 600);
}

// ===========================
// ANIMATED COUNTERS
// ===========================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * target);
    el.textContent = value.toLocaleString('fr-FR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.impact-number[data-target]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

// ===========================
// NAVBAR
// ===========================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('nav-mobile');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[data-nav]');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);
    let current = '';
    sections.forEach(s => {
      if (y >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.nav === current);
    });
  }, { passive: true });

  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ===========================
// OBFUSCATION
// ===========================
function initObfuscation() {
  const u = ['kamdem', 'teddy23'].join('');
  const d = ['gm', 'ail.com'].join('');
  const email = u + '@' + d;
  const tel   = ['+33', '7', '51', '54', '53', '57'].join(' ');
  const telRaw = '+33751545357';

  const eLink = document.getElementById('email-link');
  const eTxt  = document.getElementById('email-text');
  if (eLink) eLink.href = 'mailto:' + email;
  if (eTxt)  eTxt.textContent = email;

  const tLink = document.getElementById('tel-link');
  const tTxt  = document.getElementById('tel-text');
  if (tLink) tLink.href = 'tel:' + telRaw;
  if (tTxt)  tTxt.textContent = tel;

  const sBtn = document.getElementById('schedule-btn');
  if (sBtn) sBtn.href = 'mailto:' + email
    + '?subject=Entretien%20%E2%80%94%20Ing%C3%A9nieur%20Cybers%C3%A9curit%C3%A9'
    + '&body=Bonjour%20Teddy%2C%0A%0AJe%20souhaite%20planifier%20un%20entretien%20avec%20vous.';

  const fEmail = document.getElementById('footer-email');
  if (fEmail) fEmail.href = 'mailto:' + email;
}

// ===========================
// PHOTO
// ===========================
function initPhoto() {
  const img = document.getElementById('hero-photo');
  const placeholder = document.getElementById('hero-photo-placeholder');
  if (!img) return;
  const show = () => { placeholder.style.display = 'none'; img.style.display = 'block'; };
  const hide = () => { img.style.display = 'none'; };
  if (img.complete && img.naturalWidth > 0) show();
  else { img.addEventListener('load', show); img.addEventListener('error', hide); }
}

// ===========================
// LIGHTBOX
// ===========================
function initLightbox() {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <button class="lb-close" aria-label="Fermer">&times;</button>
    <button class="lb-prev" aria-label="Précédent">&#8249;</button>
    <button class="lb-next" aria-label="Suivant">&#8250;</button>
    <div class="lb-inner">
      <img class="lb-img" src="" alt="">
      <p class="lb-caption"></p>
    </div>`;
  document.body.appendChild(lb);

  let gImages = [], gIndex = 0;

  function show() {
    const { src, alt } = gImages[gIndex];
    lb.querySelector('.lb-img').src = src;
    lb.querySelector('.lb-img').alt = alt;
    lb.querySelector('.lb-caption').textContent = alt;
    const multi = gImages.length > 1;
    lb.querySelector('.lb-prev').style.visibility = multi ? 'visible' : 'hidden';
    lb.querySelector('.lb-next').style.visibility = multi ? 'visible' : 'hidden';
  }

  function open(gid, index) {
    gImages = lightboxGalleries[gid] || [];
    if (!gImages.length) return;
    gIndex = Math.max(0, Math.min(index, gImages.length - 1));
    show();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lb.querySelector('.lb-img').src = ''; }, 250);
  }

  lb.querySelector('.lb-backdrop').addEventListener('click', close);
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', e => {
    e.stopPropagation();
    gIndex = (gIndex - 1 + gImages.length) % gImages.length;
    show();
  });
  lb.querySelector('.lb-next').addEventListener('click', e => {
    e.stopPropagation();
    gIndex = (gIndex + 1) % gImages.length;
    show();
  });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  { gIndex = (gIndex - 1 + gImages.length) % gImages.length; show(); }
    if (e.key === 'ArrowRight') { gIndex = (gIndex + 1) % gImages.length; show(); }
  });
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-lb-gallery]');
    if (!el) return;
    open(el.dataset.lbGallery, parseInt(el.dataset.lbIndex, 10));
  });
}

// ===========================
// SCROLL REVEAL
// ===========================
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ===========================
// CONTACT FORM
// ===========================
function initForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn = document.getElementById('submit-btn');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 5000);
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Envoyer le message`;
    }
  });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  initTypewriter();
  initNavbar();
  initObfuscation();
  initPhoto();
  initForm();
  initLightbox();
  setTimeout(() => { initReveal(); initCounters(); }, 80);
});
