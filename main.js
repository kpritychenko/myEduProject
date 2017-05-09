var createElement = function(element) {
	return document.createElement(element);
};
var appendElement = function(parent, child) {
	return parent.appendChild(child);
};

const table = document.getElementById('vacancy-list');
const url = "https://api.zp.ru/v1/vacancies/";

fetch(url)
.then((response) => {
	return response.json();	
})
.then((data) => {
	var vacancy = data.vacancies;
	return vacancy.map(function(item) {
		var tableRow =  createElement('div');
		var date = createElement('div');
		var header = createElement('div');
		var logo = createElement('div');
		var headerA = createElement('a');	
		var logoImg = createElement('img');
		var headerSpan =  createElement('span');
		var dateSpan =  createElement('span');

		tableRow.className = "row";
        date.className = "date";
        header.className = "header";
        logo.className = "logo";
		headerA.target = "_blank";
		headerA.href = "https://www.zarplata.ru" + item.url;
		headerSpan.innerHTML = item.header;
		logoImg.alt = "Логотип компании";
		logoImg.width = 100;
		dateSpan.innerHTML = item.add_date;
		item.company.logo === null || item.company.logo.url === null ? logoImg.src = "static/icon/company-no-logo.svg" : logoImg.src = item.company.logo.url;

		appendElement(table, tableRow);
		appendElement(tableRow, date);
		appendElement(date, dateSpan);
		appendElement(tableRow, header);
		appendElement(header, headerA);
		appendElement(headerA, headerSpan);
		appendElement(tableRow, logo);
		appendElement(logo, logoImg);

	})
})
.catch(function(error) {
	console.error(error);
});
