fetch("https://api.thingspeak.com/channels/1458412/feeds.json?results=2")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));