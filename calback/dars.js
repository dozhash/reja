const list = [
  "Yaxshi talaba bo'ling!", // 20
  "To'gri boshliq tanlang va koproq hato qiling!", // 20-30
  "O'zingizga ishlashni boshlang!", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
  "Yoshlarga investitsiya qiling!", // 50-60
  "Endi dam oling, foydasi yo'q!", // 60
];

function giveAdvice(age, callback) {
  if (typeof age !== "number") callback("Iltimos raqam yozing", null);
  else if (age <= 20) callback(null, list[0]);
  else if (age > 20 && age <= 30) callback(null, list[1]);
  else if (age > 30 && age <= 40) callback(null, list[2]);
  else if (age > 40 && age <= 50) callback(null, list[3]);
  else if (age > 50 && age <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

giveAdvice(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("Javob:", data);
  }
});
