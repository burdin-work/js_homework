//>> Task 4
// Отображение таблицы, в которой выводятся поля поля: name, region, popupation, area
// со звездочкой: картинка флага по ресурсу из поля flag, первую колонку с порядковым номером, колонку валют (поле currencies), валюты через запятую

function getEllements(currencies) {

    let  currencList = [];

    for (let currency of currencies) {

        if (currency.name == null) continue;

        currencList.push(currency.name);

    }

    return currencList.join(', ');
}


$.ajax({

    url: 'https://restcountries.eu/rest/v2/all',

    success: data => {

        let str = '';

        for (let i in data) {

            str += '<tr><td>' + i + '. </td><td>' + data[i].name + '</td><td>' + data[i].region + '</td><td>' + data[i].population + '</td><td>' + data[i].area + '</td><td><img src="' + data[i].flag + '"></td><td>' + getEllements(data[i].currencies) + '</td></tr>'
        }

        document.getElementById("someTable").innerHTML = str;

    },

    error: err => {
        console.log(err);
    }

});













