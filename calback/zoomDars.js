// console.log("Zoom dars page");

/* Formulani yozvol*/

// // // ------------------------------------> callback Functions <------------------------------------

// function qoldiqliBolish(a, b, callback) {
//   if (b == 0) {
//     callback("Maxraj nolga teng bolmaydi!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// qoldiqliBolish(7, 6, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Data:", data);
//     console.log("Mantiq ...");
//   }
// });

// // // chatGPT dan masala:
// function addition(a, b, callback) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     callback("Parameters must be numbers!", null);
//   } else {
//     callback(null, a + b);
//   }
// }

// addition(10, 5, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("DATA:", data);
//   }
// });

// const list = [
//   "Yaxshi talaba bo'ling!", // 20
//   "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
//   "O'zingizga ishlashni boshlang!", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//   "Yoshlarga investitsiya qiling!", // 50-60
//   "Endi dam oling, foydasi yo'q!", // 60
// ];

// function giveAdvice(age, callback) {
//   if (typeof age !== "number") callback("Iltimos raqam yozing", null);
//   else if (age <= 20) callback(null, list[0]);
//   else if (age > 20 && age <= 30) callback(null, list[1]);
//   else if (age > 30 && age <= 40) callback(null, list[2]);
//   else if (age > 40 && age <= 50) callback(null, list[3]);
//   else if (age > 50 && age <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// giveAdvice(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });

// // // ------------------------------------> asnc / await <------------------------------------
// // // ====> then / catch -> call qismida

// const list = [
//   "Yaxshi talaba bo'ling!", // 20
//   "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
//   "O'zingizga ishlashni boshlang!", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//   "Yoshlarga investitsiya qiling!", // 50-60
//   "Endi dam oling, foydasi yo'q!", // 60
// ];

// async function giveAdvice(age) {
//   if (typeof age !== "number") throw new Error("Iltimos raqam yozing");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age <= 30) return list[1];
//   else if (age > 30 && age <= 40) return list[2];
//   else if (age > 40 && age <= 50) return list[3];
//   else if (age > 50 && age <= 60) return list[4];
//   else {
//     setTimeout(function () {
//       return list[5];
//     }, 1000);
//   }
// }

// console.log("A");

// giveAdvice(25)
//   .then((data) => {
//     console.log("B");

//     console.log("Javob:", data);
//     console.log("Matniq ...");
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("C");

// for (let i = 1; i <= 10; i++) {
//   console.log("i step:", i);
// }

// // // // ====> async / await -> call qismida
// const list = [
//   "Yaxshi talaba bo'ling!", // 20
//   "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
//   "O'zingizga ishlashni boshlang!", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//   "Yoshlarga investitsiya qiling!", // 50-60
//   "Endi dam oling, foydasi yo'q!", // 60
// ];

// async function giveAdvice(age) {
//   if (typeof age !== "number") throw new Error("Iltimos raqam yozing");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age <= 30) return list[1];
//   else if (age > 30 && age <= 40) return list[2];
//   else if (age > 40 && age <= 50) return list[3];
//   else if (age > 50 && age <= 60) return list[4];
//   else {
//     setTimeout(function () {
//       return list[5];
//     }, 1000);
//   }
// }

// // // async / await -> call qismida:

// (async function running() {
//   let result = await giveAdvice(25);
//   console.log("Javob1:", result);

//   result = await giveAdvice(35);
//   console.log("Javob1:", result);

//   result = await giveAdvice(45);
//   console.log("Javob1:", result);

//   result = await giveAdvice(55);
//   console.log("Javob1:", result);

//   result = await giveAdvice(65);
//   console.log("Javob1:", result);
// })();

// // // ------------------------------------> asnc / await <------------------------------------
// // // ====> async / await -> call qismida
const list = [
  "Yaxshi talaba bo'ling!", // 20
  "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
  "O'zingizga ishlashni boshlang!", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
  "Yoshlarga investitsiya qiling!", // 50-60
  "Endi dam oling, foydasi yo'q!", // 60
];

async function giveAdvice(age) {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") reject("Iltimos raqam yozing");
    else if (age <= 20) resolve(list[0]);
    else if (age > 20 && age <= 30) resolve(list[1]);
    else if (age > 30 && age <= 40) resolve(list[2]);
    else if (age > 40 && age <= 50) resolve(list[3]);
    else if (age > 50 && age <= 60) resolve(list[4]);
    else {
      setTimeout(function () {
        resolve(list[5]);
      }, 1000);
    }
  });
}

// // async / await -> call qismida:

// (async function running() {
//   let result = await giveAdvice(25);
//   console.log("Javob1:", result);

//   result = await giveAdvice(85);
//   console.log("Javob2:", result);

//   result = await giveAdvice(45);
//   console.log("Javob3:", result);

//   result = await giveAdvice(55);
//   console.log("Javob4:", result);

//   result = await giveAdvice(65);
//   console.log("Javob5:", result);
// })();

giveAdvice(75)
  .then((data) => {
    console.log("Javob:", data);
  })
  .catch((err) => console.log("ERROR:".err));
