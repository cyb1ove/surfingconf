Hints.characters = "asdfghlqwertyuopzxcvbnm";
Hints.scrollKeys = "jk";
settings.showModeStatus = true;
settings.scrollStepSize = 200;
settings.focusOnSaved = false;

unmap('<Ctrl-h'>)
unmap('h');
unmap('l');
unmap('f');
unmap('r');
unmap('i');
unmap('I');
unmap('d');
unmap('q');

mapkey('<Space>', '', () => {
    document.querySelector("button[ng-click*='togglePlay']").click();
})
mapkey('<Alt-h>', '', () => {
    document.querySelector("button[ng-click*='backward(5)']").click();
})
mapkey('<Alt-l>', '', () => {
    document.querySelector("button[ng-click*='forward(5)']").click();
})
mapkey('<Alt-H>', '', () => {
    document.querySelector("button[ng-click*='backward(30)']").click();
})
mapkey('<Alt-L>', '', () => {
    document.querySelector("button[ng-click*='forward(30)']").click();
})
mapkey('<Alt-y>', '', () => {
    document.querySelector("button[ng-click='speedPlay(1)']").click();
})
mapkey('<Alt-u>', '', () => {
    document.querySelector("button[ng-click='speedPlay(1.5, $event)']").click();
})
mapkey('<Alt-i>', '', () => {
    document.querySelector("button[ng-click='speedPlay(2, $event)']").click();
})
mapkey('<Alt-o>', '', () => {
    document.querySelector("button[ng-click='speedPlay(4, $event)']").click();
})
mapkey('<Alt-p>', '', () => {
    document.querySelector("button[ng-click='speedPlay(6, $event)']").click();
})

mapkey('a', '', () => {
    document.querySelector("button[ng-click*='addDynamicPeToTask']").click();
})
mapkey('f', '', () => {
    Hints.create("tbody[ng-click*='openDynamicCheck']", Hints.dispatchMouseClick, {mouseEvents: ["click"]});
})
mapkey('m', '', () => {
    Hints.create("#mics-switcher a", Hints.dispatchMouseClick);
})
mapkey('u', "", () => {
    Hints.create("video", (el) => {
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('dblclick', false, false);
        el.dispatchEvent(clickEvent);
    })
})
mapkey('i', "", () => {
    if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        Hints.create("#answer-details-editor textarea", Hints.dispatchMouseClick);
    } else {
        Hints.create("input[ng-click*='setChildAnswer']", 
                  Hints.dispatchMouseClick, {multipleHits: true});
    }
})
mapkey('I', "", () => {
    if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        Hints.create("#given-answer-select-dri .ui-select-toggle", Hints.dispatchMouseClick);
    } else {
        Hints.create("input.peCommentInput", Hints.dispatchMouseClick);
    }
})
mapkey('<Enter>', "", () => {
    if (document.activeElement.className == "btn btn-success") {
        document.activeElement.click();
    } else if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        document.querySelector("button[ng-click*='saveGivenAnswer']").click();
    } else if (document.querySelector(".modal.in")) {
        document.querySelector("button[ng-click*='selectReceipt']").click();
    } else if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("span[ng-click*='choiceReceipt']").click();
    }
})
mapkey("<Esc>", "", () => {
    if (document.activeElement.className == "btn btn-success") {
        document.activeElement.blur();
    } else if (document.querySelector(".modal.in")) {
        document.querySelector("button.close").click();
    }
})
mapkey('h', "", () => {
    if (document.querySelector(".modal.in")) {
        document.querySelector(".modal button[ng-click*='prev']").click();
    }
})
mapkey('l', "", () => {
    if (document.querySelector(".modal.in")) {
        document.querySelector(".modal button[ng-click*='next']").click();
    }
})
mapkey('dd', "", () => {
    document.querySelector("button[ng-click*='deleteChildPe']").click();
})
mapkey('dh', "", () => {
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='editChildPe']").click();
    }
    document.querySelector("button[ng-click*='setMarkIn']").click();
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='saveChildPe']").click();
    }
})
mapkey('dl', "", () => {
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='editChildPe']").click();
    }
    document.querySelector("button[ng-click*='setMarkOut']").click();
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='saveChildPe']").click();
    }
})
mapkey('qe', "", () => {
    Hints.create("button[ng-click*='editGivenAnswer']", Hints.dispatchMouseClick);
})
mapkey('qd', "", () => {
    Hints.create("button[ng-click*='deleteGivenAnswer']", Hints.dispatchMouseClick);
})
