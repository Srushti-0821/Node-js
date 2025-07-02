const http = require('http')

// console.log(http)

let server = http.createServer((req,res) => {
  res.end("This is HTTP Server")
})

server.listen(2108,() => {
  console.log("Server Running")
})

// http://localhost:2108