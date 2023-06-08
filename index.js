//// uyga vazifa
const http = require("http");

let books = [
  {
    id: 1,
    title: "Sir",
    the_author: "Fotih Duman",
    type: "bestseller",
  },
  {
    id: 2,
    title: "Men",
    the_author: "Fotih Duman",
    type: "bestseller",
  },
  {
    id: 3,
    title: "Harry Potter",
    the_author: "Joanne Rowling",
    type: "fantastic",
  },
  {
    id: 4,
    title: "Sherlock Holmes",
    the_author: "Sir Arthur Conan Doyle",
    type: "detective",
  },
  {
    id: 5,
    title: "Sariq devni minib",
    the_author: "Xudoyderdi To'xtaboyev",
    type: "fantastic",
  },
  {
    id: 6,
    title: "Beparvolikning nozik san'ati",
    the_author: "Mark Menson",
    type: "bestseller",
  },
];

http
  .createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const data = url.split("/").at(-1)
    if (method == "GET") {
      if (data == "books") {
        res.end(JSON.stringify(books));
        return
      }
      if (data == "bestseller") {
        res.end(JSON.stringify(books.filter(el => el.type == "bestseller")))
        return 
      }
      if (data == "fantastic") {
        res.end(JSON.stringify(books.filter(el => el.type == "fantastic")))
        return 
      }
      if (data == "detective") {
        res.end(JSON.stringify(books.filter(el => el.type == "detective")))
        return 
      }
      return res.end("GET method")
    }

    res.end("Server alive");
  })
  .listen(5005, () => {
    console.log("listening...");
   
  });
