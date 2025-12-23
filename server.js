console.log("Web Serverni Boshlash!");

const express = require("express");
/*❓ NIMA UCHUN EXPRESS KERAK? => bu Node.js uchun web server yaratishga yordam beradigan framework.
  Express:
  - Server yozishni juda oson qiladi
  - Routing (/home, /login)
  - Middleware
  - JSON, form data
  - API yaratish

  ❌ Expresssiz:
  => http.createServer(...)

  ✔ Express bilan:
  => app.get("/", ...)
*/

const app = express();
/* app → express server instance 
  🧑‍🍳 Oshxona misoli:
      -> Express → oshxona qurish rejasi
      -> express() → oshxonani ishga tushirish
      -> app → ishlayotgan oshxona
      -> app.get() → menyuga ovqat qo‘shish
*/

const http = require("http");

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
  res.render("harid");
});

// 1-ta parametr qabul qiladi
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
