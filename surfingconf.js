Hints.characters = "asdfghlqwertyuopzxcvbnm";
Hints.scrollKeys = "jk";
settings.showModeStatus = true;
settings.scrollStepSize = 250;
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
unmap('n');
unmap('yt');

let comment = {
                '1. Продавец приветствует покупателей?': 'Сотрудник не поприветствовал клиента.',
                '1. Продавец моментально реагирует на гостя?': 'Сотрудник не реагирует на клиента в течение ',
                '2. После того, как клиент забрал заказ, продавец попрощался/пожелал приятного аппетита в любой вежливой форме?': 'Сотрудник не попрощался с клиентом с вежливой форме.',
                '3. Когда клиент подходит к окошку, продавец доступен для заказа?': 'Сотрудник не был доступен для заказа в течение ',
                '4. Если клиент не активен, продавец помогает в выборе продукции?': 'Cотрудник не проявляет инициативу в общении с гостем, гость самостоятельно изучает меню в течение ',
                '3. Если клиент не начинает заказ, сотрудник проявляет инициативу?': 'Cотрудник не проявляет инициативу в общении с гостем, гость самостоятельно изучает меню в течение ',
                '3. Если клиент первым не делает заказ, сотрудник проявляет инициативу в общении?': 'Cотрудник не проявляет инициативу в общении с гостем, гость самостоятельно изучает меню в течение ',
                '4. Если гость не проявляет инициативу, то сотрудник спрашивает: "с чем Вам замешать?"?': 'Cотрудник не проявляет инициативу в общении с гостем, гость самостоятельно изучает меню в течение ',
                '5. Сотрудник подсказал следующее блюдо?': 'Сотрудник не подсказал следующее блюдо.',
                '6. Сотрудник предлагает дополнительный наполнитель в картофель?': 'Сотрудник не предложил дополнительный наполнитель в картофель.',
                '7. Сотрудник предлагает напиток к основному заказу?': 'Сотрудник не предложил напиток к основному заказу.',
                '8. Сотрудник предлагает десерт?': 'Сотрудник не предложил десерт к горячему напитку.',
                '6. Продавец предлагает участие в акции, попробовать новинку?': 'Сотрудник не предложил клиенту новинки и участие в акции.',
                '7. Продавец предложил клиенту добавить в заказ дополнительные позиции?': 'Сотрудник не предложил клиенту дополнительные позиции к основному заказу.',
                '10. Продавец выдал чек покупателю?': 'Сотрудник не выдал клиенту товарный чек вместе с продукцией.',
                '1. Сотрудник поприветствовал гостей при первой возможности?': 'Сотрудник не поприветствовал клиента.',
                '2. Когда гости подходят к юниту хотя бы один из сотрудников доступен для заказа?': 'Сотрудник отсутствует на рабочем месте в течение ',
                '3. Сотрудник начинает разговор с одного из стандартных вопросов и далее проявляет инициативу в разговоре?': 'Сотрудник не проявляет инициативу, клиент самостоятельно изучает меню в течение ',
                '6. На этапе сборке сэндвича сотрудник предлагает дополнительную начинку?': 'Сотрудник не предложил дополнительную начинку в сэндвич.',
                '9. Сотрудник уточнил у гостя, поджарить ли ему хлеб?': 'Сотрудник не уточнил поджаривать ли хлеб клиенту.',
                '11. Сотрудник предложил поперчить и посолить сэндвич?': 'Сотрудник не предложил поперчить и посолить сэндвич.',
                '12. Перед тем как закрывать сэндвич сотрудник в явной форме получил согласие клиента?': 'Сотрудник не получил согласие клиента на закрытие сэндвича.',
                '13. На кассе сотрудник предложил напиток?': 'Сотрудник не предложил напиток к основному заказу.',
                '14. На кассе сотрудник предложил десерт?': 'Сотрудник не предложил десерт к основному заказу.',
                '15. Десерт рекомендуется в развёрнутой форме? ': 'Сотрудник не рекомендует десерт в развёрнутой форме.',
                '16. Сотрудник проговорил состав заказа перед тем как пробить?': 'Сотрудник не проговорил состав заказа перед пробитием чека.',
                '18. Сотрудник отдал чек гостю?': 'Сотрудник не отдал чек клиенту.',
                '19. После того, как клиент забрал заказ, сотрудник попрощался или пожелал приятного аппетита в любой вежливой форме?': 'Сотрудник не попрощался с клиентом.',
                '20. Перед оплатой, сотрудник уточнил у гостя, есть ли у него приложение?': 'Сотрудник не уточнил пользуется ли клиент приложением.',
                '26. Перед оплатой, сотрудник уточнил у гостя, есть ли у него приложение?': 'Сотрудник не уточнил пользуется ли клиент приложением.',
                '21. Если у гостя нет приложения, сотрудник выдал ему информационную листовку по приложению?': 'Сотрудник не выдал клиенту листовку.',
                '27. Если у гостя нет приложения, сотрудник выдал ему информационную листовку по приложению?': 'Сотрудник не выдал клиенту листовку.',
                '22. Если у гостя есть приложение, сотрудник считал QR-код гостя? ': 'Сотрудник не считал QR-код клиента.',
                '28. Если у гостя есть приложение, сотрудник считал QR-код гостя? ': 'Сотрудник не считал QR-код клиента.',
                '23. Если у гостя по приложению есть подарок, сотрудник выдал подарок и проинформировал гостя?': 'Сотрудник не выдали клиенту подарок и не проинформировал его об этом.',
                '29. Если у гостя по приложению есть подарок, сотрудник выдал подарок и проинформировал гостя?': 'Сотрудник не выдали клиенту подарок и не проинформировал его об этом.',
                '24. Сотрудник проговаривает гостю цены за дополнительные начинки?': "Сотрудник не озвучил цены за дополнительные начинки.",
                '30. Сотрудник проговаривает гостю цены за дополнительные начинки?': "Сотрудник не озвучил цены за дополнительные начинки.",
                '20. Сотрудник предложил клиенту сироп к кофе?': "Сотрудник не предложил сироп к кофе клиенту.",
                '21. На первой зоне юнита сотрудник предложил клиенту комбо?': 'Сотрудник не предложил клиенту комбо на первой зоне юнита.',
                '22. На первой зоне сотрудник предложил клиенту новый сэндвич?': 'Сотрудник не предложил клиенту новый сэндвич на первой зоне юнита.',
                '23. В зоне овощей сотрудник предложил дополнительные начинки?': 'Сотрудник не предложил дополнительные начинки в зоне овощей.',
                '24. С 8 до 10 сотрудник сообщил клиенту о том, что напиток идёт в подарок к сендвичу?': 'Сотрудник не сообщил клиенту о том, что напиток идёт в подарок к сэндвичу.',
                '25. Если позиция находится в стоп-листе, продавец предложил альтернативный вариант клиенту?': 'Сотрудник не предложил альтернативный вариант.',
                '2. Продавец не разговаривает по телефону во время обслуживания?': 'Сотрудник разговаривает по телефону во время обслуживания.'
            };

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
mapkey('c', "", () => {
    Hints.create(".video-container", (el) => {
        el.style.display = "none";
    })
})
mapkey('i', "", () => {
    if (document.querySelector(".select-dri:not(.ng-hide)")) {
        Hints.create(".select-dri:not(.ng-hide) input[type='search']", Hints.dispatchMouseClick);
    } else if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        Hints.create("#given-answer-select-dri .ui-select-toggle", Hints.dispatchMouseClick);
    } else {
        Hints.create("[ng-click*='setChildAnswer']", (checkbox) => {
            let qs_row = checkbox.parentNode.parentNode.parentNode;
            let checkbox_div = checkbox.parentNode;
            let question = qs_row.querySelector("span.ng-binding").textContent.replace(/\n/g, " ");

            checkbox.click();
            
            let mutation = new MutationObserver((mutations, observer) => {
                console.log(mutations);
                if(qs_row.querySelector("[ng-click*='getDynamicDriList']")) {
                    if (checkbox_div.querySelector("label").textContent == "Нет") {
                        let angular_trigger = new Event("input");
                        let comment_box = qs_row.querySelector("textarea");
                        
                        comment_box.value = (comment[question] || null);
                        comment_box.dispatchEvent(angular_trigger)
                        
                        observer.disconnect();
                    }
                }
            });
        
            mutation.observe(qs_row, {childList: true, subtree: true, attributes: true})
            
        }, {multipleHits: true})
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
    Hints.create("input[ng-click*='setChildAnswer']:not([checked])", (checkbox) => {         
        let qs_row = checkbox.parentNode.parentNode.parentNode;
        let question = qs_row.querySelector("span.ng-binding").textContent.replace(/\n/g, " ");
        let checkbox_div = checkbox.parentNode;
        
        checkbox.click();
                
        if (qs_row.querySelector("span[ng-click*='editDynamicDri']")) {             
            qs_row.querySelector("span[ng-click*='editDynamicDri']").click();         
        } else {             
            qs_row.querySelector("button[ng-click*='getDynamicDriList']").click();         
        }         
        qs_row.querySelector(".ui-select-match-text").click();
        
        let mutation = new MutationObserver((mutations, observer) => {
            if(qs_row.querySelector(".dri-name")) {
                    if (checkbox_div.querySelector("label").textContent == "Нет") {
                        let angular_trigger = new Event("input");
                        let comment_box = qs_row.querySelector("textarea");
                        
                        comment_box.value = (comment[question] || null);
                        comment_box.dispatchEvent(angular_trigger);
                        
                        observer.disconnect();
                    }
            }
        });
        
        mutation.observe(qs_row, {childList: true, subtree: true, attributes: true})

    })
})
mapkey('ni', "", () => {
    Hints.create("span[ng-click*='editDynamicDri']", (rs_selector) => {
        let qs_row = rs_selector.parentNode.parentNode.parentNode.parentNode;
        rs_selector.click();
        qs_row.querySelector(".ui-select-match-text").click();
    })
})
mapkey('ci', "", () => {
    Hints.create("input[ng-click*='setChildAnswer'][checked]", Hints.dispatchMouseClick);
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
    if (!document.querySelector("#answer-details-editor")) {
        Hints.create("[ng-click*='deleteGivenAnswer(givenAnswer)'], [ng-click*='removeDynamicDri']", Hints.dispatchMouseClick, {multipleHits: true});
    } else {
        document.querySelector("button[ng-click*='removeSelectedDri']").click();
    }
})
mapkey('X', "", () => {
    document.querySelector("[ng-click*='removeReceipt']").click();
})
mapkey('<Enter>', "", () => {
    if (document.activeElement.className == "btn btn-success") {
        document.activeElement.click();
    } else if (document.querySelector(".dynamic-checks-div.ng-hide")) {
        document.querySelector("button[ng-click*='saveGivenAnswer']").click();
        
        let answers = document.querySelector(".scrollable");
        let question = document.querySelector("#answer-details-editor tbody td").textContent;
        let mutation = new MutationObserver((mutation, observer) => {
            mutation.forEach((rec, i, obj) => {
                if(rec['type'] == "childList" && rec['addedNodes'][0] != undefined) {
                    let answer_tbody = rec['addedNodes'][0];
                    let answer_td = answer_tbody.querySelector("[ng-class*='givenAnswer.colorClass']");
                    if(answer_td.textContent == question && answer_td.classList.contains("red") 
                       && answer_tbody.querySelector('input').classList.contains('ng-empty')) 
                        answer_tbody.querySelector('input').click();
                        observer.disconnect();
                }
            })
        })
        
        mutation.observe(answers, {childList: true, subtree: true, attributes: true})
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
    let unformat_time = document.querySelector("#scrub + b").textContent;
    let parts = unformat_time.split(':');
    Clipboard.write(`${parts[1]} мин ${parts[2]} сек`)
})
mapkey('dl', "", () => {
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='editChildPe']").click();
    }
    document.querySelector("button[ng-click*='setMarkOut']").click();
    if (document.querySelector(".dynamic-checks-div:not(.ng-hide)")) {
        document.querySelector("button[ng-click*='saveChildPe']").click();
    }
    let unformat_time = document.querySelector("#scrub + b").textContent;
    let parts = unformat_time.split(':');
    Clipboard.write(`${parts[1]} мин ${parts[2]} сек`)
})

