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
			var companyId = item.company.id;
			var renderData = {src, vacancyUrl, date, header};
			var vCount = renderItem(renderData, companyId);

			if (companyId != null) {
				var count = companyVacanciesCount(companyId);
				count.then((count) => {
					vCount.loader.remove();
					vCount.vacanciesCount.innerHTML = '<span>Количество вакансий компании: ' + count + '</span>'; 
				});
			}
		})
		return listItem;
	})
	.then((listItem) => {
		if (listItem.length === 25) {
			document.getElementById('loader').remove();
			table.style.display = 'block';
		}
	});