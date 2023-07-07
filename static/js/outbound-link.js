function outboundLinkInBlank(clipboard) {
  document.querySelectorAll('a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (
      href &&
      href.startsWith('http') &&
      !href.startsWith('https://babitmf.github.io/')
    ) {
      link.setAttribute('target', '_blank');
    }
  });
}

outboundLinkInBlank();
