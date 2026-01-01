// // // 21. ----------------> NodeJS event loop va Callback functionlarni o'rganamiz <----------------

console.log("------------> Jack Ma maslahatlari <------------");

// const list = [
//   "Yaxshi talaba bo'ling!", // 20
//   "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
//   "O'zingizga ishlashni boshlang!", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//   "Yoshlarga investitsiya qiling!", // 50-60
//   "Endi dam oling, foydasi yo'q!", // 60
// ];

// function maslahatBering(age, callback) {
//   if (typeof age !== "number") callback("insert a number", null);
//   else if (age <= 20) callback(null, list[0]);
//   else if (age > 20 && age <= 30) callback(null, list[1]);
//   else if (age > 30 && age <= 40) callback(null, list[2]);
//   else if (age > 40 && age <= 50) callback(null, list[3]);
//   else if (age > 50 && age <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("Passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Output:", data);
//   }
// });

// console.log("Passed here 1");

// // // 22. ----------------> Asynchronous functionlarni qo'llash <----------------
// const list = [
//   "Yaxshi talaba bo'ling!", // 20
//   "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
//   "O'zingizga ishlashni boshlang!", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//   "Yoshlarga investitsiya qiling!", // 50-60
//   "Endi dam oling, foydasi yo'q!", // 60
// ];

// async function maslahatBering(age) {
//   if (typeof age !== "number") throw new Error("insert a number");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age <= 30) return list[1];
//   else if (age > 30 && age <= 40) return list[2];
//   else if (age > 40 && age <= 50) return list[3];
//   else if (age > 50 && age <= 60) return list[4];
//   else {
//     return new Promise((reslve, reject) => {
//       // Promise bn setTimeout ishlidi
//       setTimeout(() => {
//         reslve(list[5]);
//       }, 5000);
//     });
//   }
// }

// console.log("Passed here 0");

// // then / catch (promise hell* bolib ketadi)
// maslahatBering(25)
//   .then((data) => {
//     // 2-yoshni tekshirganda messed-up boladi
//     maslahatBering(25)
//       .then((data) => {
//         // 3-yoshni tekshirganda yanada messed-up boladi
//         maslahatBering(25)
//           .then((data) => {
//             console.log("Javob:", data);
//           })
//           .catch((err) => {
//             console.log("ERROR:", err);
//           });
//         console.log("Javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });

//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("Passed here 1");

// // asyn / await -----> sodda syntax
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);

//   javob = await maslahatBering(70);
//   console.log(javob);

//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// // // Callback funtion with setInterval
const list = [
  "Yaxshi talaba bo'ling!", // 20
  "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
  "O'zingizga ishlashni boshlang!", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
  "Yoshlarga investitsiya qiling!", // 50-60
  "Endi dam oling, foydasi yo'q!", // 60
];

async function maslahatBering(age, callback) {
  if (typeof age !== "number") callback("insert a number", null);
  else if (age <= 20) callback(null, list[0]);
  else if (age > 20 && age <= 30) callback(null, list[1]);
  else if (age > 30 && age <= 40) callback(null, list[2]);
  else if (age > 40 && age <= 50) callback(null, list[3]);
  else if (age > 50 && age <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});
