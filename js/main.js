/**
 * ISDS 3100 Portfolio - Main JavaScript
 * Handles navigation toggles, smooth interactions, active links, and contact simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    // Close mobile nav when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Observer for Single-Page Sections (index.html)
  const sections = document.querySelectorAll('section[id]');
  const pageNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && pageNavLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          pageNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // Interactive Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      // Simulate sending
      setTimeout(() => {
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(212, 175, 55, 0.15)';
        formStatus.style.color = '#F7E7BE';
        formStatus.style.border = '1px solid rgba(212, 175, 55, 0.45)';
        formStatus.style.padding = '0.85rem 1.15rem';
        formStatus.style.borderRadius = '8px';
        formStatus.style.marginBottom = '1.25rem';
        formStatus.style.fontWeight = '500';
        formStatus.innerHTML = '✦ Thank you! Your message has been sent successfully. I will get back to you soon.';
        
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Fade status out after 6 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }

  // Print Resume Trigger
  const printResumeBtn = document.getElementById('printResumeBtn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
