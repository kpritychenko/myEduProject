/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var changeColor = function changeColor(tableRow) {
    var colRand = function colRand() {
        return Math.floor(Math.random() * 256);
    };
    var color = 'rgb' + '(' + colRand() + ' ,' + colRand() + ' ,' + colRand() + ')';
    return this.style.background = color;
};

module.exports = changeColor;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchApi = __webpack_require__(3);
var companiesUrl = 'https://api.zp.ru/v1/companies/?q=';

var companyVacanciesCount = function companyVacanciesCount(item) {
    var url = companiesUrl + item.company.id;
    var count = fetchApi(url).then(function (data) {
        return data.companies[0].vacancies_total.active;;
    });
    return count;
};

module.exports = companyVacanciesCount;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dateFormatter = function dateFormatter(add_date) {
    var mounthArr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var date = new Date(add_date);
    var date_object = {
        year: date.getFullYear(),
        mounth: date.getMonth(),
        day: date.getDate()
    };
    return date_object.day + ' ' + mounthArr[date_object.mounth] + ' ' + date_object.year;
};

module.exports = dateFormatter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchApi = function fetchApi(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
};
module.exports = fetchApi;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vacancyUrlFormatter = function vacancyUrlFormatter(item) {
    var humanUrl = item.url.match(/\/\w+\?/)[0];
    var chpu = humanUrl.substr(0, humanUrl.length - 1);
    var vacancyUrl = "https://www.zarplata.ru" + '/vacancy/card/' + item.id + chpu;
    return vacancyUrl;
};

module.exports = vacancyUrlFormatter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var changeColor = __webpack_require__(0);

var colorDisable = function colorDisable() {
    var disable = function disable() {
        var item = document.getElementById('vacancy-list').children;
        for (var i = 0; i < item.length; i++) {
            item[i].style.background = '#fff';
            item[i].removeEventListener("click", changeColor, false);
        }
    };
    var logo = document.querySelector('a.main-logo img');
    return logo.addEventListener('mouseover', disable);
};

module.exports = colorDisable;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var loader = function loader() {
    var loader = document.createElement('div');
    loader.className = "loader";
    loader.id = "loader";
    loader.innerHTML = '<img src="static/img/loader/loading_spinner.gif">';
    return document.body.appendChild(loader);
};

//var list = document.querySelector()

module.exports = loader;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dateFormatter = __webpack_require__(2);
var vacancyUrlFormatter = __webpack_require__(4);
var companyVacanciesCount = __webpack_require__(1);
var changeColor = __webpack_require__(0);

var createElement = function createElement(element) {
    return document.createElement(element);
};
var appendElement = function appendElement(parent, child) {
    return parent.appendChild(child);
};

var table = document.getElementById('vacancy-list');

var renderItem = function renderItem(data, count) {
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
                <span>' + 'Дата добавления: ' + data.date + '</span> \
                </div>';
    if (count != undefined) {
        var vacanciesCount = createElement('div');
        vacanciesCount.className = "vacancies-count";
        vacanciesCount.innerHTML = '<span>Количество вакансий компании: ' + count + '</span>';
        appendElement(header, vacanciesCount);
    };
    appendElement(table, tableRow);
    appendElement(tableRow, header);
    appendElement(tableRow, logo);
};

module.exports = renderItem;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dateFormatter = __webpack_require__(2);
var vacancyUrlFormatter = __webpack_require__(4);
var companyVacanciesCount = __webpack_require__(1);
var fetchApi = __webpack_require__(3);
var renderItem = __webpack_require__(7);
var changeColor = __webpack_require__(0);
var loader = __webpack_require__(6);
var colorDisable = __webpack_require__(5);

var table = document.getElementById('vacancy-list');
var url = "https://api.zp.ru/v1/vacancies/";

colorDisable();
loader();
table.style = 'display:none';
fetchApi(url).then(function (data) {
	var listItem = data.vacancies.map(function (item) {
		var src;
		item.company.logo === null || item.company.logo.url === null ? src = "static/icon/company-no-logo.svg" : src = item.company.logo.url;
		var vacancyUrl = vacancyUrlFormatter(item);
		var date = dateFormatter(item.add_date);
		var header = item.header;
		var renderData = { src: src, vacancyUrl: vacancyUrl, date: date, header: header };
		if (item.company.id != null) {
			var count = companyVacanciesCount(item);
			count.then(function (vacanciesCount) {
				renderItem(renderData, vacanciesCount);
			});
		} else {
			renderItem(renderData);
		};
		console.log(listItem);
	});
	return listItem;
}).then(function (listItem) {
	console.log(listItem.length);
	if (listItem.length === 25) {
		document.getElementById('loader').remove();
		table.style.display = 'block';
	}
});

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map