//create a basic server using http method
const http = require("http");

// create a route file
//req --> send by user
//res --> sebd by server
const server = http.createServer((req, res) => {    
 res.end("Hello World!!")
});

server.listen(3000 ,()=> {
console.log("check on you browser: http://localhost:3000");
});
//check on browser after run server.js file =>localhost:3000