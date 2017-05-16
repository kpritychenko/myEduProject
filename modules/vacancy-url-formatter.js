var vacancyUrlFormatter = function(item) {
    var humanUrl = item.url.match(/\/\w+\?/)[0];
    var chpu = humanUrl.substr(0, humanUrl.length-1);
    var vacancyUrl = "https://www.zarplata.ru" + '/vacancy/card/' + item.id + chpu;
    return vacancyUrl;
};

module.exports = vacancyUrlFormatter;