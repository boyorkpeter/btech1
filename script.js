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
  variant: 'developer',
};

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
let animationFrame = 0;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ambientLights = [
  { x: 0.14, y: 0.2, radius: 0.42, phase: 0, color: 'rgba(190, 132, 78, 0.16)' },
  { x: 0.84, y: 0.26, radius: 0.34, phase: 2.1, color: 'rgba(112, 137, 151, 0.12)' },
  { x: 0.72, y: 0.88, radius: 0.48, phase: 4.2, color: 'rgba(164, 120, 73, 0.09)' },
];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  drawBackground(performance.now());
}

window.addEventListener('resize', resize);

function drawBackground(time) {
  ctx.clearRect(0, 0, width, height);
  const base = ctx.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, '#191918');
  base.addColorStop(0.52, '#20201e');
  base.addColorStop(1, '#171817');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);

  for (const light of ambientLights) {
    const drift = reducedMotion.matches ? 0 : Math.sin(time * 0.00012 + light.phase) * 0.025;
    const x = width * (light.x + drift);
    const y = height * (light.y - drift);
    const radius = Math.max(width, height) * light.radius;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, light.color);
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }
}

function animate(time) {
  drawBackground(time);
  if (!reducedMotion.matches && !document.hidden) {
    animationFrame = requestAnimationFrame(animate);
  }
}

function updateAnimation() {
  cancelAnimationFrame(animationFrame);
  if (document.hidden) return;
  animate(performance.now());
}

renderVariant();
resize();
if (!reducedMotion.matches) {
  animationFrame = requestAnimationFrame(animate);
}
document.addEventListener('visibilitychange', updateAnimation);
reducedMotion.addEventListener('change', updateAnimation);
