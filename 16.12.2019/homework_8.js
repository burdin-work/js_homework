//>> Task 8
// Таблица с актуальным курсом валют. Возможность получения данных по конкретной дате.
// Автокомплит от JQuery UI
// Сохранение данных в localStorage и при загрузке страницы, если есть последние сохраненные данные - использование этих данных

let objDataTable = [];
let defaultDate = null;
let valueDate = null;

let currencyNames = [];



// помещение значений localStorage в глобальные переменные
let getLocalData = () => {

    let savedData = localStorage.getItem('savedCourses');
    if (savedData) {
        let receivedData = JSON.parse(savedData);

        defaultDate = moment(receivedData.lastDate, 'YYYYMMDD');

        objDataTable = receivedData.data;
    }
};



// установка значения input#date-indicate по-умолчанию
let setDefaultDate = () => {

    getLocalData();

    if (defaultDate === null) defaultDate = moment().format('YYYYMMDD');

    $("#date-indicate").val(defaultDate.format('YYYY-M-D'));
};



setDefaultDate();



// загрузка таблицы в html
let renderExchange = dataExchange => {

    let htmlStr = '';

    for (let i = 0; i < dataExchange.length; i++) {

        htmlStr += '<tr><td>' + (i + 1) +
            '</td><td>' + dataExchange[i].name + '</td>' +
            '</td><td>' + dataExchange[i].abbr + '</td>' +
            '</td><td>' + dataExchange[i].rate + '</td>';
    }

    currencyNames = objDataTable.map(el => el.name);

    $('#exchangeTable tbody').html(htmlStr);
};



let autocomplete = () => {

    // JQuery UI
    $( function() {
        $( "#tags" ).autocomplete({
            source: currencyNames,
            minLength: 3,

            select: function() {
                let search = $("#tags").val();
                let result = objDataTable.filter(el => {
                    let name = el.name.toLowerCase();
                    let lowerSearch = search.toLowerCase();

                    return name.indexOf(lowerSearch) >= 0;
                });

                renderExchange(result);
            }
        });
    });
};



let saveDataToLocal = () => {
    let dataToSave = {
        lastDate: valueDate,
        data: objDataTable
    };
    localStorage.setItem('savedCourses', JSON.stringify(dataToSave));
};



let addTableAjax = () => {

    valueDate = moment($('#date-indicate').val(), 'YYYY-M-D').format('YYYYMMDD');

    if (valueDate  === defaultDate) {

        saveDataToLocal();

        renderExchange(objDataTable);

        autocomplete();

        $('.frame-table').show();


    } else {

        $.ajax({
            url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + valueDate,

            success: data => {
                //загрузка данных таблицы + загрузка в html
                objDataTable = data.map(el => {
                    return {
                        name: el.txt,
                        abbr: el.cc,
                        rate: el.rate,
                    };
                });


                saveDataToLocal();

                renderExchange(objDataTable);

                autocomplete();

                $('.frame-table').show();
            },

            error: err => {
                console.log(err);
            }
        });
    }
};



$('#load-table').on('click', () => {

    $('#load-table').hide();
    $('#refresh-table').show();
    $('.ui-widget').show();

    addTableAjax();
});



$('#refresh-table').on('click', () => {

    $("#tags").val('');

    addTableAjax();
});



