var loaderCount = function(vacanciesCount) {
    var loader = document.createElement('div');
    loader.className = "loader-count";
    loader.id = "loader-count";
    loader.innerHTML = '<img src="static/img/loader/loading_spinner.gif">';
    return vacanciesCount.appendChild(loader);
};

module.exports = loaderCount;