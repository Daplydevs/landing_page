function handleScroll() {
    var topNav = document.querySelector('.top-nav');
    if (window.scrollY > 100) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  }