mapkey('qkg', "Garbage question, yes", () => {
    if (document.querySelector("[id = '5e43f15cf1dc204b07120e2c']")) {
        document.querySelector("[id = '5e43f15cf1dc204b07120e2c']").click();
    } else {
        document.querySelector("[id = '5fdb0ddf943a1e516fdbff33']").click();
    }
})
mapkey('qjg', "Garbage question, no", () => {
    if (document.querySelector("[id = '5e43f15cf1dc204b07120e2d']")) {
        document.querySelector("[id = '5e43f15cf1dc204b07120e2d']").click();
    } else {
        document.querySelector("[id = '5fdb0de0943a1e516fdbff34']").click();
    }
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
    if (document.querySelector("[id = '5e49b080aa03e75010937fa8']")) { 
        document.querySelector("[id = '5e49b080aa03e75010937fa8']").click();
    } else if (document.querySelector("[id = '5fdb0daf943a1e516fdbfe64']")) {
        document.querySelector("[id = '5fdb0daf943a1e516fdbfe64']").click();
    } else if (document.querySelector("[id = '5f930f96b98a2e12b97b3ee5']")) {
        document.querySelector("[id = '5f930f96b98a2e12b97b3ee5']").click();
    } else {
        document.querySelector("[id = '5f757dd038b4380eb33a5d17']").click();
    }
})
mapkey('qju', "Uniform question, no", () => {
    if (document.querySelector("[id = '5e49b080aa03e75010937fa9']")) { 
        document.querySelector("[id = '5e49b080aa03e75010937fa9']").click();
    } else if (document.querySelector("[id = '5fdb0daf943a1e516fdbfe65']")) {
        document.querySelector("[id = '5fdb0daf943a1e516fdbfe65']").click();
    } else if (document.querySelector("[id = '5f930f96b98a2e12b97b3ee6']")) {
        document.querySelector("[id = '5f930f96b98a2e12b97b3ee6']").click();
    } else {
        document.querySelector("[id = '5f757dd038b4380eb33a5d18']").click();
    }
})

