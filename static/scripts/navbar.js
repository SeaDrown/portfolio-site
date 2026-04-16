fetch("/static/html/navbar.html")
      .then(res => res.text())
      .then(html => document.getElementById('navbar-placeholder').innerHTML = html);