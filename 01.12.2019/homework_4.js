//>> Task 4
// Отображение таблицы, в которой выводятся поля поля: name, region, popupation, area
// со звездочкой: картинка флага по ресурсу из поля flag, первую колонку с порядковым номером, колонку валют (поле currencies), валюты через запятую

function getEllements(currencies) {

    let  currencList = [];

    for (let i of currencies) {

        if (i.name == null) continue;

        currencList.push(i.name);

    }

    return currencList.join(', ');
}


$.ajax({

    url: 'https://restcountries.eu/rest/v2/all',

    success: data => {

        let str = '';
        let startNum = 1;


        for (let el of data) {

            str += '<tr><td>' + ( startNum++ ) + '. </td><td>' + el.name + '</td><td>' + el.region + '</td><td>' + el.population + '</td><td>' + el.area + '</td><td><img src="' + el.flag + '"></td><td>' + getEllements(el.currencies) + '</td></tr>'
        }

        document.getElementById("someTable").innerHTML = str;

    },

    error: err => {
        console.log(err);
    }

});













