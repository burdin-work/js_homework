//>> Task 6
// таблица по странам
// +: доделать поисковик, чтоб искало по населению и площади
// ++: и по валютам
// +++: добавить select-выпадающее поле, в котором подгружается список стран. выбираем конкретную страну - она и показывается

$('.search').hide();
$('.table').hide();

let restcountries = [];



$.ajax({
    url: 'https://restcountries.eu/rest/v2/all',

    success: data => {

        //загрузка данных таблицы + загрузка в html
        restcountries = data.map(el => {
            return {
                name: el.name,
                area: el.area,
                currencies: el.currencies,
                population: el.population,
                flag: el.flag,
                region: el.region
            };
        });
        renderCountries(restcountries);


        //загрузка данных для выпадающего списка + загрузка в html
        let strHtml = '<option value="">Выберите страну</option>';
        let names = restcountries.map(el => {
            return el.name;
        });
        for (let i = 0; i < names.length; i++) {
            strHtml += `<option value="${i + 1}">${names[i]}</option>`;
        }

        $('#selectCountries').html(strHtml);

    },

    error: err => {
        console.log(err);
    }
});



let getCurrenciesNames = currencies => {
    let curList = [];

    for (let currency of currencies) {

        if (currency.name == null) continue;

        curList.push(currency.name);
    }

    return curList.join(', ');
};



let renderCountries = dataExchange => {

    let countriesHtml = '';

    for (let i = 0; i < dataExchange.length; i++) {
        let currenciesNames = getCurrenciesNames(dataExchange[i].currencies);

        countriesHtml += '<tr><td>' + (i + 1) +
            '</td><td>' + dataExchange[i].name + '</td>' +
            '</td><td>' + dataExchange[i].region + '</td>' +
            '</td><td>' + dataExchange[i].population + '</td>' +
            '</td><td>' + dataExchange[i].area + '</td>' +
            '</td><td><img src="' + dataExchange[i].flag + '"></td>' +
            '<td>' + currenciesNames + '</td></tr>';
    }

    $('#countries-table tbody').html(countriesHtml);
};



// Обработчик выпадающего списка со странами
$('#selectCountries').on('change', (e) => {

    let searchName = (document.getElementById("selectCountries").options[document.getElementById("selectCountries").options.selectedIndex].text);

    console.log(searchName);

    let result = restcountries.filter(el => {
        let name = el.name;

        return name.indexOf(searchName) >= 0;
    });

    renderCountries(result);
    $('.table').show();
});



// Обработчик строки поиска
$('.search').on('keyup', (e) => {
    // console.log($(this).val(), $(e.currentTarget).val(), $(e.target).val(), $('.search').val());
    let search = $(e.currentTarget).val();
    let result = restcountries.filter(el => {
        let name = el.name.toLowerCase();
        let region = el.region.toLowerCase();
        let population = String(el.population);
        let area = String(el.area);
        let currenciesNames = getCurrenciesNames(el.currencies);
        let lowerSearch = search.toLowerCase();

        return name.indexOf(lowerSearch) >= 0
            || region.indexOf(lowerSearch) >= 0
            || population.indexOf(lowerSearch) >= 0
            || area.indexOf(lowerSearch) >= 0
            || currenciesNames.indexOf(lowerSearch) >= 0;
    });
    renderCountries(result);
});

// при нажатии на поиск всплывающий список пропадает
$('.search').on('click', (e) => {
    $('#selectCountries').hide();
});



$('#countries-table thead').hide();
$('#hide-table').hide();



$('#load-table').on('click', (e) => {
    $('.search').show();
    $('#countries-table thead').show();
    $('#countries-table').show();

    $('#load-table').hide();
    $('#hide-table').show();
    $('#selectCountries').show();
});



$('#hide-table').on('click', (e) => {
    $('.search').hide();
    $('#countries-table').hide();

    $('#hide-table').hide();
    $('#load-table').show();
});











