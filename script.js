// Animate skill bars on scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress');
  const trigger = window.innerHeight * 0.8;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < trigger) {
      skill.style.width = skill.style.width; // keep width from HTML
    }
  });
});
