const dateFormatter = require('./modules/date-formatter.js');
const vacancyUrlFormatter = require('./modules/vacancy-url-formatter');
const companyVacanciesCount =require('./modules/company-vacancy-count.js');
const fetchApi = require('./modules/fetch.js');
const renderItem = require('./modules/render.js');
const changeColor = require('./modules/color-changer.js');
const loader = require('./modules/loader-main.js');
const colorDisable = require('./modules/color-disabler.js');

var table = document.getElementById('vacancy-list');
const url = "https://api.zp.ru/v1/vacancies/";

colorDisable();
loader();
table.style = 'display:none';
fetchApi(url)
	.then((data) => {
		var listItem = data.vacancies.map(function(item) {
			var src;
			item.company.logo === null || item.company.logo.url === null ? src = "static/icon/company-no-logo.svg" : src = item.company.logo.url;
			var vacancyUrl = vacancyUrlFormatter(item);
			var date = dateFormatter(item.add_date);
			var header = item.header;
			var renderData = {src, vacancyUrl, date, header};
			if (item.company.id != null) {
				var count = companyVacanciesCount(item);
				count.then((vacanciesCount) => {
					renderItem(renderData, vacanciesCount);
				});
			} else {
				renderItem(renderData);
			};	
			console.log(listItem);		
		})
			return listItem;
	})
	.then((listItem) => {
		console.log(listItem.length);
		if (listItem.length === 25) {
			document.getElementById('loader').remove();
			table.style.display = 'block';
		}
	});