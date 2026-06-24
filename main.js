// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Image fallback: hide broken images and show gradient background
document.querySelectorAll('.service-photo').forEach(img => {
  img.addEventListener('error', () => {
    img.classList.add('img-error');
  });
});

// Scroll reveal
const revealSelectors = [
  '.service-row',
  '.com-step',
  '.step',
  '.contato-info',
  '.contato-form',
  '.sobre-single',
  '.cta-inner',
  '.comunidade-cta',
];

const revealEls = document.querySelectorAll(revealSelectors.join(','));
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 60 * i);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = 'Enviar mensagem';
    btn.disabled = false;
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 4000);
  }, 1200);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--blue)' : '';
  });
}, { passive: true });
