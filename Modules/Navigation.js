const Navigation = (sectionId) => {
  const navSections = document.querySelectorAll("section");
  navSections.forEach((section) => {
    section.classList.remove("active");
    section.style.display = "none";
  });
  sectionId.classList.add("active");
  sectionId.style.display = "flex";
};

export default Navigation;
