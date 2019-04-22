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

map('=pau', ':setProxy au.proxy.competera.net:3128', 0, "");
map('=pde', ':setProxy de.proxy.competera.net:3128', 0, "");
map('=pdk', ':setProxy 217.61.239.52:3128', 0, "");
map('=pes', ':setProxy es.proxy.competera.net:3128', 0, "");
map('=pfi', ':setProxy fi.proxy.competera.net:3128', 0, "");
map('=pfr', ':setProxy fr.proxy.competera.net:3128', 0, "");
map('=pie', ':setProxy ie.proxy.competera.net:3128', 0, "");
map('=pin', ':setProxy in.proxy.competera.net:3128', 0, "");
map('=pit', ':setProxy it.proxy.competera.net:3128', 0, "");
map('=pnl', ':setProxy nl.proxy.competera.net:3128', 0, "");
map('=pno', ':setProxy no.proxy.competera.net:3128', 0, "");
map('=ppt', ':setProxy pt.proxy.competera.net:3128', 0, "");
map('=pru', ':setProxy ru.proxy.competera.net:3128', 0, "");
map('=pse', ':setProxy se.proxy.competera.net:3128', 0, "");
map('=puk', ':setProxy uk.proxy.competera.net:3128', 0, "");
map('=pus', ':setProxy us.proxy.competera.net:3128', 0, "");
map('=pmc', ':setProxyMode clear', 0, "");
map('=pma', ':setProxyMode always', 0, "");

mapkey('spau', '#16Set australian proxy', () => {
    Normal.feedkeys('=pma');
    Normal.feedkeys('=pau');
});
