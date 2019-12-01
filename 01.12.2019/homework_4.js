//>> Task 4
// Отображение таблицы, в которой выводятся поля поля: name, region, popupation, area
// со звездочкой: картинка флага по ресурсу из поля flag, первую колонку с порядковым номером, колонку валют (поле currencies), валюты через запятую

$.ajax({

    url: 'https://restcountries.eu/rest/v2/all',

    success: data => {

        let str = '';
        let startNum = 1;

        for (let el of data) {


            function getCurrencies() {

                let  currencList = [];

                for (let i in el.currencies) {

                    if (el.currencies[i].name == null) continue;

                    currencList.push(el.currencies[i].name);
                }

                return currencList.join(', ');
            }


            str += '<tr><td>' + ( startNum++ ) + '. </td><td>' + el.name + '</td><td>' + el.region + '</td><td>' + el.population + '</td><td>' + el.area + '</td><td><img src="' + el.flag + '"></td><td>' + getCurrencies() + '</td></tr>'
        }

        document.getElementById("someTable").innerHTML = str;

    },

    error: err => {
        console.log(err);
    }

});













