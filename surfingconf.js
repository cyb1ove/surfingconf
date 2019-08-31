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
unmap('yQ');
unmap('ya');
unmap('yc');
unmap('yd');
unmap('yf');
unmap('yh');
unmap('yi');
unmap('yj');
unmap('yl');
unmap('ymv');
unmap('ymc');
unmap('yma');
unmap('yp');
unmap('yq');
unmap('yj');
unmap('yv');
unmap('yy');
unmap('af');
unmap('gf');
unmap('cf');
unmap('f');

/* Remap keys */

map('J', 'j');
unmap('j');
map('K', 'k');
unmap('k');

/* Proxy settings */
const proxy_keys = [
    ["ru", "Rusia", "62.173.145.48"],
    ["uk", "British", "195.22.121.13:443"],
    ["us", "USA", "50.196.205.141:54034"],
    ["ua", "Ukraine"]
];

function set_proxy(code, country, ip) {
    mapkey('sp' + code, '#16Set ' + country + ' proxy', () => {
        if (country === "Ukraine") {
            Front.executeCommand("setProxyMode clear");
        } else {
            Front.executeCommand("setProxyMode always");
            setTimeout(() => Front.executeCommand("setProxy " + ip), 10);
        }
    });
}

proxy_keys.forEach((el) => {
    set_proxy.apply(this, el)
});

/* Tab opening modes */

const tab_modes = [
    ["j", {tabbed: true}],
    ["k", {tabbed: true, active: false}],
    ["l", {multipleHits: true}]
];

/* Parse links modes */

const parse_modes = [
    ["f", ""]
];

/* Follow links */

/* Copy mappings */

const clip_modes = [
    ["y", "copy"],
    ["<Alt-y>", "add"]
];

function clipboard(input, mode = "copy") {
    if (mode === "add") {
        Clipboard.read((response) => Clipboard.write(response.data + "\n" + input));
    } else if (mode === "copy") {
        Clipboard.write(input);
    }
}

function setClipboardMapkeys(key, mode) {
    var mode_in_string = mode.charAt(0).toUpperCase() + mode.slice(1);
    mapkey(`${key}a`, `#7${mode_in_string} a link URL to the clipboard`, function() {
        Hints.create('*[href]', function(element) {
            clipboard(element.href, mode);
        });
    });
    mapkey(`${key}ma`, `#7${mode_in_string} multiple link URLs to the clipboard`, function() {
        var linksToYank = [];
        Hints.create('*[href]', function(element) {
            linksToYank.push(element.href);
            clipboard(linksToYank.join('\n'), mode);
        }, {multipleHits: true});
    });
    mapkey(`${key}c`, `#7${mode_in_string} a column of a table`, function() {
        Hints.create(getTableColumnHeads(), function(element) {
            var column = Array.from(element.closest("table").querySelectorAll("tr")).map(function(tr) {
                return tr.children.length > element.cellIndex ? tr.children[element.cellIndex].innerText : "";
            });
            clipboard(column.join("\n"), mode);
        });
    });
    mapkey(`${key}mc`, `#7${mode_in_string} multiple columns of a table`, function() {
        var rows = null;
        Hints.create(getTableColumnHeads(), function(element) {
            var column = Array.from(element.closest("table").querySelectorAll("tr")).map(function(tr) {
                return tr.children.length > element.cellIndex ? tr.children[element.cellIndex].innerText : "";
            });
            if (!rows) {
                rows = column;
            } else {
                column.forEach(function(c, i) {
                    rows[i] += "\t" + c;
                });
            }
            clipboard(rows.join("\n"), mode);
        }, {multipleHits: true});
    });
    mapkey(`${key}q`, `#7${mode_in_string} pre text`, function() {
        Hints.create("pre", function(element) {
            clipboard(element.innerText, mode);
        });
    });
    mapkey(`${key}i`, `#7${mode_in_string} text of an input`, function() {
        Hints.create("input, textarea, select", function(element) {
            clipboard(element.value, mode);
        });
    });
    mapkey(`${key}j`, `#7${mode_in_string} current settings`, function() {
        runtime.command({
            action: 'getSettings',
            key: "RAW"
        }, function(response) {
            clipboard(JSON.stringify(response.settings, null, 4), mode);
        });
    });
    mapkey(`${key}d`, `#7${mode_in_string} current downloading URL`, function() {
        runtime.command({
            action: 'getDownloads',
            query: {state: "in_progress"}
        }, function(response) {
            var items = response.downloads.map(function(o) {
                return o.url;
            });
            clipboard(items.join(','), mode);
        });
    });
    mapkey(`${key}y`, `#7${mode_in_string} current page's URL`, function() {
        clipboard(window.location.href, mode);
    });
    mapkey(`${key}h`, `#7${mode_in_string} current page's host`, function() {
        var url = new URL(window.location.href);
        clipboard(url.host, mode);
    });
    mapkey(`${key}l`, `#7${mode_in_string} current page's title`, function() {
        clipboard(document.title, mode);
    });
    mapkey(`${key}Q`, `#7${mode_in_string} all query history of OmniQuery.`, function() {
        runtime.command({
            action: 'getSettings',
            key: 'OmniQueryHistory'
        }, function(response) {
            clipboard(response.settings.OmniQueryHistory.join("\n"), mode);
        });
    });
    mapkey(`${key}f`, `#7${mode_in_string} form data in JSON on current page`, function() {
        var fd = {};
        document.querySelectorAll('form').forEach(function(form) {
            fd[generateFormKey(form)] = getFormData(form, "json");
        });
        clipboard(JSON.stringify(fd, null, 4), mode);
    });
    mapkey(`${key}p`, `#7${mode_in_string} form data for POST on current page`, function() {
        var aa = [];
        document.querySelectorAll('form').forEach(function(form) {
            var fd = {};
            fd[(form.method || "get") + "::" + form.action] = getFormData(form);
            aa.push(fd);
        });
        clipboard(JSON.stringify(aa, null, 4), mode);
    });
}

clip_modes.forEach((el) => {
    setClipboardMapkeys.apply(this, el)
});

