const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];
const random = Math.floor(Math.random() * fortunes.length);
console.log("今日の運勢は...");
console.log(fortunes[random]);