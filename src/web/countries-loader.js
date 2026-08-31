(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "assets/static/countries.json", false);
    request.send(null);
    window.__pixlrCountries = request.status === 200 ? JSON.parse(request.responseText) : {};
})();
