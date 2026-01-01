console.log("Web Serverni Boshlash!");
const express = require("express");
const app = express();

// MongoDB connection
const db = require("./server").db();
// console.log("db has these followings:", db);

/* 1: Kirish code
    1-boqichda expressga kirib kelayotgan malumotlarga bog'liq bolgan codelar yoziladi
*/

// // bu har qanday browserdan kelyotgan request uchun faqat public folderni (ochiq) koroladi degani
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
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
