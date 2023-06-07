const http = require('http');
const data = require('./data.js');

http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;
  const parts = url.split('/');
  const category = parts[2];
  const bookId = parts[3];

  if (method === 'GET') {
    console.log(url);
    if (parts[1] === 'books') {
      if (category) {
        const categoryData = data.find((item) => item.category === category);
        if (categoryData) {
          if (bookId) {
            const book = categoryData.books.find((item) => item.id == bookId);
            if (book) {
              response.writeHead(200, {
                'Content-Type': 'application/json',
              });
              response.end(JSON.stringify(book));
            } else {
              response.writeHead(404, {
                'Content-Type': 'application/json',
              });
              response.end(
                JSON.stringify({
                  status: 404,
                  message: 'Book not found',
                })
              );
            }
          } else {
            response.writeHead(200, {
              'Content-Type': 'application/json',
            });
            response.end(JSON.stringify(categoryData.books));
          }
        } else {
          response.writeHead(404, {
            'Content-Type': 'application/json',
          });
          response.end(
            JSON.stringify({
              status: 404,
              message: 'Category not found',
            })
          );
        }
      } else {
        response.writeHead(404, {
          'Content-Type': 'text/plain',
        });
        response.end('Not Found');
      }
    } else {
      response.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      response.end('Not Found');
    }
  } else {
    response.writeHead(405, {
      'Content-Type': 'text/plain',
    });
    response.end('Method Not Allowed');
  }
})
  .listen(9090, () => {
    console.log('Listening on port 9090...!');
  });

