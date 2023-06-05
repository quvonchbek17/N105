const http = require("http")
const server = http.createServer((req, res) => {
   let method = req.method
   let url = req.url
})

server.listen(9000, () => console.log("Ishladi"))