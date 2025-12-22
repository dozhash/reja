console.log("Web Serverni Boshlash!");

const express = require("express");
const app = express();
const http = require("http");

/* 1: Kirish code
    1-boqichda expressga kirib kelayotgan malumotlarga bo'liq bolgan codelar yoziladi
*/

// // bu har qanday broqserdan kelyotgan request uchun faqat public folderni (ochiq) koroladi degani
app.use(express.static("public"));

// // bu kirib kelayotgan json formatdagi datani object holatiga o'girib beradi, {client va webserverlar orasidagi data json formatda}
app.use(express.json());

// bu HTMLdan traditional request form degan shakli bor => formdan nimanidur post qilinsa express server qabul qiladi
app.use(express.urlencoded({ extended: true }));

// 2 Session code

/* 3 Views ga bogliq codelar
    - Express uchun BSSR => beckendda HTML ni yasab clientga yuboramiz. (Traditional usul)
    - Shunga view ni yasaydigan folder kerak => ejs dan foydalanamiz
    - Demak biz ejs orqali backend ni ichida HTML - frontend ni yasaymiz
*/

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.get("/", function (req, res) {
  res.end(`<h1>Hello World!</h1>`);
});

app.get("/hello", function (req, res) {
  res.end(`<h1 style = "background: red" >Hello World!</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style = "background: orange" >You are in GIFTS page!</h1>`);
});

app.get("/mit35", function (req, res) {
  res.end(
    `<a style = "font-size: 35px" href = "https://www.devexacademy.com/result/35">Check MIT35 acceptance list</a>`
  );
});

// 1-ta parametr qabul qiladi
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
