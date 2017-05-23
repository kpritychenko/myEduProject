const dateFormatter = require('./date-formatter.js');
const vacancyUrlFormatter = require('./vacancy-url-formatter');
const companyVacanciesCount =require('./company-vacancy-count.js');
const changeColor = require('./color-changer.js');
const loaderCount = require('./loader-count.js');

var createElement = function(element) {
    return document.createElement(element);
};
var appendElement = function(parent, child) {
    return parent.appendChild(child);
};

var table = document.getElementById('vacancy-list');

var renderItem = function(data, companyId) {
        var tableRow = createElement('div');
        tableRow.className = "vacancy-item";
        tableRow.addEventListener("click", changeColor, false);
    
        var header = createElement('div');
        header.className = "header";

        var logo = createElement('div');
        logo.className = "logo";

        logo.innerHTML = '<img alt="Логотип компании" width="100" src=' + data.src + '>';
        header.innerHTML = '<a target="_blank" class="vacancy-title" href="' + data.vacancyUrl + '">\
            <span>' + data.header + '</span>\
            </a>\
            <div class="date"> \
                <span>' + 'Дата добавления: ' + data.date +'</span> \
            </div>';
        if (companyId != null) { 
            var vacanciesCount = createElement('div');
            vacanciesCount.className = "vacancies-count";
            vacanciesCount.innerHTML = '<span>Количество вакансий компании: </span>'; 
            appendElement(header, vacanciesCount);
            var loader = loaderCount(vacanciesCount);
        };
        appendElement(table, tableRow);
        appendElement(tableRow, header);
        appendElement(tableRow, logo);
        
        var vCount = {vacanciesCount, loader};
        return vCount;
        
};

module.exports = renderItem;