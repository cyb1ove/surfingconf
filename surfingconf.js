Hints.characters = "asdfghlqwertyuopzxcvbnm";
Hints.scrollKeys = "jk";
settings.showModeStatus = true;
settings.scrollStepSize = 200;
settings.focusOnSaved = false;

unmap('<Ctrl-h>')
unmap('h');
unmap('l');
unmap('f');
unmap('r');
unmap('i');
unmap('I');
unmap('d');
unmap('q');
unmap('s');
unmap('x');
unmap('X');
unmap('p');
unmap('m');
unmap('e');

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
mapkey('<Alt-j>', "", () => {
    document.querySelector("button[ng-click*='playMediaDetail']").click();
})

mapkey('a', '', () => {
    document.querySelector("button[ng-click*='addDynamicPeToTask']").click();
})
mapkey('f', '', () => {
    Hints.create("tbody[ng-click*='openDynamicCheck']", Hints.dispatchMouseClick, {mouseEvents: ["click"]});
})
mapkey('r', '', () => {
    Hints.create("#mics-switcher a", Hints.dispatchMouseClick);
})
mapkey('u', "", () => {
    Hints.create("video", (el) => {
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('dblclick', false, false);
        el.dispatchEvent(clickEvent);
    })
})
mapkey('e', "", () => {
    Hints.create("[ng-click*='editGivenAnswer(givenAnswer)']", Hints.dispatchMouseClick);
})
mapkey('s', "", () => {
    document.querySelector("[ng-click*='toggleSlimPanel($event)']").click();
})
mapkey('i', "", () => {
    if (document.querySelector(".select-dri:not(.ng-hide)")) {
        document.querySelector(".select-dri:not(.ng-hide) input[type='search']").focus();
    } else if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        Hints.create("#given-answer-select-dri .ui-select-toggle", Hints.dispatchMouseClick);
    } else {
        Hints.create("[ng-click*='setChildAnswer']", Hints.dispatchMouseClick, {multipleHits: true})
    }
})
mapkey('I', "", () => {
    if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        Hints.create("#answer-details-editor textarea", Hints.dispatchMouseClick);
    } else {
        Hints.create("input.peCommentInput", Hints.dispatchMouseClick);
    }
})
mapkey('di', "", () => {     
    Hints.create("input[ng-click*='setChildAnswer']", (el) => {         
        let parent = el.parentNode.parentNode.parentNode;         
        el.click();         
        if (parent.querySelector("span[ng-click*='editDynamicDri']")) {             
            parent.querySelector("span[ng-click*='editDynamicDri']").click();         
            
        } else {             
            parent.querySelector("button[ng-click*='getDynamicDriList']").click();         
            
        }         
        parent.querySelector(".ui-select-match-text").click();
    })
})
mapkey('pi', "", () => {
    Front.showEditor(document.querySelector("#peSelect"))
})
mapkey('mi', "", () => {
    document.querySelector("#require-attention-dpe").click();
})
mapkey('mI', "", () => {
    document.querySelector("#managerAttention").click();
})
mapkey('x', "", () => {
    if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        document.querySelector("button[ng-click*='removeSelectedDri']").click();
    } else {
        Hints.create("[ng-click*='removeDynamicDri'], [ng-click*='deleteGivenAnswer(givenAnswer)']", Hints.dispatchMouseClick, {multipleHits: true});
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
    if (document.querySelectorAll("div[class*='video-container']:not([style*='display: none'])").length == 1) {
        Hints.create("video", (el) => {
            let clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent('dblclick', false, false);
            el.dispatchEvent(clickEvent);
        })
    } else if (document.activeElement.className == "btn btn-success") {
        document.activeElement.blur();
    } else if (document.querySelector(".modal.in")) {
        document.querySelector("button.close").click();
    }
})
mapkey('h', "", () => {
    if (document.querySelector(".modal.in")) {
        document.querySelector(".modal button[ng-click*='prev']").click();
    } else {
        Hints.create("#secondary-content", Hints.dispatchMouseClick);
    }
})
mapkey('l', "", () => {
    if (document.querySelector(".modal.in")) {
        document.querySelector(".modal button[ng-click*='next']").click();
    } else {
        Hints.create("#primary-content", Hints.dispatchMouseClick);
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

mapkey('qkg', "Garbage question, yes", () => {
    document.querySelector("[id = '5e43f15cf1dc204b07120e2c']").click();
})
mapkey('qjg', "Garbage question, no", () => {
    document.querySelector("[id = '5e43f15cf1dc204b07120e2d']").click();
})
mapkey('qki', "Ignore question, yes", () => {
    document.querySelector("[id = '5e44196df1dc204b071226ac']").click();
})
mapkey('qji', "Ignore question, no", () => {
    document.querySelector("[id = '5e44196df1dc204b071226ad']").click();
})
mapkey('qkq', "Queue question, yes", () => {
    document.querySelector("[id = '5e49abd0aa03e75010937b35']").click();
})
mapkey('qjq', "Queue question, no", () => {
    document.querySelector("[id = '5e49abd1aa03e75010937b36']").click();
})
mapkey('qkm', "Music question, yes", () => {
    document.querySelector("[id = '5e49af18aa03e75010937e21']").click();
})
mapkey('qjm', "Music question, no", () => {
    document.querySelector("[id = '5e49af18aa03e75010937e22']").click();
})
mapkey('qku', "Uniform question, yes", () => {
    document.querySelector("[id = '5e49b080aa03e75010937fa8']").click();
})
mapkey('qju', "Uniform question, no", () => {
    document.querySelector("[id = '5e49b080aa03e75010937fa9']").click();
})
mapkey('qka', "Absent question, yes", () => {
    document.querySelector("[id = '5e49ab22aa03e75010937aaa']").click();
})
mapkey('qja', "Absent question, no", () => {
    document.querySelector("[id = '5e49ab22aa03e75010937aab']").click();
})
mapkey('qkc', "Count money question, yes", () => {
    document.querySelector("[id = '5e49af85aa03e75010937e91']").click();
})
mapkey('qjc', "Count money question, no", () => {
    document.querySelector("[id = '5e49af85aa03e75010937e92']").click();
})
mapkey('qke', "Employee question, yes", () => {
    document.querySelector("[id = '5e49b00faa03e75010937f5a']").click();
})
mapkey('qje', "Employee question, no", () => {
    document.querySelector("[id = '5e49b00faa03e75010937f5c']").click();
})
mapkey('qkt', "Transfer money question, yes", () => {
    document.querySelector("[id = '5e49b053aa03e75010937f82']").click();
})
mapkey('qjt', "Transfer money question, no", () => {
    document.querySelector("[id = '5e49b054aa03e75010937f83']").click();
})
mapkey('qkl', "Leave question, yes", () => {
    document.querySelector("[id = '5e49b116aa03e750109380c5']").click();
})
mapkey('qjl', "Leave question, no", () => {
    document.querySelector("[id = '5e49b116aa03e750109380c6']").click();
})
mapkey('qks', "Seat question, yes", () => {
    document.querySelector("[id = '5e64e18385f4600d8924f3d8']").click();
})
mapkey('qjs', "Seat question, no", () => {
    document.querySelector("[id = '5e64e18385f4600d8924f3d9']").click();
})
mapkey('qkn', "Medical mask question, yes", () => {
    document.querySelector("[id = '5f7722ec09b08f13317a058f']").click();
})
mapkey('qjn', "Medical mask question, no", () => {
    document.querySelector("[id = '5f7722ec09b08f13317a0590']").click();
})
