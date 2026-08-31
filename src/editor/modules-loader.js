(function () {
    var request = new XMLHttpRequest();
    request.open("GET", "src/editor/modules-manifest.json", false);
    request.send(null);
    var files = request.status === 200 ? JSON.parse(request.responseText) : [];
    for (var i = 0; i < files.length; i++) {
        document.write('<script src="src/editor/modules/' + files[i] + '"><' + '/script>');
    }
})();
