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

mapkey('spa', '#16Set Australian proxy', () => {
    Normal.feedkeys(': setProxyMode always');
    //Normal.feedkeys(':setProxy au.proxy.competera.net:3128');
    Front.showBanner('Australian proxy');
});
