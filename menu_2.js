const buttons = document.querySelectorAll('.menu__button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the select class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove('select');
    });
    // Add the select class to the clicked button
    button.classList.add('select');
    // Scroll to the section with the corresponding id
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);
    target.scrollIntoView({behavior: 'smooth'});
  });
});


