// General observer for all .animate elements (non-staggered)
const generalObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only trigger once
    }
  });
}, {
  threshold: 0.1
});

// Staggered observer specifically for product cards
const staggeredObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // 200ms stagger
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Apply general animation to other elements
document.querySelectorAll('.animate:not(.product-card)').forEach(el => {
  generalObserver.observe(el);
});

// Apply staggered animation to product cards
document.querySelectorAll('.product-card.animate').forEach(el => {
  staggeredObserver.observe(el);
});

  
  

  





  