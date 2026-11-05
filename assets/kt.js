/* KiteTutor – wspólne elementy podglądu: ikony, nagłówek, panel boczny, dolny pasek, stopka.
   Wstawiane przed startem Alpine (skrypt na końcu <body>, Alpine z defer). */
(function () {
  var P = {
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10l5-3v10l-5-3"/>',
    album: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M12 7l1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.4-2.3 3.3-.5z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    wallet: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
    note: '<path d="M5 3h10l4 4v14H5z"/><path d="M9 11h6M9 15h6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a5 5 0 0 1 5.5 5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    left: '<path d="M15 6l-6 6 6 6"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    cam: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10l5-3v10l-5-3"/>',
    screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M9 10l3-3 3 3M12 7v6"/>',
    hand: '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5V4.5a1.5 1.5 0 0 1 3 0V11V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5A6 6 0 0 1 5 18l-2-4a1.5 1.5 0 0 1 2.6-1.5L8 15"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
    file: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
    out: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>'
  };
  function icon(n, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || '') + '>' + (P[n] || '') + '</svg>';
  }
  var KITE = '<svg viewBox="36 14 128 162" aria-hidden="true"><polygon points="100,20 160,95 100,170 40,95" fill="#6C4CF1"/><polygon points="100,20 40,95 100,95" fill="#FF5A5F"/><polygon points="100,95 160,95 100,170" fill="#FF5A5F"/><polygon points="100,20 160,95 100,170 40,95" fill="none" stroke="#1C1640" stroke-width="9" stroke-linejoin="round"/><circle cx="83" cy="92" r="11" fill="#fff"/><circle cx="117" cy="92" r="11" fill="#fff"/><circle cx="85" cy="93" r="5.5" fill="#1C1640"/><circle cx="119" cy="93" r="5.5" fill="#1C1640"/><path d="M88 114 Q100 124 112 114" fill="none" stroke="#1C1640" stroke-width="6" stroke-linecap="round"/></svg>';
  var LOGO = '<a class="logo" href="index.html" aria-label="KiteTutor – strona główna">' + KITE + '<span>kite<b>tutor</b></span></a>';

  var here = (location.pathname.split('/').pop() || 'index.html');
  function cur(href) { return href.indexOf('#') < 0 && href === here ? ' aria-current="page"' : ''; }

  var DEMO = '<div class="demo" x-data="{o:true}" x-show="o"><span>Podgląd demo – dane są przykładowe.</span><button type="button" @click="o=false" aria-label="Zamknij pasek podglądu">×</button></div>';

  var PUB = [['szukaj.html', 'Znajdź korepetytora'], ['index.html#jak', 'Jak to działa'], ['album.html', 'Ekipa'], ['korepetytor.html', 'Dla korepetytorów']];

  function header() {
    var nav = PUB.map(function (l) { return '<a href="' + l[0] + '"' + cur(l[0]) + '>' + l[1] + '</a>'; }).join('');
    return DEMO + '<header class="hdr" x-data="{m:false}" @keydown.escape.window="m=false"><div class="wrap">' + LOGO +
      '<nav aria-label="Główna">' + nav + '</nav>' +
      '<div class="end"><a class="btn ghost sm desk" href="start.html#logowanie">Zaloguj się</a><a class="btn sm desk" href="start.html">Załóż konto</a>' +
      '<a class="btn sm mob" href="start.html#logowanie">Zaloguj</a>' +
      '<button class="iconbtn mob" type="button" @click="m=true" aria-label="Otwórz menu">' + icon('menu') + '</button></div></div>' +
      '<div class="sheet" x-show="m" x-cloak x-transition.opacity><div class="scrim" @click="m=false"></div><div class="body" role="dialog" aria-label="Menu">' +
      '<div class="row between" style="margin-bottom:8px">' + LOGO + '<button class="iconbtn" type="button" @click="m=false" aria-label="Zamknij menu">' + icon('x') + '</button></div>' +
      nav + '<a href="uczen.html">Panel ucznia (demo)</a><a href="rodzic.html">Panel rodzica (demo)</a>' +
      '<div style="margin-top:auto;display:grid;gap:8px;padding-top:16px"><a class="btn block" href="start.html">Załóż konto</a><a class="btn ghost block" href="start.html#logowanie">Zaloguj się</a>' +
      '<p class="tiny muted" style="text-align:center;margin-top:6px">Polski · złoty</p></div></div></div></header>';
  }

  function footer() {
    return '<footer class="ftr"><div class="wrap"><div class="grid g4" style="gap:28px">' +
      '<div class="stack">' + LOGO + '<p class="small">Korepetycje online jeden na jeden, z lekcją wideo w przeglądarce i raportem dla rodzica.</p></div>' +
      '<div><h4>Uczniowie i rodzice</h4><ul><li><a href="szukaj.html">Znajdź korepetytora</a></li><li><a href="album.html">Ekipa i album</a></li><li><a href="rodzic.html">Panel rodzica</a></li></ul></div>' +
      '<div><h4>Korepetytorzy</h4><ul><li><a href="korepetytor.html">Zostań korepetytorem</a></li><li><a href="lekcja.html">Pokój lekcyjny</a></li></ul></div>' +
      '<div><h4>Zaufanie</h4><ul><li><a href="index.html#bezpieczenstwo">Bezpieczeństwo dzieci</a></li><li><a href="index.html">Regulamin i prywatność (wkrótce)</a></li></ul></div>' +
      '</div><p class="tiny" style="margin-top:28px;opacity:.7">© 2026 KiteTutor. Podgląd demonstracyjny – usługa jeszcze nie działa.</p></div></footer>';
  }

  var ROLES = {
    uczen: { name: 'Uczeń', who: 'Ola, 16 lat', av: 'O', color: '#FF5A5F', tabs: [['uczen.html', 'home', 'Pulpit'], ['lekcja.html', 'video', 'Lekcja'], ['uczen.html#materialy', 'book', 'Materiały'], ['album.html', 'album', 'Album'], ['szukaj.html', 'search', 'Szukaj']] },
    korepetytor: { name: 'Korepetytor', who: 'Marta Kowalczyk', av: 'M', color: '#5B3BE8', tabs: [['korepetytor.html', 'home', 'Pulpit'], ['korepetytor.html#kalendarz', 'calendar', 'Kalendarz'], ['lekcja.html', 'video', 'Lekcja'], ['korepetytor.html#ogloszenia', 'users', 'Uczniowie'], ['korepetytor.html#wyplaty', 'wallet', 'Wypłaty']] },
    rodzic: { name: 'Rodzic', who: 'Anna, mama Oli', av: 'A', color: '#1FA97A', tabs: [['rodzic.html', 'home', 'Pulpit'], ['rodzic.html#postepy', 'chart', 'Postępy'], ['rodzic.html#platnosci', 'wallet', 'Płatności'], ['rodzic.html#zgody', 'shield', 'Zgody'], ['szukaj.html', 'search', 'Szukaj']] }
  };

  function appChrome(role) {
    var r = ROLES[role];
    var tabs = r.tabs.map(function (t, i) { return '<a href="' + t[0] + '"' + (i === 0 && t[0] === here ? ' aria-current="page"' : (t[0] === here && i > 0 ? ' aria-current="page"' : '')) + '>' + icon(t[1]) + '<span>' + t[2] + '</span></a>'; });
    var menu = '<div class="rolemenu" x-data="{o:false}" @click.outside="o=false"><button type="button" @click="o=!o" :aria-expanded="o">' + r.name + icon('down', ' width="16" height="16"') + '</button>' +
      '<div class="menu" x-show="o" x-cloak x-transition><p class="tiny muted" style="padding:6px 12px">Przełącz widok demo</p>' +
      '<a href="uczen.html"' + (role === 'uczen' ? ' aria-current="true"' : '') + '>Uczeń<span>materiały, lekcje, album</span></a>' +
      '<a href="korepetytor.html"' + (role === 'korepetytor' ? ' aria-current="true"' : '') + '>Korepetytor<span>kalendarz, uczniowie, wypłaty</span></a>' +
      '<a href="rodzic.html"' + (role === 'rodzic' ? ' aria-current="true"' : '') + '>Rodzic<span>postępy, płatności, zgody</span></a>' +
      '<a href="index.html">Strona główna<span>wyjdź z panelu</span></a></div></div>';
    var top = '<header class="apptop"><div class="in">' + LOGO + '<div class="end">' + menu +
      '<a class="iconbtn" href="#powiadomienia" aria-label="Powiadomienia">' + icon('bell') + '<span class="dot"></span></a>' +
      '<span class="av sm" style="background:' + r.color + '" aria-label="' + r.who + '">' + r.av + '</span></div></div></header>';
    var side = '<aside class="side">' + LOGO + '<nav aria-label="Panel">' + r.tabs.map(function (t) { return '<a href="' + t[0] + '"' + (t[0] === here ? ' aria-current="page"' : '') + '>' + icon(t[1]) + t[2] + '</a>'; }).join('') + '</nav>' +
      '<div class="foot stack"><div class="rolemenu" x-data="{o:false}" @click.outside="o=false" style="--x:0">' +
      '<button type="button" @click="o=!o" style="width:100%;justify-content:space-between;padding:10px 12px"><span class="row" style="gap:10px"><span class="av sm" style="background:' + r.color + '">' + r.av + '</span><span style="text-align:left;line-height:1.2">' + r.who + '<br><span class="tiny" style="font-weight:600;color:var(--muted)">widok: ' + r.name.toLowerCase() + '</span></span></span>' + icon('down', ' width="16" height="16"') + '</button>' +
      '<div class="menu" x-show="o" x-cloak x-transition style="bottom:calc(100% + 6px);top:auto;left:0;right:auto">' +
      '<a href="uczen.html">Uczeń<span>materiały, lekcje, album</span></a><a href="korepetytor.html">Korepetytor<span>kalendarz, uczniowie, wypłaty</span></a><a href="rodzic.html">Rodzic<span>postępy, płatności, zgody</span></a><a href="index.html">Strona główna<span>wyjdź z panelu</span></a></div></div></div></aside>';
    var bar = '<nav class="tabbar" aria-label="Panel">' + tabs.join('') + '</nav>';
    return { top: top, side: side, bar: bar };
  }

  window.KT = { icon: icon, KITE: KITE };

  function fill() {
    document.querySelectorAll('[data-kt="header"]').forEach(function (el) { el.outerHTML = header(); });
    document.querySelectorAll('[data-kt="footer"]').forEach(function (el) { el.outerHTML = footer(); });
    var app = document.querySelector('[data-kt-app]');
    if (app) {
      var c = appChrome(app.getAttribute('data-kt-app'));
      app.insertAdjacentHTML('afterbegin', '<div class="demo-app">' + DEMO + '</div>' + c.top + c.side);
      app.insertAdjacentHTML('beforeend', c.bar);
    }
    (function swap(root) {
      root.querySelectorAll('i[data-i]').forEach(function (el) {
        var s = el.getAttribute('data-s');
        el.outerHTML = icon(el.getAttribute('data-i'), s ? ' width="' + s + '" height="' + s + '"' : '');
      });
      root.querySelectorAll('template').forEach(function (t) { swap(t.content); });
    })(document);
  }
  fill();
})();
