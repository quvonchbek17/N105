//// uyga vazifa
function fn(arr) {
  
}

const http = require("http");

let books = [
    {
        id: 1,
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Caroll",
        type: "fantastic"
    },
    {
        id: 2,
        title: "Harry Potter",
        author: "Joanne Rowling",
        type: "fantastic",
    },
    {
        id: 3,
        title: "The Lord of The Rings",
        author: "John Ronald Reuel Tolkien",
        type: "epic high-fantastic",
    },
    {
        id: 4,
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        type: "Historical Fiction",
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "John Ronald Reuel Tolkien",
        type: "fantastic",
    },
    {
        id: 6,
        title: "Vardi Wala Gunda",
        author: "Ved Prakash Sharma",
        type: "detective",
    },
    {
        id: 7,
        title: "The Lost Symbol",
        author: "Dan Brown",
        type: "fiction",
    },
];

const server = http.createServer((req, res) => {
    let method = req.method;
    let url = req.url;
    const data = url.split("/").at(-1)
    if (method == "GET" && url == "/books") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(books))
        if (data == "/books") {
            res.end(JSON.stringify(books));
            return
        }
        if (data == "/fiction") {
            res.end(JSON.stringify(books.filter(book => book.type == "fiction")))
            return
        }
        if (data == "/fantastic") {
            res.end(JSON.stringify(books.filter(book => book.type == "fantastic")))
            return
        }
        if (data == "/detective") {
            res.end(JSON.stringify(books.filter(book => book.type == "detective")))
            return
        }
        if (data == "/Historical Fiction") {
            res.end(JSON.stringify(books.filter(book => book.type == "Historical Fiction")))
            return
        }
        if (data == "/epic high-fantastic") {
            res.end(JSON.stringify(books.filter(book => book.type == "epic high-fantastic")))
            return
        }
        return res.end(url)
    }
    res.end("working");
})

server.listen(9000, () => {
    console.log("listening....")
})