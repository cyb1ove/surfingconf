/* Begin configuration */

settings.scrollStepSize = 100;
settings.scrollFriction = 10;
settings.showProxyInStatusBar = true;
settings.showModeStatus = true;
settings.focusOnSaved = false;
settings.omnibarPosition = "bottom";
settings.omnibarSuggestion = "true";

/* Theme setting */

settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

/* Unmap keys */

unmap('sm');
unmap('spa');
unmap('spb');
unmap('spc');
unmap('spd');
unmap('sps');
unmap('spi');

/* Proxy settings */

map('spau', ':setProxy au.proxy.competera.net:3128', 0, "");
map('spde', ':setProxy de.proxy.competera.net:3128', 0, "");
map('spdk', ':setProxy 217.61.239.52:3128', 0, "");
map('spes', ':setProxy es.proxy.competera.net:3128', 0, "");
map('spfi', ':setProxy fi.proxy.competera.net:3128', 0, "");
map('spfr', ':setProxy fr.proxy.competera.net:3128', 0, "");
map('spie', ':setProxy ie.proxy.competera.net:3128', 0, "");
map('spin', ':setProxy in.proxy.competera.net:3128', 0, "");
map('spit', ':setProxy it.proxy.competera.net:3128', 0, "");
map('spnl', ':setProxy nl.proxy.competera.net:3128', 0, "");
map('spno', ':setProxy no.proxy.competera.net:3128', 0, "");
map('sppt', ':setProxy pt.proxy.competera.net:3128', 0, "");
map('spru', ':setProxy ru.proxy.competera.net:3128', 0, "");
map('spse', ':setProxy se.proxy.competera.net:3128', 0, "");
map('spuk', ':setProxy uk.proxy.competera.net:3128', 0, "");
map('spus', ':setProxy us.proxy.competera.net:3128', 0, "");
map('spua', ':setProxy 192.168.0.1:80', 0, "");
