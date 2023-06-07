const http = require("http");
const data = require("./data.js");

http
  .createServer((request, response) => {
    const method = request.method;
    const url = request.url.split("/");
    const category = url[2];
    const bookId = url[3];
    if (method === "GET") {
      if (url[1] === "books") {
        if (category) {
          if (!bookId) {
            if (!data[category]) {
              response.writeHead(404, {
                "Content-Type": "application/json",
              });
              response.end(
                JSON.stringify({
                  status: 404,
                  message: http.STATUS_CODES["404"],
                })
              );
              return;
            }

            response.writeHead(200, {
              "Content-Type": "application/json",
            });
            response.end(JSON.stringify(data[category]));
            return;
          }

          const book = data[category].find((book) => book.id == bookId);
          if (!book) {
            response.writeHead(404, {
              "Content-Type": "application/json",
            });
            response.end(
              JSON.stringify({
                status: 404,
                message: http.STATUS_CODES["404"],
              })
            );
          }

          response.writeHead(200, {
            "Content-Type": "application/json",
          });
          response.end(JSON.stringify(book));
          return;
        }

        response.writeHead(200, {
          "Content-Type": "application/json",
        });
        response.end(JSON.stringify({ data: data }));
        return;
      }
    } else {
      response.writeHead(404, {
        "Content-Type": "application/json",
      });
      response.end(
        JSON.stringify({
          status: 404,
          message: "Wrong method used",
        })
      );
    }
  })
  .listen(9000, () => console.log("Listening..."));
