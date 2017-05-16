var loader = function() {
    var loader = document.createElement('div');
    loader.className = "loader";
    loader.id = "loader";
    loader.innerHTML = '<img src="static/img/loader/loading_spinner.gif">';
    return document.body.appendChild(loader);
};

//var list = document.querySelector()

module.exports = loader;