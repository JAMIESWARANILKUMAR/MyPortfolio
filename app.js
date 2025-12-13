const createSpark = (btn) => {
  const spark = document.createElement('span');
  spark.className = 'btn-spark';
  const size = Math.random() * 3 + 1;
  spark.style.width = `${size}px`;
  spark.style.height = `${Math.random() * 40 + 10}px`;
  spark.style.left = `${Math.random() * 100}%`;
  spark.style.top = `${Math.random() * 100}%`;
  btn.appendChild(spark);
  setTimeout(() => spark.remove(), 400);
};

const observePanels = () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.panel').forEach((panel) => observer.observe(panel));

  const revealTargets = document.querySelectorAll(
    '.timeline article, .project-carousel article, .achievements-grid article, .cert-grid article, .flip-card'
  );
  revealTargets.forEach((target) => observer.observe(target));
};

const animateSkills = () => {
  const skills = document.querySelectorAll('.skill');
  const skillObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('active');
          const percent = element.dataset.percent;
          element.style.setProperty('--fill', `${percent}%`);
          obs.unobserve(element);
        }
      });
    },
    { threshold: 0.4 }
  );
  skills.forEach((skill) => skillObserver.observe(skill));
};

const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const target = parseInt(entry.target.dataset.target, 10) || 0;
          const prefix = entry.target.dataset.prefix || '';
          const suffix = entry.target.dataset.suffix || '';
          let current = 0;
          const step = Math.max(1, target / 60);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            entry.target.textContent = `${prefix}${Math.floor(current)}${suffix}`;
          }, 30);
          entry.target.dataset.animated = 'true';
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => counterObserver.observe(counter));
};

const handleForm = () => {
  const form = document.getElementById('contact-form');
  const messageEl = document.getElementById('form-success');
  if (!form || !messageEl) return;
  const showMessage = (text) => {
    messageEl.textContent = text;
    messageEl.classList.add('visible');
    setTimeout(() => {
      messageEl.classList.remove('visible');
      messageEl.textContent = '';
    }, 4000);
  };
  const whatsappNumber = '916301588867';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    if (!name || !email) {
      showMessage('Please fill in the required fields.');
      return;
    }
    const whatsappText = `Hi Jami, I'm ${name} (${email}). ${message ? `Project details: ${message}` : ''}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    showMessage('Opening WhatsApp...');
    window.open(whatsappUrl, '_blank');
    form.reset();
  });
};

const initParticles = () => {
  const canvas = document.getElementById('about-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const createParticles = () => {
    const count = 60;
    particles = [];
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
  };
  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    createParticles();
  };
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(89, 229, 255, 0.7)';
      ctx.fill();
    });
    ctx.lineWidth = 0.4;
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  window.addEventListener('resize', resize);
  resize();
  draw();
};

const initLightningButtons = () => {
  document.querySelectorAll('.lightning-btn').forEach((button) => {
    button.addEventListener('mouseenter', () => createSpark(button));
    button.addEventListener('click', () => createSpark(button));
    if (button.dataset.target) {
      button.addEventListener('click', () => {
        const target = document.querySelector(button.dataset.target);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
};

const runHeroTyping = () => {
  const heroElement = document.getElementById('hero-name');
  const text = 'Jami Eswar Anil Kumar';
  if (!heroElement) return;
  heroElement.textContent = '';
  let index = 0;
  let typingForward = true;
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseAfterTyped = 900;
  const pauseBeforeStart = 500;

  const step = () => {
    heroElement.textContent = text.slice(0, index);
    if (typingForward) {
      if (index < text.length) {
        index += 1;
        setTimeout(step, typingSpeed);
      } else {
        typingForward = false;
        setTimeout(step, pauseAfterTyped);
      }
    } else {
      if (index > 0) {
        index -= 1;
        setTimeout(step, deletingSpeed);
      } else {
        typingForward = true;
        setTimeout(step, pauseBeforeStart);
      }
    }
  };
  setTimeout(step, 600);
};

const initMobileNav = () => {
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  const closeNav = () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  const openNav = () => {
    nav.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  };

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && event.target !== toggle) {
      closeNav();
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  observePanels();
  animateSkills();
  animateCounters();
  handleForm();
  initParticles();
  initLightningButtons();
  initMobileNav();
  runHeroTyping();
});
