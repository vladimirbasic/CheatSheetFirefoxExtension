browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getData") {
        var data = {
            title: document.title,
            url: window.location.href,
            html: getSelectedHtml()
        };
        sendResponse(data);
    }
});

function getSelectedHtml() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}