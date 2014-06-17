$("#hash-submit").on('click', function() {
    hideMessages();
    hash = $("#hash").val();
    if (hash.length > 0) {
        $.getJSON( "/API/hash/" + hash, function(data) {
            // message with Hash
            message = '<strong>Hash: ' + escapeHTML(hash) + ' (' + hash.length + ' chars)</strong><br/>'
            if (data.length > 0) {
                $("#results").text("Results");
                
                $.each(data, function(index, val) { 
                    message += val + '<br />'
                });
                $("#results").html(message);
                $("#results").show();
            } else {
                message += "No results..."
                $("#no-results").html(message);
                $("#no-results").show();
            }
        });
    }
});

$(function() {
    hideMessages();
});

// Hide system messages function
function hideMessages() {
    $("#results").hide();
    $("#no-results").hide();
}

// function to escape HTML
function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}