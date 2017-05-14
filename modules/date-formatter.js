var dateFormatter = function(add_date) {
    var mounthArr = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];
    var date = new Date(add_date);
    var date_object = {
        year: date.getFullYear(),
        mounth: date.getMonth(),
        day: date.getDate()
    };
    return date_object.day + ' ' + mounthArr[date_object.mounth] + ' '  + date_object.year;
};

module.exports = dateFormatter;