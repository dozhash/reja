console.log("---------> Welcome to the Training Page! <---------");

/* D-TASK
    Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, 
    hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. 
    MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
    shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  vaqt() {
    return moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.vaqt()}da ${this.non} ta non, ${this.lagmon}ta lagmon va ${
        this.cola
      }ta cole mavjud!`
    );
  }

  sotish(product, quantity) {
    if (this[product] >= quantity) {
      this[product] -= quantity;
      console.log(`Hozir ${this.vaqt()}da ${quantity}ta ${product} sotildi`);
    } else {
      console.log(`Hozir ${this.vaqt()}da ${product} yetarli emas`);
    }
  }

  qabul(product, quantity) {
    this[product] += quantity;
    console.log(
      `Hozir ${this.vaqt()}da ${quantity}ta ${product} qabul qilindi`
    );
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("langmon", 1);
shop.qabul("cola", 4);
shop.qoldiq();

// // // ------------------------------------------------> C TASK <------------------------------------------------
/* C-TASK
     Shunday function tuzing, u 2ta string parametr ega bolsin,
     hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin. 
     MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.
*/

// function checkContent(word1, word2) {
//   if (word1.length !== word2.length) return false;

//   let word1Elems = [];
//   let word2Elems = [];

//   for (let i = 0; i < word1.length; i++) {
//     word1Elems.push(word1[i].toLowerCase());
//   }

//   for (let i = 0; i < word2.length; i++) {
//     word2Elems.push(word2[i].toLowerCase());
//   }

//   const sortedElems1 = word1Elems.sort().join("");
//   const sortedElems2 = word2Elems.sort().join("");

//   return sortedElems1 === sortedElems2;
// }

// // const result = checkContent("mitgroup", "gmtiprou");
// const result = checkContent("Shahzod", "dozhash");
// console.log(result);

// // // ------------------------------------------------> B TASK <------------------------------------------------
// /* B-TASK:
//     Shunday function tuzing, u 1ta string parametrga ega bolsin,
//     hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//     MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// */

// function integerFromString(stringData) {
//   let count = 0;
//   for (let i = 0; i < stringData.length; i++) {
//     const element = stringData[i];

//     if (element >= 0 && element <= 9) {
//       count++;
//     }

//     // // // 2-usul: isNaN
//     // if (!isNaN(Number(element))) {
//     //   count++;
//     // }
//   }

//   return count;
// }

// const result = integerFromString("ad2a54y79wet0sfgb9");
// console.log(result);

// // // ------------------------------------------------> A TASK <------------------------------------------------
// /* A-TASK:
//     Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni
//     ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.

//     MASALAN countLetter("e", "engineer") 3ni return qiladi.
// */

// // // Simple solution:
// function countLetter1(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (letter === word[i]) count++;
//   }

//   return count;
// }
// const result1 = countLetter1("e", "engineer");
// console.log("Simple Solution Result:", result1);

// // // Optiised solution:
// function countLetter2(letter, word) {
//   let count = 0;

//   for (let char of word) {
//     if (letter === char) count++;
//   }

//   return count;
// }
// const result2 = countLetter2("e", "engineer");
// console.log("Optimised Solution Result:", result2);
