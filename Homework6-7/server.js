const http = require("http");
let products = [
  {
    id: 1,
    name: "Olma",
    price: 15000,
    category: "Meva-cheva",
  },
  {
    id: 2,
    name: "Iphone 7",
    price: 3000000,
    category: "Telefon",
  },
  {
    id: 3,
    name: "Shippak",
    price: 30000,
    category: "Kiyim-kechak",
  },
];

const server = http.createServer(async (req, res) => {
  let method = req.method;
  let url = req.url.split("/");
  //   console.log(url);
  if (method == "GET" && url[1] === "products") {
    if (url.at(-1) == "products") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      return res.end(JSON.stringify(products));
    }
    if (url.at(-1) == "kiyim-kechak") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify(products.filter((el) => el.category == "Kiyim-kechak"))
      );
    }
    if (url.at(-1) == "meva-cheva") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify(products.filter((el) => el.category == "Meva-cheva"))
      );
    }
    if (url.at(-1) == "telefon") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify(products.filter((el) => el.category == "Telefon"))
      );
    }
  }
  if ((method = "POST" && url[1] === "products")) {
    let data = {};
    await req.on("data", (chunk) => {
      data = {
        id: products.at(-1).id ? products.at(-1).id + 1 : 1,
        ...JSON.parse(chunk.toString()),
      };
      console.log(data);
    });
    console.log(products);
    products = [...products, data];
    return res.end(JSON.stringify(products));
  }
  res.end("Uka qarab sorov jonat");
});
server.listen(9000, () => console.log("Ishladi"));
