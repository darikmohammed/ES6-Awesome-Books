const Navigation = (sectionId) => {
  const navSections = document.querySelectorAll('section');
  const linkMenu = document.querySelectorAll('.navBtn');
  navSections.forEach((section) => {
    section.style.display = 'none';
  });
  linkMenu.forEach((menu) => {
    menu.classList.remove('active');
  });

  document.querySelector(`#${sectionId}`).classList.add('active');
  document.querySelector(`.${sectionId}`).style.display = 'flex'; // working
};

export default Navigation;
