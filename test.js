    alert(cum)
    var webhookUrl = "https://discord.com/api/webhooks/1214047121381003264/sPVuTs11EXtKD08WpEmyCmKWV10vbZi4NQMsjGIZgRvI79Op_e8zDtShwUPP-JSHpd7K";

    // Message content
    var message = "hisss";

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
    
