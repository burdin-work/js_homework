//alert(moment().format('DD.MM.YYYY'));

$('#hide-table').hide();
$('.frame-table').hide();
$('.ui-widget').hide();

let objDataTable = [];

let renderExchange = dataExchange => {

    let htmlStr = '';

    for (let i = 0; i < dataExchange.length; i++) {

        htmlStr += '<tr><td>' + (i + 1) +
            '</td><td>' + dataExchange[i].name + '</td>' +
            '</td><td>' + dataExchange[i].abbr + '</td>' +
            '</td><td>' + dataExchange[i].rate + '</td>';
    }

    $('#exchangeTable tbody').html(htmlStr);
};



$('#load-table').on('click', () => {

    $('#load-table').hide();
    $('#hide-table').show();
    $('.ui-widget').show();
    $('#date-indicate').toggleClass('m-left');
    $('.inside-container').toggleClass('m-left');
    $('.ui-widget').toggleClass('m-left');


    let date = moment($('#date-indicate').val(), 'YYYY-M-D').format('YYYYMMDD');

    if(date === 'Invalid date') {
        date = moment().format('YYYYMMDD');
        $("#date-indicate").val(moment().format('YYYY-MM-DD'));
    }


    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + date,

        success: data => {

            //загрузка данных таблицы + загрузка в html
            objDataTable = data.map(el => {
                return {
                    name: el.txt,
                    abbr: el.cc,
                    rate: el.rate,
                };
            });
            renderExchange(objDataTable);


            // JQuery UI
            let currencyNames = objDataTable.map(el => el.name);
            $( function() {
                $( "#tags" ).autocomplete({
                    source: currencyNames
                });
            } );



        },

        error: err => {
            console.log(err);
        }
    });

    $('.frame-table').show();
});



// Обработчик строки автодополнения
$('#tags').on('change', (e) => {

    let search = $(e.currentTarget).val();
    let result = objDataTable.filter(el => {
        let name = el.name.toLowerCase();
        let lowerSearch = search.toLowerCase();

        return name.indexOf(lowerSearch) >= 0;
    });
    console.log(result);
    renderExchange(result);
});



$('#hide-table').on('click', () => {

    $('#hide-table').hide();
    $('.frame-table').hide();
    $('.ui-widget').hide();
    $('#load-table').show();
    $('#date-indicate').toggleClass('m-left');
    $('.inside-container').toggleClass('m-left');
    $('.ui-widget').toggleClass('m-left');
});


