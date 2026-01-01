const TST_ID = "treestyletab@piro.sakura.ne.jp";
const activeTabSelector = "ul [class*=Active], ul [class*=active], ul [class*=selected], ul [class*=Selected]";
const {
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    unmap,
    vunmap,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME,
    cmapkey,
    Normal
} = api;

Hints.numericHints = true;

settings.stealFocusOnLoad = true;
settings.enableAutoFocus = false;
settings.omnibarPosition = "middle";
settings.scrollStepSize = 100;
settings.hintAlign = "left";
settings.prevLinkRegex = /((<<|prev(ious)?|Prev(ious)?)|<|‹|«|←|前へ|前のページ+)/i;
settings.nextLinkRegex = /((>>|next|Next)|>|›|»|→|次へ|次のページ+)/i;

unmap('<Ctrl-j>');
unmap('<Ctrl-h>');
unmap('<Ctrl-k>');
unmap('yp');
unmap('h');
unmap('on');
unmap('<Alt-n>');
unmap('<Alt-k>');
unmap('<Alt-j>');
unmap('<Alt-w>');
unmap('t');
unmap('a');
unmap('aj');
// unmap("<Space>");
unmap('<Alt-r>');
unmap('<Alt-w>');
unmap('q');

if (document.location.href === 'https://www.google.com/') {
    document.addEventListener("DOMContentLoaded", function(event) {
         Hints.create("[type=text]", Hints.dispatchMouseClick);
    });
}

mapkey("<Alt-w>", "Move current tab to another window", function () {
  Front.openOmnibar({ type: "Windows" });
});

mapkey("<Alt-q>", "Close current tab", function () {
    RUNTIME("closeTab");
});

mapkey("`", '#10Jump to vim-like mark', function(mark) {
    Normal.jumpVIMark(mark);
});

mapkey('hj', '', () => {
    if (history.state && history.state.page == 1) {
       RUNTIME('closeTab');
    } else {
       history.go(-1);
    }
});

mapkey('hk', '', () => {
    history.go(1);
});

mapkey("qt", "#8Open RecentlyClosed", () => {
  Front.openOmnibar({ type: "RecentlyClosed" });
});

mapkey("ht", "#8Open History", () => {
  Front.openOmnibar({ type: "History" });
});

mapkey('yc', '#7Copy code', () => {
    Hints.create("code, [class*=code], pre", (element) => {
        const partsOfCode = element.innerText.split('$ ');
        Clipboard.write(partsOfCode[partsOfCode.length - 1]);
    })
})

mapkey('t', '#8Open a URL', function() {
    const a = Front.openOmnibar({type: "URLs", extra: "getAllSites"});
});

mapkey("<Alt-h>", "", async () => {
    const { openerTabId } = await browser.runtime.sendMessage(TST_ID, {
      type: 'get-tree',
      tab:  'current'
    });
    
    if (openerTabId) {
        await browser.runtime.sendMessage(TST_ID, {
          type: 'focus',
          tab: openerTabId,
        });
    }
    
    let success = await browser.runtime.sendMessage(TST_ID, {
      type: 'collapse-tree',
      tab:  'current', // required, tabs.Tab.id or alias
      recursively: false // optional, collapse tree recursively or not. false by default.
    });
    
    console.log(success);
})
    
mapkey("<Alt-j>", "", async () => {
    let currentTab = await browser.runtime.sendMessage(TST_ID, {
      type: 'get-tree',
      tab:  'current'
    });
    
    let allTabs = await browser.runtime.sendMessage(TST_ID, {
      type:   'get-tree',
      window: 1
    });
    
    let success = await browser.runtime.sendMessage(TST_ID, {
      type:     'focus',
      tab:      'nextVisibleCyclic', // required, tabs.Tab.id or alias
      silently: true,
    });
})

mapkey("<Alt-J>", "", async () => {
        let currentTab = await browser.runtime.sendMessage(TST_ID, {
      type: 'get-tree',
      tab:  'current'
    });
    
    let allTabs = await browser.runtime.sendMessage(TST_ID, {
      type:   'get-tree',
      window: 1
    });
    
    let success = await browser.runtime.sendMessage(TST_ID, {
      type:     'focus',
      tab:      'nextVisibleCyclic', // required, tabs.Tab.id or alias
      silently: true,
    });
})

mapkey("<Alt-k>", "", async () => {
    let success = await browser.runtime.sendMessage(TST_ID, {
      type:     'focus',
      tab:      'prevVisibleCyclic', // required, tabs.Tab.id or alias
    });
})

mapkey("<Alt-x>", "", async () => {
    let success = await browser.runtime.sendMessage(TST_ID, {
      type: 'outdent',
      tab:  'current' // required, tabs.Tab.id or alias
    });
})

