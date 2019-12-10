//>> Task 7
// шахматное поле - таблица, отрендеренная js
// при клике на поле оно меняет цвет с черного на белый, и наоборот


$('#hide-table').hide();
$('.frame-table').hide();


$('#load-table').on('click', (e) => {

    $('#load-table').hide();
    $('#hide-table').show();


    let strHtml = '';
    let cellWhite = '<td>&nbsp</td>';
    let cellBlack = '<td class="bg-black">&nbsp</td>';
    let amountFields = 8;

    // Редрендинг таблицы
    for (let i = 0; i < amountFields; i++) {

        strHtml += '<tr>';

        for (let j = 0; j < amountFields; j++) {

            strHtml += (i % 2) && (j % 2) || !(i % 2) && !(j % 2) ? cellWhite : cellBlack;
        }

        strHtml += '</tr>';
    }


    $('table#chessBoard').html(strHtml);


    // Обработчик для ячеек таблицы
    $("#chessBoard td").on('click', (e) => {

        if ($(e.currentTarget).hasClass("bg-black")) {

            $(e.currentTarget).removeClass("bg-black");
        } else {
            $(e.currentTarget).toggleClass("bg-black");
        }

    });


    $('.frame-table').show();
});


$('#hide-table').on('click', (e) => {

    $('#hide-table').hide();
    $('.frame-table').hide();
    $('#load-table').show();
});