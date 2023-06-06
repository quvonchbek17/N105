const http = require("http");
const data = require("./data");

http
  .createServer((request, response) => {
    const method = request.method;
    const url = request.url;
    const bookType = url.split("/")[2];
    const bookId = url.split("/")[3];

    if (method === "GET") {
      if (url.split("/")[1] === "books") {
        if (!bookType) {
          response.end(JSON.stringify(data));
          return;
        }
        if (!bookId) {
          const booksOfType = data[0][bookType];
          if (!booksOfType) {
            response.writeHead(404, {
              "Content-type": "application/json",
            });
            response.end(
              JSON.stringify({
                status: 404,
                message: "Book type not found",
              })
            );
          }
          response.end(JSON.stringify(booksOfType));
          return;
        }
        const book = data[0][bookType].find((e) => e.id == bookId);
        if (!book) {
          response.writeHead(404, {
            "Content-type": "application/json",
          });
          response.end(
            JSON.stringify({
              status: 404,
              message: "Book not found",
            })
          );
        }
        response.writeHead(200, {
          "Content-type": "application/json",
        });
        response.end(JSON.stringify(book));
        return;
      }
      response.end("GET method");
    } else {
      response.end("Modification method");
    }
  })
  .listen(9000, () => {
    console.log("Listening...");
  });
