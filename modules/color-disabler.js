const changeColor = require('./color-changer.js');

var colorDisable = () => {
    var disable = () => {
        var item = document.getElementById('vacancy-list').children;
        for (var i=0; i<item.length; i++ ) {
            item[i].style.background = '#fff';
            item[i].removeEventListener("click", changeColor,false);
        }
    };
    var logo = document.querySelector('a.main-logo img');
    return logo.addEventListener('mouseover', disable);
};

module.exports = colorDisable; 