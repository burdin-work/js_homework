const saveData = (currencies, date) => {
	if(currencies.length) {
		let data = {
			currencies,
			date
		}

		localStorage.setItem('currencies', JSON.stringify(data));
	}	
}

const loadSavedData = () => {
	let dataStr = localStorage.getItem('currencies');
	if(dataStr) {
		let data = JSON.parse(dataStr);
		$('input[name=date]').val(moment(data.date).format('YYYY-MM-DD'));
		renderCurrencies(data.currencies);
	} else {
		let currentDate = moment().format('YYYYMMDD');
		let dateToInput = moment().format('YYYY-MM-DD');

		$('input[name=date]').val(dateToInput);
		loadData(currentDate);
	}
}


const renderCurrencies = currencies => {
	let htmlStr = '';
	if(currencies.length) {
		for(let currency of currencies) {
			htmlStr += `<tr><td>${ currency.txt }</td><td>${ currency.rate.toFixed(2) }</td></tr>`;
		}
	} else {
		htmlStr += `<tr><td colspan="2">За выбранную дату данных нет</td><tr>`;
	}
	

	$('table tbody').html(htmlStr);
}


const loadData = date => {
	$.ajax({
		url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + date,
		method: 'GET',
		success: currencies => {
			renderCurrencies(currencies);
			saveData(currencies, date);
		},
		error: error => {
			console.log(error, ':(');
		}
	});
};



$('input[name=date]').change(e => {
	let date = $(e.target).val();
	if(date) {
		let dateForAjax = moment(date).format('YYYYMMDD');
		loadData(dateForAjax);
	}
});

loadSavedData();