mapkey('qka', "Absent question, yes", () => {
    document.querySelector("[id = '5e49ab22aa03e75010937aaa']").click();
})
mapkey('qja', "Absent question, no", () => {
    document.querySelector("[id = '5e49ab22aa03e75010937aab']").click();
})

mapkey('qkc', "Count money question, yes", () => {
    if (document.querySelector("[id = '5e49af85aa03e75010937e91']")) {
        document.querySelector("[id = '5e49af85aa03e75010937e91']").click();
    } else {
        document.querySelector("[id = '5e3b024485ee323d264d1905']").click();
    }
})
mapkey('qjc', "Count money question, no", () => {
    if (document.querySelector("[id = '5e49af85aa03e75010937e92']")) {
        document.querySelector("[id = '5e49af85aa03e75010937e92']").click();
    } else {
        document.querySelector("[id = '5e3b024485ee323d264d1906']").click();
    }
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
    if (document.querySelector("[id = '5e49b116aa03e750109380c5']")) {
        document.querySelector("[id = '5e49b116aa03e750109380c5']").click();
    } else {
        document.querySelector("[id = '5fdb0c99943a1e516fdbfa29']").click();
    }
})
mapkey('qjl', "Leave question, no", () => {
    if (document.querySelector("[id = '5e49b116aa03e750109380c6']")) {
        document.querySelector("[id = '5e49b116aa03e750109380c6']").click();
    } else {
        document.querySelector("[id = '5fdb0c99943a1e516fdbfa2a']").click();
    }
})

