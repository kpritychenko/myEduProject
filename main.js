var fetchApi = require('./modules/fetch.js');
var renderList = require('./modules/render.js');

const url = "https://api.zp.ru/v1/vacancies/";

fetchApi(url)
	.then((data) => {
		renderList(data);
});