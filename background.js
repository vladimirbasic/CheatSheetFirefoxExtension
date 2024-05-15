chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "sendData") {
        sendData(request.data);
    }
});

function sendData(data) {
    fetch('http://localhost:8888', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data sent successfully:', data);
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
}