mapkey('qks', "Seat question, yes", () => {
    document.querySelector("[id = '5e64e18385f4600d8924f3d8']").click();
})
mapkey('qjs', "Seat question, no", () => {
    document.querySelector("[id = '5e64e18385f4600d8924f3d9']").click();
})

mapkey('qkn', "Medical mask question, yes", () => {
    if (document.querySelector("[id = '5f7722ec09b08f13317a058f']")) {
        document.querySelector("[id = '5f7722ec09b08f13317a058f']").click();
    } else if (document.querySelector("[id = '5fdb0d79943a1e516fdbfd6d']")) {
        document.querySelector("[id = '5fdb0d79943a1e516fdbfd6d']").click();
    } else {
        document.querySelector("[id = '5f362000428e8a273e74f078']").click();
    }
})
mapkey('qjn', "Medical mask question, no", () => {
    if (document.querySelector("[id = '5f7722ec09b08f13317a0590']")) {
        document.querySelector("[id = '5f7722ec09b08f13317a0590']").click();
    } else if (document.querySelector("[id = '5fdb0d79943a1e516fdbfd6e']")) {
        document.querySelector("[id = '5fdb0d79943a1e516fdbfd6e']").click();
    } else {
        document.querySelector("[id = '5f362000428e8a273e74f079']").click();
    }
})

