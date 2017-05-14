const dateFormatter = require('./date-formatter.js');
var createElement = function(element) {
    return document.createElement(element);
};
var appendElement = function(parent, child) {
    return parent.appendChild(child);
};

const table = document.getElementById('vacancy-list');

//var cardLink = item.utl;


var renderList = function(data) {
    var vacancy = data.vacancies;
    return vacancy.map(function (item) {
        var href = "https://www.zarplata.ru" + item.url;
        var src;
        item.company.logo === null || item.company.logo.url === null ? src = "static/icon/company-no-logo.svg" : src = item.company.logo.url;
        var date = dateFormatter(item.add_date);

        var tableRow = createElement('div');
        tableRow.innerHTML = '<div class="row"> \
            <div class="date"> \
                <span>'+ 'Дата добавления: <br>' +date+'</span> \
            </div> \
            <div class="header">\
                <a target="_blank" href="'+href+'">\
                    <span>'+item.header+'</span>\
                </a>\
            </div> \
            <div class="logo">\
                <img alt="Логотип компании" width="100" src='+src+'>\
            </div> \
        </div>';
        appendElement(table, tableRow);
    });
};

module.exports = renderList;