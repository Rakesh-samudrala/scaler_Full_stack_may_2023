/****
 * Ram , cache -> memory  -> chunk of data -> to the client(streaming)
 * **/

// -> in nodes recieve as well as can also  send the request 
// every thing related to http
const http = require('http');
const fs = require("fs");
const server = http.createServer();
// server.on("request", function (req, res) {
//     console.log("Got the request");
//     // this is the bottle neck  -> streaming
//     fs.readFile('./big.file', (err, data) => {
//         if (err) throw err;
//         // send the resp to the client
//         res.end(data);
//     });
// })

server.on('request', (req, res) => {
    console.log("sending resp")
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(3000,
    () => {
        console.log('listening on port 3000')
    })