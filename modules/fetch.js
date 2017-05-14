var fetchApi = function(url) {
    return fetch(url)
        .then((response) => {
        return response.json();
        });
    };
module.exports = fetchApi;