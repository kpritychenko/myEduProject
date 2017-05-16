var changeColor = function(tableRow) {
    var colRand = () => {
            return Math.floor(Math.random() * 256);
    };
    var color = 'rgb' + '(' + colRand() + ' ,' + colRand()+ ' ,' + colRand() + ')';
    return this.style.background = color;
};

module.exports = changeColor;