mapkey('qkh', "", () => {
    if (document.querySelector("[id = '5fdb0c2f943a1e516fdbf8b4']")) {
        document.querySelector("[id = '5fdb0c2f943a1e516fdbf8b4']").click();
    } else {
        document.querySelector("[id = '5d625e4d21c0725aab85e4b4']").click();
    }
})
mapkey('qjh', "", () => {
    if (document.querySelector("[id = '5fdb0c2f943a1e516fdbf8b5']")) {
        document.querySelector("[id = '5fdb0c2f943a1e516fdbf8b5']").click();
    } else {
        document.querySelector("[id = '5d625e4d21c0725aab85e4b5']").click();
    }
})

mapkey('qkw', "", () => {
    if (document.querySelector("[id = '5fdb0cf4943a1e516fdbfbaf']")) {
        document.querySelector("[id = '5fdb0cf4943a1e516fdbfbaf']").click();
    } else {
        document.querySelector("[id = '5f7c1eed68398d1c9355ec89']").click();
    }
})
mapkey('qjw', "", () => {
    if (document.querySelector("[id = '5fdb0cf4943a1e516fdbfbb0']")) {
        document.querySelector("[id = '5fdb0cf4943a1e516fdbfbb0']").click();
    } else {
        document.querySelector("[id = '5f7c1eed68398d1c9355ec8a']").click();
    }
})

mapkey('qkp', "", () => {
    document.querySelector("[id = '5fdb0e94943a1e516fdc0210']").click();
})
mapkey('qjp', "", () => {
    document.querySelector("[id = '5fdb0e94943a1e516fdc0211']").click();
})

mapkey('qkb', "", () => {
    document.querySelector("[id = '5fdb0f07943a1e516fdc032b']").click();
})
mapkey('qjb', "", () => {
    document.querySelector("[id = '5fdb0f07943a1e516fdc032c']").click();
})

mapkey('qko', "", () => {
    if (document.querySelector("[id = '5e3b0046a19a403bbb2292dc']")) {
        document.querySelector("[id = '5e3b0046a19a403bbb2292dc']").click();
    } else {
        document.querySelector("[id = '5e3b027d85ee323d264d1949']").click();
    }
})
mapkey('qjo', "", () => {
    if (document.querySelector("[id = '5e3b027d85ee323d264d194a']")) {
        document.querySelector("[id = '5e3b027d85ee323d264d194a']").click();
    } else {
        document.querySelector("[id = '5e3b027d85ee323d264d194a']").click();
    }
})

mapkey('qkr', "", () => {
    document.querySelector("[id = '5e3b0083a19a403bbb2293a5']").click();
})
mapkey('qjr', "", () => {
    document.querySelector("[id = '5e3b0083a19a403bbb2293a7']").click();
})

mapkey('yt', "Copy current time", () => {
    let unformat_time = document.querySelector("#scrub + b").textContent;
    let parts = unformat_time.split(':');
    Clipboard.write(`${parts[1]} мин ${parts[2]} сек`)
})

