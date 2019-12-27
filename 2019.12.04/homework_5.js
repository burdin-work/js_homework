//>> Task 5
// Отображение таблицы с курсами валют, максимум 2 символа после запятой

$.ajax({

    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',

    success: data => {

        let dataExchange = data.map(function (el) {
            return {
                name: el['txt'],
                rate: el['rate']
            }
        });

        let str = '';


        for (let row of dataExchange) {

            str += '<tr><td>' + row.name + '</td><td>' + row.rate.toFixed(2) + '</td></tr>';
        }

        //document.querySelector("#someTable tbody").innerHTML = str;
        $('#someTable tbody').html(str);
    },

    error: err => {
        console.log(err);
    }

});