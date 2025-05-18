// Scroll animation for sections
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
