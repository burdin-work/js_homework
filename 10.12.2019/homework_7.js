//>> Task 7
// шахматное поле - таблица, отрендеренная js
// при клике на поле оно меняет цвет с черного на белый, и наоборот


$('#hide-table').hide();
$('.frame-table').hide();



// Таблица появляется только после нажатия на кнопку
$('#load-table').on('click', (e) => {

    $('#load-table').hide();
    $('#hide-table').show();


    let strHtml = '';
    let cellWhite = '<td>&nbsp</td>';
    let cellBlack = '<td class="bg-black">&nbsp</td>';
    let amountPairs = 4;// chessBoard: white&black or black&white

// Редрендинг таблицы
    for (let i = 0; i < amountPairs * 2; i++) {

        if (i % 2) {
            strHtml += '<tr>' + (cellWhite + cellBlack).repeat(amountPairs) + '</tr>';
        }
        else {
            strHtml += '<tr>' + (cellBlack + cellWhite).repeat(amountPairs) + '</tr>';
        }
    }
    $('table#chessBoard').html(strHtml);


// Обработчик для ячеек таблицы
    $("#chessBoard td").on('click', (e) => {

        if ($(e.currentTarget).hasClass("bg-black")) {

            $(e.currentTarget).removeClass("bg-black");
        }
        else {
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