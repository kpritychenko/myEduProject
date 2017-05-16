const fetchApi = require('./fetch.js');
const companiesUrl = 'https://api.zp.ru/v1/companies/?q=';

var companyVacanciesCount = function(item) {
    var url = companiesUrl + item.company.id;
    var count = fetchApi(url).then((data) => {   
        return data.companies[0].vacancies_total.active;;
    }); 
    return count;
};

module.exports = companyVacanciesCount;