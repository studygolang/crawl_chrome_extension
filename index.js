function httpRequest(url, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

chrome.runtime.sendMessage('', function(response){
    
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var url = 'http://studygolang.com/articles/crawl?url='+encodeURIComponent(message);
    httpRequest(url, function(data){
        data = JSON.parse(data)
        document.getElementById('crawl_div').innerText = data.msg;
    });
});