// mapkey("<Space>j", "", () => {
//     Hints.create(activeTabSelector, (element) => {
//         const list = element.closest('ul').querySelectorAll('li');
//         let indexActive = null;
        
//         [...list].forEach((li, i) => {
//             if (li.querySelector(activeTabSelector)) {
//                 indexActive = i;
//             }
//         })
        
//         Hints.create([list[indexActive+1].querySelector("button, a")], Hints.dispatchMouseClick);
//     });
// })

// mapkey("<Space>k", "", () => {
//     Hints.create(activeTabSelector, (element) => {
//         const list = element.closest('ul').querySelectorAll('li');
//         console.log(list)
//         let indexActive = null;
        
//         [...list].forEach((li, i) => {
//             if (li.querySelector(activeTabSelector)) {
//                 indexActive = i;
//             }
//         })
        
//         Hints.create([list[indexActive-1].querySelector("button, a")], Hints.dispatchMouseClick);
//     });
// })

api.mapkey("ye", "Copy src URL of an image", function () {
  Hints.create("img[src]", (element, _evt) => {
    api.Clipboard.write(element.src);
  });
});

mapkey("<Alt-b>", "", async () => {
    let tabs = await browser.runtime.sendMessage(TST_ID, {
      type:   'get-tree',
      window: 1
    });
    console.log(document.querySelector('#tab-12'))
    
    console.log(tabs);
})

const mapkeyGithub = (...args) => mapkey(...args, { domain: /github\.com/i });

mapkeyGithub("yp", "Copy project path", () => {
  const path = new URL(window.location.href).pathname.split("/");
  Clipboard.write(`${path[1]}/${path[2]}`);
});

mapkeyGithub("ygh", "Copy project path", () => {
  const path = new URL(window.location.href).pathname.split("/");
  Clipboard.write(`${path[1]}/${path[2]}`);
});

mapkeyGithub("ygc", "git clone - git clone address", () =>
  Clipboard.write("git clone " + window.location.href + ".git")
);

mapkeyGithub("yv", "Copy for vim", () => {
  const path = new URL(window.location.href).pathname.split("/");
  Clipboard.write(`use({"${path[1]}/${path[2]}"})`);
});

mapkeyGithub(";gC", "Go to the code tab", () => {
  document
    .querySelectorAll(".js-selected-navigation-item.reponav-item")[0]
    .click();
});

mapkeyGithub(";gI", "Go to the Issues tab", () => {
  document
    .querySelectorAll(".js-selected-navigation-item.reponav-item")[1]
    .click();
});

mapkeyGithub(";gP", "Go to the Pull requests tab", () => {
  document
    .querySelectorAll(".js-selected-navigation-item.reponav-item")[2]
    .click();
});

mapkeyGithub(";gB", "Go to the Projects tab", () => {
  document
    .querySelectorAll(".js-selected-navigation-item.reponav-item")[3]
    .click();
});

mapkeyGithub(";gW", "Go to the Wiki tab", () => {
  document
    .querySelectorAll(".js-selected-navigation-item.reponav-item")[4]
    .click();
});

mapkeyGithub(";gO", "Go to the Overview tab", () => {
  document.querySelectorAll(".UnderlineNav-item")[0].click();
});
mapkeyGithub(";gR", "Go to the Repository tab", () => {
  document.querySelectorAll(".UnderlineNav-item")[1].click();
});
mapkeyGithub(";gS", "Go to the Stars tab", () => {
  document.querySelectorAll(".UnderlineNav-item")[2].click();
});

