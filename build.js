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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var createElement = function(element) {
	return document.createElement(element);
};
var appendElement = function(parent, child) {
	return parent.appendChild(child);
};

const table = document.getElementById('vacancy-list');
const url = "http://api.zp.ru/v1/vacancies/";

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


/***/ })
/******/ ]);