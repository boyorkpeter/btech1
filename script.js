const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const brandName = document.getElementById('brandName');
const navLinks = document.getElementById('navLinks');
const navAction = document.getElementById('navAction');
const eyebrow = document.getElementById('eyebrow');
const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');
const primaryBtn = document.getElementById('primaryBtn');
const secondaryBtn = document.getElementById('secondaryBtn');
const featuresSection = document.getElementById('features');
const detailPanel = document.getElementById('detailPanel');
const resourcePanel = document.getElementById('resourcePanel');
const variantButtons = document.querySelectorAll('.variant-btn');
const businessName = 'B.Tech (Boyork Technologies)';
const contactEmail = 'pboyork@gmail.com';
const contactPhone = '+233 242278244';
const whatsappNumber = contactPhone.replace(/\D/g, '');
const whatsappMessage = encodeURIComponent('Hello B.Tech, I would like to discuss a website or management system project.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const linkedinProfileUrl = 'https://www.linkedin.com/in/peter-boyork-2538a932b/';
const githubProfileUrl = 'https://github.com/boyorkpeter';
document.getElementById('whatsappFloat').href = whatsappUrl;

const themes = {
  aurora: { base: 165, accent: '#8ed8c8' },
  sunset: { base: 28, accent: '#d88a62' },
  violet: { base: 270, accent: '#aa91d8' },
  ice: { base: 205, accent: '#86bdd6' },
};

const variants = {
  saas: {
    brand: 'AURORA',
    nav: ['Platform', 'Solutions', 'Pricing', 'Resources'],
    action: 'Book Demo',
    eyebrow: 'Scale smarter',
    title: 'Turn product momentum into measurable growth.',
    text: 'Launch a sharper product story with AI automation, revenue reporting, and conversion-driven design systems built to scale.',
    primary: 'Get Started',
    secondary: 'Watch Demo',
    features: [
      { number: '01', title: 'Revenue Insights', text: 'See what converts and where product signals are strongest across the funnel.' },
      { number: '02', title: 'Automation', text: 'Turn complex workflows into fast, measurable systems your team can ship with confidence.' },
      { number: '03', title: 'Growth Loops', text: 'Build feedback loops that connect product usage, retention, and acquisition in one motion.' },
    ],
    detail: 'stats',
    stats: [
      { value: '4.8x', label: 'Faster launches' },
      { value: '86%', label: 'Pipeline lift' },
      { value: '32%', label: 'Lower churn' },
      { value: '24/7', label: 'Signal coverage' },
    ],
  },
  studio: {
    brand: 'LUMA STUDIO',
    nav: ['Work', 'Services', 'Process', 'Journal'],
    action: 'Start Project',
    eyebrow: 'Designing motion that feels alive',
    title: 'Craft identities and experiences that people remember.',
    text: 'From campaign systems to immersive product storytelling, we build visual worlds that make brands feel premium and unmistakable.',
    primary: 'Book a Call',
    secondary: 'View Work',
    features: [
      { number: '01', title: 'Brand Systems', text: 'Create distinctive identity frameworks that elevate perception and sharpen creative focus.' },
      { number: '02', title: 'Campaign Design', text: 'Design launch moments that land clearly across digital, motion, and social ecosystems.' },
      { number: '03', title: 'Creative Strategy', text: 'Translate big ideas into intentional storytelling with measurable business impact.' },
    ],
    detail: 'testimonial',
    testimonials: [
      { quote: 'Their work made our brand feel premium overnight without sacrificing clarity.', author: 'Maya Chen', role: 'VP Marketing' },
      { quote: 'They turned our story into an experience that customers actually wanted to share.', author: 'Nathan Ross', role: 'Founder' },
      { quote: 'The team paired sharp design taste with a real understanding of conversion and momentum.', author: 'Leah Brooks', role: 'Growth Lead' },
    ],
  },
  developer: {
    brand: 'B.TECH',
    nav: ['Portfolio', 'Services', 'Packages', 'Contact'],
    action: 'Start a Project',
    eyebrow: 'Websites and management systems for ambitious businesses worldwide',
    title: 'Build a stronger business online and behind the scenes.',
    text: 'I create fast, mobile-first websites and practical management systems that help businesses anywhere track daily activity, manage business flow, and win more enquiries.',
    primary: 'Request a Quote',
    secondary: 'View Packages',
    features: [
      { number: '01', title: 'Business websites', text: 'A polished mobile experience that builds trust and guides customers toward calls, WhatsApp, bookings, or orders.' },
      { number: '02', title: 'Management systems', text: 'Custom dashboards for daily activity, sales, customers, stock, staff tasks, and operational records.' },
      { number: '03', title: 'Clearer business flow', text: 'Connect your team, records, and reports so you can see what is happening and make better decisions.' },
    ],
    detail: 'pricing',
    pricing: [
      { name: 'Launch', price: 'GHS 1,500+', description: 'For a focused business landing page.', points: ['One-page website', 'WhatsApp or email CTA', 'Mobile responsive design'], featured: false },
      { name: 'Growth', price: 'GHS 2,500+', description: 'For a business ready to look established.', points: ['Up to five pages', 'Gallery, services, or menu section', 'Domain and deployment support'], featured: true },
      { name: 'Signature', price: 'GHS 4,000+', description: 'For a premium website or focused business system.', points: ['Custom visual direction', 'Daily activity or sales dashboard', 'Final quote based on scope'], featured: false },
    ],
  },
  product: {
    brand: 'PULSEKIT',
    nav: ['Overview', 'Features', 'Pricing', 'Resources'],
    action: 'Try Free',
    eyebrow: 'Built for momentum',
    title: 'Give your product a clearer path from idea to conversion.',
    text: 'PulseKit equips teams with structured onboarding, conversion analytics, and a product experience framework that keeps ships focused and customers engaged.',
    primary: 'Try for Free',
    secondary: 'Explore Features',
    features: [
      { number: '01', title: 'Onboarding Flow', text: 'Guide activation with guided experiences that reduce friction and improve retention.' },
      { number: '02', title: 'Conversion Signals', text: 'Track product behaviour with dashboards that reveal where intent turns into action.' },
      { number: '03', title: 'Adaptive UX', text: 'Continuously tune customer journeys with product insights that keep experiences relevant.' },
    ],
    detail: 'pricing',
    pricing: [
      { name: 'Starter', price: 'GHS 250', description: 'For small teams shipping fast.', points: ['Up to 3 projects', 'Core analytics', 'Email support'], featured: false, recurring: true },
      { name: 'Growth', price: 'GHS 750', description: 'For product teams in motion.', points: ['Unlimited projects', 'Advanced insights', 'Priority support'], featured: true, recurring: true },
      { name: 'Scale', price: 'GHS 1,500', description: 'For companies needing depth and speed.', points: ['Everything in Growth', 'Custom onboarding', 'Dedicated success partner'], featured: false, recurring: true },
    ],
  },
};

const state = {
  particleCount: 18,
  gravityStrength: 120,
  theme: 'aurora',
  variant: 'developer',
  volume: 0.6,
  muted: false,
};

const audioEngine = {
  ctx: null,
  masterGain: null,
  ambientGain: null,
  init() {
    if (this.ctx) return;

    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;

    this.ctx = new AudioCtor();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.16;
    this.masterGain.connect(this.ctx.destination);

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.value = 0.04;
    this.ambientGain.connect(this.masterGain);

    const drone1 = this.ctx.createOscillator();
    drone1.type = 'sine';
    drone1.frequency.value = 88;

    const drone2 = this.ctx.createOscillator();
    drone2.type = 'triangle';
    drone2.frequency.value = 132;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 820;
    filter.Q.value = 0.7;

    drone1.connect(filter);
    drone2.connect(filter);
    filter.connect(this.ambientGain);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.09;
    lfoGain.gain.value = 18;
    lfo.connect(lfoGain);
    lfoGain.connect(drone1.frequency);
    lfoGain.connect(drone2.frequency);

    drone1.start();
    drone2.start();
    lfo.start();
  },
  resume() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  setVolume(value) {
    if (!this.masterGain) return;
    const safeValue = Math.min(Math.max(value, 0), 1);
    this.masterGain.gain.value = state.muted ? 0 : safeValue * 0.22;
  },
  playPulse({ frequency = 220, duration = 0.16, gain = 0.05, type = 'sine' } = {}) {
    if (!this.ctx || state.muted) return;

    const oscillator = this.ctx.createOscillator();
    const output = this.ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);

    output.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    output.gain.exponentialRampToValueAtTime(gain, this.ctx.currentTime + 0.02);
    output.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    oscillator.connect(output);
    output.connect(this.masterGain);

    oscillator.start();
    oscillator.stop(this.ctx.currentTime + duration + 0.04);
  },
  playPointerPulse(x, y) {
    if (!this.ctx) return;
    const normalizedX = x / Math.max(width, 1);
    const frequency = 180 + normalizedX * 220 + (y / Math.max(height, 1)) * 30;
    this.playPulse({ frequency, duration: 0.12, gain: 0.04, type: 'triangle' });
  },
  playCollisionPulse() {
    if (!this.ctx) return;
    const frequency = 150 + Math.random() * 110;
    this.playPulse({ frequency, duration: 0.08, gain: 0.03, type: 'square' });
  },
};

