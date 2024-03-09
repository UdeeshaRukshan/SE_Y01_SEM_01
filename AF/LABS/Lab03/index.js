const fs = require('fs');
const filePath = './file.txt'; // Correct way to specify the path to your file

fs.readFile(filePath, 'utf8', function(err, data) { // Added 'utf8' to get the content as a string
    if(err) throw err;
    console.log(data);
});


//now lets change the content of the file

fs.writeFile(filePath,'Hello Udeesha im from canada',function(err){
    if(err) throw err;

    console.log('File has beem updated!')
})

//creating a webserver using nodejs
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Udeesha! Welcome to the server');
    res.end();
});

const port = 8083; // Corrected port number
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
