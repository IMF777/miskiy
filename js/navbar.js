// Generates the navbar HTML — call insertNavbar() after DOM ready
function getNavbarHTML(activePage) {
  var links = [
    { href: "index.html", label: "Home" },
    { href: "directory.html", label: "Directory" },
    { href: "map.html", label: "Map" },
    { href: "catalogue.html", label: "Catalogue" },
    { href: "api-docs.html", label: "API" },
    { href: "about.html", label: "About" }
  ];

  var desktopLinks = links.map(function (l) {
    var cls = "nav-link" + (l.href === activePage ? " active" : "");
    return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
  }).join("");

  var mobileLinks = links.map(function (l) {
    var cls = "nav-link" + (l.href === activePage ? " active" : "");
    return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
  }).join("");

  return '<nav id="navbar" class="navbar scrolled">' +
    '<div class="navbar-inner">' +
      '<a href="index.html" class="nav-logo"><div class="nav-logo-icon">🕌</div><span>Mosque Directory</span></a>' +
      '<div class="nav-links">' + desktopLinks + '</div>' +
      '<button class="hamburger" id="hamburger" aria-label="Menu">' +
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>' +
      '</button>' +
    '</div>' +
    '<div class="mobile-menu" id="mobile-menu">' + mobileLinks + '</div>' +
  '</nav>';
}
