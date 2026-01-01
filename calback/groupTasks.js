// // 1- masala
// function timeInterval(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function boilWater() {
//   console.log("Suv qanatilmoqda");

//   await timeInterval(3000);
//   console.log("Suv qaynadi, choyni damlang");

//   await timeInterval(3000);
//   console.log("Choy tayyor bo'ldi");
// }

// boilWater();

// // // 2- masala
// function timeInterval(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function batteryCharge() {
//   await timeInterval(2000);
//   console.log("Telefon zaryadga qo'yildi...");

//   await timeInterval(3000);
//   console.log("50% zaryad oldi...");

//   await timeInterval(2000);
//   console.log("100% bo'ldi, zaryaddan olishingiz mumkin!!");
// }

// batteryCharge();

// // // 3-masala
// function timeInterval(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function getData() {
//   console.log("Serverga murojaat qilindi...");

//   await timeInterval(2000);
//   console.log("Ma'lumot yuklanmoqda...");

//   await timeInterval(2000);
//   let data = { id: 1, name: "Boburbek", status: "active" };

//   console.log("Ma'lumot yuklandi: ", data);
//   console.log(data.name, "Hush kelibsiz");
// }

// getData();

// // // 4-masala
// const users = [
//   { id: 1, name: "Ali", age: 25, city: "Tashkent" },
//   { id: 2, name: "Doston", age: 30, city: "Samarkand" },
//   { id: 3, name: "Boburbek", age: 22, city: "Busan" },
//   { id: 4, name: "Laylo", age: 28, city: "Fergana" },
//   { id: 5, name: "Nodir", age: 27, city: "Bukhara" },
// ];

// function getUsers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(users);
//     }, 1000);
//   });
// }

// async function findUser() {
//   try {
//     let data = await getUsers();
//     let found = false;

//     for (let i = 0; i < data.length; i++) {
//       if (data[i].name === "Boburbek") {
//         console.log(data[i]);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       console.log("Foydalanuvchi ma'lumotlari topilmadi");
//     }
//   } catch (error) {
//     console.log("Xatolik yuz berdi");
//   }
// }

// findUser();

// // // 5-masala
// for (let i = 0; i <= 9; i++) {
//   let promise = new Promise((resolve, reject) => {
//     if (i % 2 === 0) {
//       resolve(i + " — juft son");
//     } else {
//       reject(i + " — toq son");
//     }
//   });

//   promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// }

// // // 6-masala
// function getUser(isSuccess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve({ id: 1, name: "Boburbek" });
//       } else {
//         reject("Xatolik yuz berdi");
//       }
//     }, 1000);
//   });
// }

// async function showUser() {
//   try {
//     let user = await getUser(true);
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// showUser();

// // // 7-masala
// function timeInterval(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function nonushta() {
//   console.log("Non tayyorlanmoqda...");

//   await timeInterval(2000);
//   console.log("Tuxum qovurilmoqda...");

//   await timeInterval(2000);
//   console.log("Nonushta tayyor marhamat, Yoqimli ishtaha");
// }

// nonushta();

// // // 8-masala
// function timeInterval(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function nonushta(tuxumBor) {
//   console.log("Non tayyorlanmoqda...");

//   await timeInterval(2000);
//   if (tuxumBor) {
//     console.log("Tuxum qovurilmoqda...");
//   } else {
//     console.log("Murabbo bilan non tayyorlanmoqda...");
//   }

//   await timeInterval(2000);
//   console.log("Nonushta tayyor!");
// }

// // true yoki false qilib ko‘ring
// nonushta(true);
