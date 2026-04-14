(function () {
  const NAV_ITEMS = [
    { href: "index.html", label: "Home" },
    { href: "directory.html", label: "Directory" },
    { href: "map.html", label: "Map" },
    { href: "api-docs.html", label: "API" },
    { href: "catalogue.html", label: "Catalogue" },
    { href: "about.html", label: "About" }
  ];

  function getNavbarHTML(currentPage) {
    const pageName = (currentPage || window.location.pathname.split('/').pop() || 'index.html').split('/').pop();

    const desktopLinks = NAV_ITEMS.map(function (item) {
      const active = item.href === pageName ? ' active' : '';
      return '<a href="' + item.href + '" class="nav-link' + active + '">' + item.label + '</a>';
    }).join('');

    const mobileLinks = NAV_ITEMS.map(function (item) {
      const active = item.href === pageName ? ' active' : '';
      return '<a href="' + item.href + '" class="mobile-nav-link' + active + '">' + item.label + '</a>';
    }).join('');

    return '' +
      '<nav id="navbar" class="site-navbar">' +
        '<div class="site-navbar__inner">' +
          '<a href="index.html" class="site-brand" aria-label="Mosque Directory home">' +
            '<span class="site-brand__mark" aria-hidden="true">🕌</span>' +
            '<span class="site-brand__text">Mosque Directory</span>' +
          '</a>' +
          '<div class="site-nav desktop-nav">' + desktopLinks + '</div>' +
          '<button id="hamburger" class="nav-toggle" type="button" aria-label="Open navigation menu" aria-controls="mobile-menu" aria-expanded="false">' +
            '<span class="nav-toggle__line"></span>' +
            '<span class="nav-toggle__line"></span>' +
            '<span class="nav-toggle__line"></span>' +
          '</button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobile-menu" class="mobile-nav" hidden>' +
        '<div class="mobile-nav__backdrop" data-close-nav></div>' +
        '<div class="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">' +
          '<div class="mobile-nav__header">' +
            '<span class="mobile-nav__title">Navigate</span>' +
            '<button class="mobile-nav__close" type="button" aria-label="Close navigation menu" data-close-nav>✕</button>' +
          '</div>' +
          '<div class="mobile-nav__links">' + mobileLinks + '</div>' +
        '</div>' +
      '</div>';
  }

  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!navbar || !toggle || !mobileMenu) return;
    if (navbar.dataset.navReady === 'true') return;
    navbar.dataset.navReady = 'true';

    const panel = mobileMenu.querySelector('.mobile-nav__panel');
    const closeTargets = mobileMenu.querySelectorAll('[data-close-nav]');
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');

    function setOpen(open) {
      toggle.classList.toggle('is-active', open);
      navbar.classList.toggle('is-menu-open', open);
      mobileMenu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      mobileMenu.hidden = !open;
      document.body.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    function toggleMenu() {
      setOpen(!mobileMenu.classList.contains('is-open'));
    }

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 16);
    }, { passive: true });

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu();
    });

    closeTargets.forEach(function (node) {
      node.addEventListener('click', function () {
        setOpen(false);
      });
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        setOpen(false);
      }
    });

    document.addEventListener('click', function (event) {
      if (!mobileMenu.classList.contains('is-open')) return;
      if (panel && panel.contains(event.target)) return;
      if (toggle.contains(event.target)) return;
      setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && mobileMenu.classList.contains('is-open')) {
        setOpen(false);
      }
    });

    setOpen(false);
  }

  window.getNavbarHTML = getNavbarHTML;
  window.initNavbar = initNavbar;
})();
