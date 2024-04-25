function extractPathAndParams() {
    let fullURL = document.getElementById('urlInput').value.trim();
    let parser = document.createElement('a');
    parser.href = fullURL;
    let path = parser.pathname;
    let searchParams = parser.search;
    searchParams = searchParams.substring(1);
    let params = {};
    if (searchParams) {
        searchParams.split('&').forEach(function(param) {
            let parts = param.split('=');
            let key = decodeURIComponent(parts[0]);
            let value = parts[1] ? decodeURIComponent(parts[1]) : '';
            params[key] = value;
        });
    }
    document.getElementById('urlPath').innerText = "URL Path: " + path;
    document.getElementById('queryParams').innerText = "Query Parameters: " + JSON.stringify(params);
}