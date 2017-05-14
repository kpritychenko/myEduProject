/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var fetchApi = function (url) {
    return fetch(url).then(response => {
        return response.json();
    });
};
module.exports = fetchApi;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const dateFormatter = __webpack_require__(2);
var createElement = function (element) {
    return document.createElement(element);
};
var appendElement = function (parent, child) {
    return parent.appendChild(child);
};

const table = document.getElementById('vacancy-list');

//var cardLink = item.utl;


var renderList = function (data) {
    var vacancy = data.vacancies;
    return vacancy.map(function (item) {
        var href = "https://www.zarplata.ru" + item.url;
        var src;
        item.company.logo === null || item.company.logo.url === null ? src = "static/icon/company-no-logo.svg" : src = item.company.logo.url;
        var date = dateFormatter(item.add_date);

        var tableRow = createElement('div');
        tableRow.innerHTML = '<div class="row"> \
            <div class="date"> \
                <span>' + 'Дата добавления: <br>' + date + '</span> \
            </div> \
            <div class="header">\
                <a target="_blank" href="' + href + '">\
                    <span>' + item.header + '</span>\
                </a>\
            </div> \
            <div class="logo">\
                <img alt="Логотип компании" width="100" src=' + src + '>\
            </div> \
        </div>';
        appendElement(table, tableRow);
    });
};

module.exports = renderList;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var dateFormatter = function (add_date) {
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

var fetchApi = __webpack_require__(0);
var renderList = __webpack_require__(1);

const url = "https://api.zp.ru/v1/vacancies/";

fetchApi(url).then(data => {
	renderList(data);
});

/***/ })
/******/ ]);