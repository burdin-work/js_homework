//>> Task 8
// Таблица с актуальным курсом валют. Возможность получения данных по конкретной дате.
// Автокомплит от JQuery UI
// Сохранение данных в localStorage и при загрузке страницы, если есть последние сохраненные данные - использование этих данных

function storage() {

    let storageData = {
        currencyNames : [],
        objDataTable : [],
        valueDate : null,
        defaultDate : null
    };

    return {
        setData: (newData) => {
            storageData = newData
        },
        getData: () => {
            return storageData;
        }
    }
}



// установка значения input#date-indicate по-умолчанию
const setDefaultDate = () => {

    let newStorageData = globalStorage.getData();

    // помещение значений localStorage в объект с данными в хранилище
    const getLocalData = () => {

        let savedData = localStorage.getItem('savedCourses');
        if (savedData) {
            let receivedData = JSON.parse(savedData);

            newStorageData.defaultDate = moment(receivedData.lastDate, 'YYYYMMDD');

            newStorageData.objDataTable = receivedData.data;
        }
    };

    getLocalData();

    if (newStorageData.defaultDate === null) newStorageData.defaultDate = moment().format('YYYYMMDD');

    $("#date-indicate").val(newStorageData.defaultDate.format('YYYY-M-D'));

    storage().setData(newStorageData);
};



// загрузка таблицы в html
const renderExchange = dataExchange => {

    let newStorageData = globalStorage.getData();

    let htmlStr = '';

    for (let i = 0; i < dataExchange.length; i++) {

        htmlStr += '<tr><td>' + (i + 1) +
            '</td><td>' + dataExchange[i].name + '</td>' +
            '</td><td>' + dataExchange[i].abbr + '</td>' +
            '</td><td>' + dataExchange[i].rate + '</td>';
    }

    newStorageData.currencyNames = newStorageData.objDataTable.map(el => el.name);

    $('#exchangeTable tbody').html(htmlStr);

    storage().setData(newStorageData);
};



const autocomplete = () => {

    let newStorageData = globalStorage.getData();

    // JQuery UI
    $( function() {
        $( "#tags" ).autocomplete({
            source: newStorageData.currencyNames,
            minLength: 3,

            select: function() {
                let search = $("#tags").val();
                let result = newStorageData.objDataTable.filter(el => {
                    let name = el.name.toLowerCase();
                    let lowerSearch = search.toLowerCase();

                    return name.indexOf(lowerSearch) >= 0;
                });

                renderExchange(result);
            }
        });
    });

    storage().setData(newStorageData);
};



const saveDataToLocal = () => {

    let newStorageData = globalStorage.getData();

    let dataToSave = {
        lastDate: newStorageData.valueDate,
        data: newStorageData.objDataTable
    };
    localStorage.setItem('savedCourses', JSON.stringify(dataToSave));

    storage().setData(newStorageData);
};



const addTable = () => {

    let newStorageData = globalStorage.getData();

    newStorageData.valueDate = moment($('#date-indicate').val(), 'YYYY-M-D').format('YYYYMMDD');

    if (newStorageData.valueDate  === newStorageData.defaultDate) {

        saveDataToLocal();

        renderExchange(newStorageData.objDataTable);

        autocomplete();

        $('.frame-table').show();


    } else {

        $.ajax({
            url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + newStorageData.valueDate,

            success: data => {
                //загрузка данных таблицы + загрузка в html
                newStorageData.objDataTable = data.map(el => {
                    return {
                        name: el.txt,
                        abbr: el.cc,
                        rate: el.rate,
                    };
                });

                saveDataToLocal();

                renderExchange(newStorageData.objDataTable);

                autocomplete();

                $('.frame-table').show();
            },

            error: err => {
                console.log(err);
            }
        });
    }

    storage().setData(newStorageData);
};



// ACTIONS

let globalStorage = storage();


setDefaultDate();


$('#load-table').on('click', () => {

    $('#load-table').hide();
    $('#refresh-table').show();
    $('.ui-widget').show();

    addTable();
});


$('#refresh-table').on('click', () => {

    $("#tags").val('');

    addTable();
});

