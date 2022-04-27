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

settings.scrollStepSize = 140;
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
unmap('t');
unmap('a');
unmap('aj');
// unmap("<Space>");
unmap('<Alt-r>');

map('x', '<Alt-c>');

if (document.location.href === 'https://www.google.com/') {
    document.addEventListener("DOMContentLoaded", function(event) {
         Hints.create("[type=text]", Hints.dispatchMouseClick);
    });
}

document.addEventListener('onkeydown', (event) => {
    console.log(event);
})

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

mapkey('yc', '#7Copy code', () => {
    Hints.create("code, [class*=code], pre", (element) => {
        const partsOfCode = element.innerText.split('$ ');
        Clipboard.write(partsOfCode[partsOfCode.length - 1]);
    })
})

mapkey('yp', '#7Copy paragraph', () => {
    Hitns.create("p", (element) => {
        Clipboard.write(element.innerText);
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

mapkey("<Alt-b>", "", async () => {
    let tabs = await browser.runtime.sendMessage(TST_ID, {
      type:   'get-tree',
      window: 1
    });
    console.log(document.querySelector('#tab-12'))
    
    console.log(tabs);
})
