/* ===============================
   HEADER SCROLL (JS ONLY)
================================ */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 80) {
    header.style.background = 'rgba(255,255,255,0.92)';
    header.style.backdropFilter = 'blur(10px)';
    header.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
    header.style.transition = 'all 0.4s ease';
  } else {
    header.style.background = '';
    header.style.backdropFilter = '';
    header.style.boxShadow = '';
  }
});


/* ===============================
   BUTTON ANIMATION (JS ONLY)
================================ */
const buttons = [
  document.getElementById('btn-hero'),
  document.getElementById('btn-cta')
];

buttons.forEach(button => {
  if (!button) return;

  button.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';

  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px) scale(1.03)';
    button.style.boxShadow = '0 20px 45px rgba(31,58,95,0.45)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '';
  });
});


/* ===============================
   SCROLL SUAVE NAV (ÚNICO)
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    const headerOffset = header ? header.offsetHeight : 0;

    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


/* ===============================
   REVEAL (ROBUSTO E DEFINITIVO)
================================ */
const reveals = document.querySelectorAll('.reveal');

// garante estado inicial SEM animação
reveals.forEach(el => {
  el.classList.remove('active');
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  }
);

// inicia após tudo carregar
window.addEventListener('load', () => {
  reveals.forEach(el => revealObserver.observe(el));
});

/* ===============================
   CARD HOVER ANIMATION (JS ONLY)
================================ */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.boxShadow = '0 25px 60px rgba(31,58,95,0.35)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '';
  });
});
