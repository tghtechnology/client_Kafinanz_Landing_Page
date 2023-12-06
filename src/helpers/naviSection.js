const scrollToSection = (id) => {
  const target = document.getElementById(id);
  let offset = 150;

  if (window.innerWidth > 768) {
    offset = 100;
  }

  if (target) {
    const targetOffset = target.offsetTop - offset;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  }
};

export { scrollToSection };
