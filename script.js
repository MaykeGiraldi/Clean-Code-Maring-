const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // força reflow para garantir animação consistente
        entry.target.style.transition = 'none';
        entry.target.offsetHeight;
        entry.target.style.transition = '';

        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,              // entra só quando estiver bem visível
    rootMargin: '0px 0px -80px 0px'
  }
);

reveals.forEach(el => observer.observe(el));


/* ===============================
   HEADER SCROLL (JS ONLY)
================================ */

const header = document.getElementById('header');

let lastScroll = 0;

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

  lastScroll = currentScroll;
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
    button.style.transform = 'translateY(0) scale(1)';
    button.style.boxShadow = '';
  });
});
