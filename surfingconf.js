settings.enableAutoFocus = true;
settings.stealFocusOnLoad = false;
settings.showModeStatus = true;
settings.omnibarSuggestion = true;
settings.scrollStepSize = 100;
Hints.characters = "qwertyuiopasdfghjklzxcvbnm"

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
unmap("ya");

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
mapkey('yk', '#8Copy contract information from CRM', function() {
                             
    var table_left = document.getElementById('w1').getElementsByTagName('tbody')[0];
    var table_right = document.getElementById('w2').getElementsByTagName('tbody')[0];
    var number = document.getElementById('section-title');
    
    Clipboard.write(table_right.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerHTML + ";" 
                  + table_right.getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML + " " 
                  + table_right.getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerHTML + ";" 
                  + number.textContent.replace(/\((.*?)\)|\s/g, "") + ";"
                  + table_left.getElementsByTagName('tr')[5].getElementsByTagName('td')[0].innerHTML + ";"
                  + table_right.getElementsByTagName('tr')[10].getElementsByTagName('td')[0].innerHTML.split(",")[0])
})
mapkey('yj', '#8Copy contract information from CRM', function() {
                             
    var table_left = document.getElementById('w1').getElementsByTagName('tbody')[0];
    var table_right = document.getElementById('w2').getElementsByTagName('tbody')[0];
    var number = document.getElementById('section-title');
    
    Clipboard.write(table_right.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].innerHTML + ";" 
                  + table_right.getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML + " " 
                  + table_right.getElementsByTagName('tr')[2].getElementsByTagName('td')[0].innerHTML + ";" 
                  + number.textContent.replace(/\((.*?)\)|\s/g, "") + ";"
                  + table_left.getElementsByTagName('tr')[5].getElementsByTagName('td')[0].innerHTML + ";"
                  + table_right.getElementsByTagName('tr')[11].getElementsByTagName('td')[0].innerHTML.split(",")[0])
})

mapkey('yP', '#8Copy marketer calls information', function() {
    Hints.create('div[id="call-history-grid"] > table > tbody > tr',  function(call) {
        let marketer = call.querySelectorAll('td')[3].textContent;
        let comment = call.querySelectorAll('td')[14].textContent;
        Clipboard.write(marketer + "-" + comment);
    })
})
mapkey('yS', '#8Copy statistics', function() {
    const names = ['Гаврилова Мария', 'Филиппова_1L Наталья', 'Филиппова_2L Наталья', 
                   'Трохименко Людмила_1L', 'Трохименко Людмила_2L', 'Лысенко_1L Карина', 
                   'Лысенко_2L Карина', 'Бардык Наталия_1L', 'Бардык Наталия_2L', 
                   'Ковезина', 'Шустрова', 'Федорченко Николай', 
                   'Третяк_1L Ирина', 'Третяк_2L Ирина', 'Руденко', 'Харьковская'];
    var statistic = [];
    names.forEach((name) => {
        statistic.push({marketer: name, Zgoda: 0, Pozniej: 0, Pomy: 0, Odmowa: 0, exists: false})
    })
    
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
                         (marketer_stat['Pomy'] != 0 ? marketer_stat['Pomy'] : 0) + "\t" +
                         (marketer_stat['Pozniej'] != 0 ? marketer_stat['Pozniej'] : 0) + "\t" +
                         (marketer_stat['Odmowa'] != 0 ? marketer_stat['Odmowa'] : 0) + "\t" + total + "\n";
            }
        })
        return table;
    }

    Clipboard.write(statistic_table())
});

mapkey('yaS', '#8Copy statistics', function() {
    const names = ['Гаврилова Мария', 'Филиппова_1L Наталья', 'Филиппова_2L Наталья', 
                   'Трохименко Людмила_1L', 'Трохименко Людмила_2L', 'Лысенко_1L Карина', 
                   'Лысенко_2L Карина', 'Бардык Наталия_1L', 'Бардык Наталия_2L', 
                   'Ковезина', 'Шустрова', 'Федорченко Николай', 
                   'Третяк_1L Ирина', 'Третяк_2L Ирина', 'Руденко', 'Харьковская'];
    var statistic = [];

    Clipboard.read((response) => {
        clipboard = response.data
        names.forEach((name) => {
            var exist = false;
            clipboard.split('\n').forEach((marketer_hist, i, arr) => {
                var marketer_hist = marketer_hist.split('\t')
                if (marketer_hist[0].includes(name)) {
                    statistic.push({marketer: name, Zgoda: parseInt(marketer_hist[1]), 
                                    Pozniej: parseInt(marketer_hist[3]), 
                                    Pomy: parseInt(marketer_hist[2]), 
                                    Odmowa: parseInt(marketer_hist[4]), 
                                    exists: true})
                    exist = true;
                } else if (i == arr.length - 1 && exist == false) {
                    statistic.push({marketer: name, Zgoda: 0, Pozniej: 0, Pomy: 0, Odmowa: 0, exists: false})
                }
            })
        })
    })
    
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
                         (marketer_stat['Pomy'] != 0 ? marketer_stat['Pomy'] : 0) + "\t" +
                         (marketer_stat['Pozniej'] != 0 ? marketer_stat['Pozniej'] : 0) + "\t" +
                         (marketer_stat['Odmowa'] != 0 ? marketer_stat['Odmowa'] : 0) + "\t" + total + "\n";
            }
        })
        return table;
    }

    Clipboard.write(statistic_table())
});

mapkey('Fc', '#8Open all contracts', function() {
    /*document.getElementsByClassName('table table-hover table-striped table-condensed table-bordered table-small kv-grid-table kv-table-wrap')[0].querySelectorAll('tbody > tr').forEach((contract) => {
        contracts_url = document.location.host + contract.querySelector('td[data-col-seq="0"] a').getAttribute('href');
        tabOpenLink(contracts_url);
    })*/
    document.getElementsByClassName('v-datatable v-table theme--light')[0].querySelectorAll('tbody > tr').forEach((contract) => {
        contracts_url = contract.querySelector('span a').getAttribute('href');
        tabOpenLink(contracts_url);
    })
})

mapkey('yT', '#8Total contracts', function() {
    let calls = []
    document.getElementsByClassName('items table table-striped table-condensed')[0].querySelectorAll('tbody > tr').forEach((call) => {
        calls.push(call.querySelectorAll('td')[7].textContent)
    })
    Clipboard.write([...new Set(calls)].length)
})
mapkey('yaT', '#8Add total contracts', function() {
    var calls = []
    var total;
    document.getElementsByClassName('items table table-striped table-condensed')[0].querySelectorAll('tbody > tr').forEach((call) => {
        calls.push(call.querySelectorAll('td')[7].textContent)
    })
    Clipboard.read((response) => {
        total = parseInt(response.data) + [...new Set(calls)].length
    })
    Clipboard.write(total)
})
map('J', 'd');
map('K', 'e');

