const http = require("http")
const server = http.createServer((req, res) => {
   let method = req.method
   let url = req.url

   res.writeHead(200, {
      "Content-Type" : "application/json",
   })
   req.end(JSON.stringify({message : "This is server response"}))
})

server.listen(9000, () => console.log("Ishladi"))