function hexToRgba(hex, alpha) {
  const safeHex = hex.replace('#', '');
  const normalized = safeHex.length === 3
    ? safeHex.split('').map((c) => c + c).join('')
    : safeHex;

  const value = Number.parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderVariant() {
  const variant = variants[state.variant];

  const sectionIds = {
    saas: ['platform', 'solutions', 'pricing', 'resources'],
    studio: ['work', 'services', 'process', 'journal'],
    developer: ['portfolio', 'services', 'packages', 'contact'],
    product: ['overview', 'features', 'pricing', 'resources'],
  };

  const ids = sectionIds[state.variant] || ['overview', 'features', 'pricing', 'resources'];

  const heroSection = document.querySelector('.hero');
  if (heroSection) heroSection.id = ids[0];
  featuresSection.id = ids[1];
  detailPanel.id = ids[2];
  resourcePanel.id = ids[3];

  brandName.textContent = variant.brand;
  navAction.textContent = variant.action;
  eyebrow.textContent = variant.eyebrow;
  heroTitle.textContent = variant.title;
  heroText.textContent = variant.text;
  primaryBtn.textContent = variant.primary;
  secondaryBtn.textContent = variant.secondary;

  navLinks.innerHTML = variant.nav
    .map((item, index) => `<a href="#${(ids[index] || item.toLowerCase().replace(/\s+/g, '-'))}">${item}</a>`)
    .join('');

  const sectionCopy = {
    saas: {
      features: ['Platform', 'Tools to turn product signals into measurable growth.'],
      detail: ['Performance', 'Clear insight for every stage of your product.'],
      resources: ['Resources', 'Practical guides for teams building with momentum.'],
    },
    studio: {
      features: ['Capabilities', 'Creative thinking that makes brands memorable.'],
      detail: ['Client notes', 'What thoughtful design can make possible.'],
      resources: ['Journal', 'Ideas and process notes from the studio.'],
    },
    developer: {
      features: ['Services', 'Digital tools that make your business easier to run.'],
      detail: ['Packages', 'Straightforward starting points, tailored to your needs.'],
      resources: ['Project concepts', 'Ideas designed around everyday business needs.'],
    },
    product: {
      features: ['Product features', 'A clearer path from first visit to loyal customer.'],
      detail: ['Plans', 'Choose the level that fits your team today.'],
      resources: ['Resources', 'Practical ideas for products built to grow.'],
    },
  };
  const copy = sectionCopy[state.variant];

  featuresSection.innerHTML = `
    <header class="section-heading">
      <p class="section-kicker">${copy.features[0]}</p>
      <h2>${copy.features[1]}</h2>
    </header>
    <div class="feature-grid">
      ${variant.features.map((feature) => `
        <article class="feature-card">
          <div class="icon">${feature.number}</div>
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </article>
      `).join('')}
    </div>
  `;

  if (variant.detail === 'stats') {
    detailPanel.innerHTML = `
      <header class="section-heading">
        <p class="section-kicker">${copy.detail[0]}</p>
        <h2>${copy.detail[1]}</h2>
      </header>
      <div class="stats-grid">
        ${variant.stats.map((stat) => `
          <div class="stat-card">
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (variant.detail === 'pricing') {
    detailPanel.innerHTML = `
      <header class="section-heading">
        <p class="section-kicker">${copy.detail[0]}</p>
        <h2>${copy.detail[1]}</h2>
      </header>
      <div class="pricing-grid">
        ${variant.pricing.map((plan) => `
          <div class="pricing-card ${plan.featured ? 'featured' : ''}">
            <h4>${plan.name}</h4>
            <div class="price">${plan.price}${plan.recurring ? '<span>/mo</span>' : ''}</div>
            <p>${plan.description}</p>
            <ul class="price-list">
              ${plan.points.map((point) => `<li>${point}</li>`).join('')}
            </ul>
            <button class="primary">Choose ${plan.name}</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (variant.detail === 'testimonial') {
    detailPanel.innerHTML = `
      <header class="section-heading">
        <p class="section-kicker">${copy.detail[0]}</p>
        <h2>${copy.detail[1]}</h2>
      </header>
      <div class="testimonial-grid">
        ${variant.testimonials.map((item) => `
          <div class="testimonial-card">
            <p>“${item.quote}”</p>
            <div class="person">
              <div class="avatar">${item.author.charAt(0)}</div>
              <div>
                <div>${item.author}</div>
                <small>${item.role}</small>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const resources = {
    saas: [
      { title: 'Product briefing', text: 'Clear goals, positioning, and launch checklists for product teams in motion.' },
      { title: 'Automation playbook', text: 'A concise system for turning repeatable tasks into measured growth loops.' },
      { title: 'Revenue notes', text: 'Actionable analysis for product launches, performance, and retention insight.' },
    ],
    studio: [
      { title: 'Visual direction', text: 'Creative frameworks that sharpen brand perception and campaign clarity.' },
      { title: 'Launch system', text: 'How to align storytelling, pacing, and creative output across channels.' },
      { title: 'Client process', text: 'A collaborative design workflow built for quality, speed, and momentum.' },
    ],
    developer: [
      { title: 'Concept: Hospitality website', text: 'A flexible website concept for restaurants, cafés, hotels, guesthouses, and service businesses focused on discovery and direct enquiries.' },
      { title: 'Concept: Daily Flow dashboard', text: 'A management system concept for recording daily sales, expenses, tasks, and team activity in one place.' },
      { title: 'Concept: Stock and sales tracker', text: 'A business system concept for monitoring inventory movement, customer orders, and simple performance reports.' },
      { title: 'Contact', text: `${businessName} | ${contactEmail} | ${contactPhone}` },
    ],
    product: [
      { title: 'Activation guide', text: 'A practical playbook for reducing friction from first launch to repeat usage.' },
      { title: 'Signals dashboard', text: 'Definitions and examples for tracking product intent and conversion quality.' },
      { title: 'Growth roadmap', text: 'A prioritized framework for focus, iteration, and sustainable product momentum.' },
    ],
  };

  resourcePanel.innerHTML = `
    <header class="section-heading">
      <p class="section-kicker">${copy.resources[0]}</p>
      <h2>${copy.resources[1]}</h2>
    </header>
    <div class="resource-grid">
      ${resources[state.variant].map((item) => `
        <article class="resource-card">
          <h4>${item.title}</h4>
          <p>${item.title === 'Contact'
            ? `<a href="mailto:${contactEmail}">${contactEmail}</a><br><a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at ${contactPhone}">${contactPhone} · WhatsApp</a>`
            : item.text}</p>
        </article>
      `).join('')}
      ${state.variant === 'developer' ? `
        <article class="resource-card contact-card">
          <h4>Ready to start?</h4>
          <p>Send a short description of your website or management-system idea.</p>
          <a class="primary contact-link" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${contactEmail}&amp;su=Website%20or%20management%20system%20enquiry&amp;body=Hello%20B.Tech%2C%0A%0AI%20would%20like%20to%20discuss%20a%20website%20or%20management%20system%20project." target="_blank" rel="noopener">Open Gmail to Contact Me</a>
          <div class="social-links">
            <a href="${githubProfileUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="${linkedinProfileUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </article>
      ` : ''}
    </div>
  `;

  const contactButtons = document.querySelectorAll('.primary:not(.contact-link), .nav-button');
  contactButtons.forEach((button) => {
    button.onclick = () => {
      if (state.variant !== 'developer') return;
      window.location.hash = ids[3];
      document.getElementById(ids[3])?.scrollIntoView({ behavior: 'smooth' });
    };
  });

  secondaryBtn.onclick = () => {
    document.getElementById(ids[2])?.scrollIntoView({ behavior: 'smooth' });
  };

  if (state.variant === 'developer') {
    detailPanel.querySelectorAll('.pricing-card .primary').forEach((button) => {
      button.onclick = () => {
        window.location.hash = ids[3];
        document.getElementById(ids[3])?.scrollIntoView({ behavior: 'smooth' });
      };
    });
  }
}

variantButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.variant = button.dataset.variant;
    variantButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderVariant();
  });
});

let width = 0;
let height = 0;
let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: true };
let stars = [];
let orbs = [];

