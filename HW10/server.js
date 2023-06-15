import { readFile, writeFile } from "./src/helpers/fs.js";
import http from "http";
import { signUp, signIn } from "./src/helpers/jwt.js";

const server = http.createServer(async (req, res) => {
  let url = req.url;
  let method = req.method;
  let token = req.headers.token;

  if (url == "/profile") {
    let userId = await signIn(token);
    let users = await readFile("users");

    let user = users.find((el) => el.id == userId);

    if (user) {
      res.end(JSON.stringify(user));
    } else {
      res.end("token is not found");
    }
  }

  // ----------------------------------------------------------------

  if (method == "POST") {
    if (url == "/register") {
      let body = {};
      req.on("data", (chunk) => {
        body = JSON.parse(chunk);
      });

      let users = await readFile("users");
      let checkUsername = users.find((el) => el.username == body.username);

      if (checkUsername) {
        return res.end("username band");
      }

      let user = {
        id: users.at(-1)?.id ? users.at(-1)?.id + 1 : 1,
        username: body.username,
        password: body.password,
      };

      let token = await signUp(user.id);

      if (token) {
        users.push(user);
        await writeFile("users", users);
      }

      res.end(token);
    }

    // ----------------------------------------------------------------

    if (url == "/login") {
      let body = {};
      req.on("data", (chunk) => {
        body = JSON.parse(chunk);
      });
      let users = await readFile("users");

      let user = users.find(
        (el) => el.username == body.username && el.password == body.password
      );

      if (user) {
        return res.end(await signUp(user.id));
      } else {
        return res.end("isim yoli password hato");
      }
    }

    // ----------------------------------------------------------------
  }
});

server.listen(8000, () => {
  console.log("Ishladi");
});

