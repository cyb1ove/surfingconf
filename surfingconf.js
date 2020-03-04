settings.enableAutoFocus = true;
settings.stealFocusOnLoad = false;
settings.showModeStatus = true;
settings.omnibarSuggestion = true;
settings.scrollStepSize = 100;

unmap("t");
unmap("F");
unmap("B");
unmap("gu");
unmap("gU");
unmap("S");
unmap("D");
unmap("<Ctrl-6>");
unmap("gt");
unmap("zi");
unmap("zo");
unmap("<CapsLock>");
unmap("p");
unmap("<Alt-p>");
unmap("yf");
unmap("ys");

mapkey("t", '#3Choose a tab', function() {
    Front.chooseTab();
});
mapkey('T', '#4Go to last used tab', function() {
    RUNTIME("goToLastTab");
});
mapkey('oo', '#8Open a URL', function() {
    Front.openOmnibar({type: "URLs", extra: "getAllSites"});
});
mapkey('<Alt-h>', '#4Go up one path in the URL', function() {
    var pathname = location.pathname;
    if (pathname.length > 1) {
        pathname = pathname.endsWith('/') ? pathname.substr(0, pathname.length - 1) : pathname;
        var last = pathname.lastIndexOf('/'), repeats = RUNTIME.repeats;
        RUNTIME.repeats = 1;
        while (repeats-- > 1) {
            var p = pathname.lastIndexOf('/', last - 1);
            if (p === -1) {
                break;
            } else {
                last = p;
            }
        }
        pathname = pathname.substr(0, last);
    }
    window.location.href = location.origin + pathname;
});
mapkey('<Alt-H>', '#4Go to root of current URL hierarchy', function() {
    window.location.href = window.location.origin;
});
mapkey('zj', '#3zoom in', function() {
    RUNTIME('setZoom', {
        zoomFactor: 0.1
    });
});
mapkey('zk', '#3zoom out', function() {
    RUNTIME('setZoom', {
        zoomFactor: -0.1
    });
});
mapkey('yC', '#8Copy contract information from CRM', function() {
    const allow_call_time = [{region: ['Адыг', 'Даг', 'Ингуш', 'Кабар', 'Калмык',
                                       'Крым', 'Карач', "Карел", "Ком", "Мар",
                                       "Морд", "Осе", "Татар", "Чечен", "Чуваш",
                                       "Краснод", "Ставр", "Архан", "Астрах", "Белго", 
                                       "Брян", "Влад", "Волг", "Волог", "Ворон", 
                                       "Иван", "Калуж", "Киров", "Костр", "Курс", "Ленин",
                                       "Липец", "Моск", "Мурм", "Нижег", "Новго",
                                       "Орл", "Пенз", "Пск", "Рост", "Ряз", "Сарат",
                                       "Смол", "Тамб", "Твер", "Туль", "Ульян",
                                       "Ярос", "Ненец"], call_time_begin: 7, call_time_end: 20},
                             {region: ['Самар', "Удму"], call_time_begin: 6, call_time_end: 19},
                             {region: ["Башк", "Перм", "Кург", "Орен", "Сверд",
                                       "Тюмен", "Челяб", "Хант", "Ямал"], call_time_begin: 5, call_time_end: 18},
                             {region: ["Алт", "Новос", "Омс", "Томс"], call_time_begin: 4, call_time_end: 17},
                             {region: ["Тыва", "Хак", "Красноя", "Кемер"], call_time_begin: 3, call_time_end: 16},
                             {region: ["Бурят", "Забай", "Ирк"], call_time_begin: 2, call_time_end: 15},
                             {region: ["Саха", "Амур"], call_time_begin: 1, call_time_end: 14},
                             {region: ['Прим', "Хабар", "Магад", "Сахал", "Еврей"], call_time_begin: 0, call_time_end: 13},
                             {region: ["Камч", "Чукот"], сall_time_begin: 22, call_time_end: 11}];
    const region_design = ['респ', 'обл', 'кра'];
                             
    var table_left = document.getElementById('w1').getElementsByTagName('tbody')[0];
    var table_right = document.getElementById('w2').getElementsByTagName('tbody')[0];
    var number = document.getElementById('section-title');
    
    Clipboard.write(table_right.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerHTML + ";" 
                  + table_right.getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML + " " 
                  + table_right.getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerHTML + ";" 
                  + number.textContent.replace(/\((.*?)\)|\s/g, "") + ";"
                  + table_left.getElementsByTagName('tr')[5].getElementsByTagName('td')[0].innerHTML + ";"
                  + table_right.getElementsByTagName('tr')[10].getElementsByTagName('td')[0].innerHTML)
})
mapkey('yP', '#8Copy marketer calls information', function() {
    Hints.create('div[id="call-history-grid"] > table > tbody > tr',  function(call) {
        let marketer = call.querySelectorAll('td')[3].textContent;
        let comment = call.querySelectorAll('td')[14].textContent;
        Clipboard.write(marketer + "-" + comment);
    })
})
mapkey('yS', '#8Copy statistics', function() {
    const names = ['Гаврилова Мария', 'Филиппова Наталья', 'Трохименко Людмила', 'Лысенко Карина', 
                   'Наталия Бардык', 'Бардык Наталия', 'Ковезина', 'Шустрова', 'Федорченко Николай', 
                   'Третяк_1L Ирина', 'Третяк_2L Ирина', 'Руденко', 'Харьковская'];
    var statistic = [];
    names.forEach((name) => {
        statistic.push({marketer: name, Zgoda: 0, Pozniej: 0, Pomy: 0, Odmowa: 0, exists: false})
    })
    
    $.ajax({ url: "http://marketell.pl/marketell3/marketell/projects/customers/id/" +
                                            document.location.href.split('/').slice(-1)[0], success: function(data) { alert(data); } });
    /*var count_phone_numbers = document_url("http://marketell.pl/marketell3/marketell/projects/customers/id/" +
                                            document.location.href.split('/').slice(-1)[0])*/
    document.getElementsByClassName("items table table-striped table-condensed")[0].querySelectorAll('tbody > tr').forEach((call) => {
        var marketer = call.getElementsByTagName('td')[3].textContent;
        var result = call.getElementsByTagName('td')[5].textContent;
        var comment = call.getElementsByTagName('td')[14].textContent;
        statistic.forEach((marketer_stat, i, arr) => {
            if (marketer.includes(marketer_stat.marketer)) {
                Object.keys(marketer_stat).forEach((result_stat) => {
                    if (result.includes(result_stat)) {
                        marketer_stat[result_stat]++;
                        marketer_stat['exists'] = true;
                    }
                })
            }
        })
    }); 

    var statistic_table = function() {
        let table = "";
        statistic.forEach((marketer_stat) => {
            let total = marketer_stat['Zgoda'] + marketer_stat['Pomy'] + marketer_stat['Pozniej'] + marketer_stat['Odmowa']
            if (marketer_stat['exists'] == true) {
                table += (marketer_stat['marketer'] != 0 ? marketer_stat['marketer'] : 0) + "\t" +
                         (marketer_stat['Zgoda'] != 0 ? marketer_stat['Zgoda'] : 0) + "\t" +
                         (marketer_stat['Pomy'] != 0 ? marketer_stat['Pomyleka'] : 0) + "\t" +
                         (marketer_stat['Pozniej'] != 0 ? marketer_stat['Pozniej'] : 0) + "\t" +
                         (marketer_stat['Odmowa'] != 0 ? marketer_stat['Odmowa'] : 0) + "\t" + total + "\n";
            }
        })
        return table;
    }
    
    /*function makeHttpObject() {
        try {return new XMLHttpRequest();}
        catch (error) {}
        try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
        try {return new ActiveXObject("Microsoft.XMLHTTP");}
        catch (error) {}

        throw new Error("Could not create HTTP request object.");
    }
var request = makeHttpObject();
request.open("GET", "http://marketell.pl/marketell3/marketell/projects/view/id/1573", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
    alert(document);
};*/

    Clipboard.write(statistic_table())
});

mapkey('Fc', '#8Open all contracts', function() {
    document.getElementsByClassName('table table-hover table-striped table-condensed table-bordered table-small kv-grid-table kv-table-wrap')[0].querySelectorAll('tbody > tr').forEach((contract) => {
        contracts_url = document.location.host + contract.querySelector('td[data-col-seq="0"] a').getAttribute('href');
        tabOpenLink(contracts_url);
    })
})

map('J', 'd');
map('K', 'e');