function generateOrbs() {
  const theme = themes[state.theme];
  orbs = Array.from({ length: state.particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    r: Math.random() * 10 + 7,
    hue: theme.base + Math.random() * 100 - 20,
    phase: Math.random() * Math.PI * 2,
  }));
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  stars = Array.from({ length: 220 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2.3 + 0.7,
    a: Math.random() * 0.7 + 0.2,
    drift: Math.random() * 0.6 + 0.2,
  }));

  generateOrbs();
}

function updatePointer(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
  audioEngine.resume();
  audioEngine.playPointerPulse(pointer.x, pointer.y);
}

window.addEventListener('pointermove', updatePointer);
window.addEventListener('pointerdown', updatePointer);
window.addEventListener('pointerleave', () => {
  pointer.active = false;
});
window.addEventListener('resize', resize);

function drawBackground() {
  ctx.clearRect(0, 0, width, height);

  const g = ctx.createRadialGradient(
    width * 0.5,
    height * 0.5,
    0,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.7
  );
  g.addColorStop(0, 'rgba(19, 33, 67, 0.7)');
  g.addColorStop(0.4, 'rgba(8, 16, 31, 0.55)');
  g.addColorStop(1, 'rgba(2, 5, 14, 0.9)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    star.y += star.drift;
    if (star.y > height + 4) {
      star.y = -4;
      star.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${star.a})`;
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function updateOrbs() {
  for (let i = 0; i < orbs.length; i += 1) {
    const orb = orbs[i];
    const dx = pointer.x - orb.x;
    const dy = pointer.y - orb.y;
    const distSq = dx * dx + dy * dy + 0.001;
    const dist = Math.sqrt(distSq);

    const force = pointer.active ? state.gravityStrength / distSq : 0;
    const nx = dx / dist;
    const ny = dy / dist;

    orb.vx += (nx * force - orb.vx * 0.004) * 0.35;
    orb.vy += (ny * force - orb.vy * 0.004) * 0.35;

    orb.vx *= 0.992;
    orb.vy *= 0.992;

    orb.x += orb.vx + Math.sin((Date.now() * 0.002) + orb.phase) * 0.26;
    orb.y += orb.vy + Math.cos((Date.now() * 0.0017) + orb.phase) * 0.26;

    for (let j = i + 1; j < orbs.length; j += 1) {
      const other = orbs[j];
      const dx2 = orb.x - other.x;
      const dy2 = orb.y - other.y;
      const distance = Math.hypot(dx2, dy2) || 0.001;
      const minDistance = orb.r + other.r + 6;

      if (distance < minDistance) {
        const angle = Math.atan2(dy2, dx2);
        const overlap = (minDistance - distance) * 0.5;
        const pushX = Math.cos(angle) * overlap;
        const pushY = Math.sin(angle) * overlap;

        orb.x += pushX;
        orb.y += pushY;
        other.x -= pushX;
        other.y -= pushY;

        orb.vx += Math.cos(angle) * 0.22;
        orb.vy += Math.sin(angle) * 0.22;
        other.vx -= Math.cos(angle) * 0.22;
        other.vy -= Math.sin(angle) * 0.22;

        audioEngine.resume();
        audioEngine.playCollisionPulse();
      }
    }

    if (orb.x < -40) orb.x = width + 40;
    if (orb.x > width + 40) orb.x = -40;
    if (orb.y < -40) orb.y = height + 40;
    if (orb.y > height + 40) orb.y = -40;
  }
}

function drawField() {
  const pulse = 1 + Math.sin(Date.now() * 0.0015) * 0.12;
  const r = 90 * pulse;
  const accent = themes[state.theme].accent;

  ctx.beginPath();
  ctx.fillStyle = hexToRgba(accent, 0.06);
  ctx.arc(pointer.x, pointer.y, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 1.2;
  ctx.arc(pointer.x, pointer.y, r + 24, 0, Math.PI * 2);
  ctx.stroke();
}

function drawOrbs() {
  for (const orb of orbs) {
    const glow = 16 + orb.r * 1.5;
    const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, glow);
    grad.addColorStop(0, `hsla(${orb.hue}, 100%, 72%, 1)`);
    grad.addColorStop(0.35, `hsla(${orb.hue + 8}, 100%, 65%, 0.7)`);
    grad.addColorStop(1, `hsla(${orb.hue + 12}, 100%, 60%, 0)`);

    ctx.beginPath();
    ctx.fillStyle = grad;
    ctx.arc(orb.x, orb.y, glow, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `hsla(${orb.hue}, 100%, 75%, 0.95)`;
    ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  drawBackground();
  updateOrbs();
  drawField();
  drawOrbs();
  requestAnimationFrame(animate);
}

renderVariant();
resize();
animate();
