document.addEventListener('DOMContentLoaded', function() {
    var postDataBtn = document.getElementById('postDataBtn');
    postDataBtn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "getData"}, function(response) {
                console.log('Data received:', response);
                chrome.runtime.sendMessage({action: "sendData", data: response});
            });
        });
    });
});