settings.theme = `
  :root {
    --font: "JetBrains Mono", Arial, sans-serif;
    --font-size: 16px;
    --font-weight: bold;
    --fg: #E5E9F0;
    --bg: #3B4252;
    --bg-dark: #2E3440;
    --border: #4C566A;
    --main-fg: #88C0D0;
    --accent-fg: #A3BE8C;
    --info-fg: #5E81AC;
    --select: #4C566A;
    --orange: #D08770;
    --red: #BF616A;
    --yellow: #EBCB8B;
  }
  /* ---------- Generic ---------- */
  .sk_theme {
  background: var(--bg);
  color: var(--fg);
    background-color: var(--bg);
    border-color: var(--border);
    font-family: var(--font);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }
  input {
    font-family: var(--font);
    font-weight: var(--font-weight);
  }
  div.surfingkeys_cursor {
    background-color: #0642CE;
    color: red;
  }
  .sk_theme tbody {
    color: var(--fg);
  }
  .sk_theme input {
    color: var(--fg);
  }
  /* Hints */
  #sk_hints .begin {
    color: var(--accent-fg) !important;
  }
  #sk_tabs .sk_tab {
    background: var(--bg-dark);
    border: 1px solid var(--border);
  }
  #sk_tabs .sk_tab_title {
    color: var(--fg);
  }
  #sk_tabs .sk_tab_url {
    color: var(--main-fg);
  }
  #sk_tabs .sk_tab_hint {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--accent-fg);
  }
  .sk_theme #sk_frame {
    background: var(--bg);
    opacity: 0.2;
    color: var(--accent-fg);
  }
  /* ---------- Omnibar ---------- */
  /* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
  /* .sk_theme#sk_omnibar {
    width: 100%;
    left: 0;
  } */
  .sk_theme .title {
    color: var(--accent-fg);
  }
  .sk_theme .url {
    color: var(--main-fg);
  }
  .sk_theme .annotation {
    color: var(--accent-fg);
  }
  .sk_theme .omnibar_highlight {
    color: var(--accent-fg);
  }
  .sk_theme .omnibar_timestamp {
    color: var(--info-fg);
  }
  .sk_theme .omnibar_visitcount {
    color: var(--accent-fg);
  }
  .sk_theme #sk_omnibarSearchResult ul li .url {
    font-size: calc(var(--font-size) - 2px);
  }
  .sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: var(--border);
    padding: 5px;
  }
  .sk_theme #sk_omnibarSearchResult ul li:nth-child(even) {
    background: var(--border);
    padding: 5px;
  }
  .sk_theme #sk_omnibarSearchResult ul li.focused {
    background: var(--bg-dark);
    border-left: 2px solid var(--orange);
    padding: 5px;
    padding-left: 15px;
  }
  .sk_theme #sk_omnibarSearchArea {
    border-top-color: var(--border);
    border-bottom-color: transparent;
    margin: 0;
    padding: 5px 10px;
  }
  .sk_theme #sk_omnibarSearchArea input,
  .sk_theme #sk_omnibarSearchArea span {
    font-size: 20px;
    padding:10px 0;
  }
  .sk_theme .prompt {
    text-transform: uppercase;
  }
  .sk_theme .separator {
    color: var(--bg);
    /* margin-right: 10px;
    * color: var(--accent-fg);
    */
  }
  .sk_theme .separator:after {
    content: "\u1405";
    display: inline-block;
    margin-left: -10px;
    margin-right: 5px;
    color: var(--accent-fg);
  }
  /* ---------- Popup Notification Banner ---------- */
  #sk_banner {
    font-family: var(--font);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    background: var(--bg);
    border-color: var(--border);
    color: var(--fg);
    opacity: 0.9;
  }
  /* ---------- Popup Keys ---------- */
  #sk_keystroke {
    background-color: var(--bg);
  }
  .sk_theme kbd .candidates {
    color: var(--info-fg);
  }
  .sk_theme span.annotation {
    color: var(--accent-fg);
  }
  /* ---------- Popup Translation Bubble ---------- */
  #sk_bubble {
    background-color: var(--bg) !important;
    color: var(--fg) !important;
    border-color: var(--border) !important;
  }
  #sk_bubble * {
    color: var(--fg) !important;
  }
  #sk_bubble div.sk_arrow div:nth-of-type(1) {
    border-top-color: var(--border) !important;
    border-bottom-color: var(--border) !important;
  }
  #sk_bubble div.sk_arrow div:nth-of-type(2) {
    border-top-color: var(--bg) !important;
    border-bottom-color: var(--bg) !important;
  }
  /* ---------- Search ---------- */
  #sk_status,
  #sk_find {
    font-size: var(--font-size);
    border-color: var(--border);
  }
  .sk_theme kbd {
    background: var(--bg-dark);
    border-color: var(--border);
    box-shadow: none;
    color: var(--fg);
  }
  .sk_theme .feature_name span {
    color: var(--main-fg);
  }
  /* ---------- ACE Editor ---------- */
  #sk_editor {
    background: var(--bg-dark) !important;
    height: 50% !important;
    /* Remove this to restore the default editor size */
  }
  .ace_dialog-bottom {
    border-top: 1px solid var(--bg) !important;
  }
  .ace-chrome .ace_print-margin,
  .ace_gutter,
  .ace_gutter-cell,
  .ace_dialog {
    background: var(--bg) !important;
  }
  .ace-chrome {
    color: var(--fg) !important;
  }
  .ace_gutter,
  .ace_dialog {
    color: var(--fg) !important;
  }
  .ace_cursor {
    color: var(--fg) !important;
  }
  .normal-mode .ace_cursor {
    background-color: var(--fg) !important;
    border: var(--fg) !important;
    opacity: 0.7 !important;
  }
  .ace_marker-layer .ace_selection {
    background: var(--select) !important;
  }
  .ace_editor,
  .ace_dialog span,
  .ace_dialog input {
    font-family: var(--font);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }
  /* Disable RichHints CSS animation */
  .expandRichHints {
      animation: 0s ease-in-out 1 forwards expandRichHints;
  }
  .collapseRichHints {
      animation: 0s ease-in-out 1 forwards collapseRichHints;
  }
  `;
