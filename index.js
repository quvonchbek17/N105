const { createServer } = require('http')
const http = require('http')
const data = require('./data.js')
const { stringify } = require('querystring')
createServer((req, response) => {
    const method = req.method
    const url = req.url
    const bookType = url.split('/')[2]
    const bookId = url.split('/')[3]
    if(method == 'GET'){
        if(url.split("/")[1] === "books"){
            if(!bookType){
                response.end(JSON.stringify(data))
                return
            }
            if(!bookId){
                response.end(JSON.stringify(data))
                return
            }

            const book = data.find(e => e.id == bookId)
            
            if(!book){
                response.writeHead(404, {
                    "Content-type": "application/json"
                })
                response.end(JSON.stringify({
                    status: 404,
                    message: http.STATUS_CODES[404]
                }))
            }

            response.writeHead(200, {
                'Content-type': 'application/json'
            })

            response.end(JSON.stringify(book))
            return
        }

        response.end("Get method")
    }else{
        response.end("modification method")
    }
})
.listen(9000, () => {
    console.log("listening...");
})