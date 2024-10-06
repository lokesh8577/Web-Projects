let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
let month = a.getMonth();
let year = a.getFullYear();
year = year.toString();
year = year.slice(2);
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
// setInterval(clock, 1000);
// function clock() {
//   one.innerHTML = `<h1>${h}</h1>`;
//   two.innerHTML = `<h1>${m}</h1>`;
//   three.innerHTML = `<h1>${s}</h1>`;
//   four.innerHTML = `<h1>${d}</h1>`;
//   five.innerHTML = `<h1>${month + 1}</h1>`;
//   six.innerHTML = `<h1>${year}</h1>`;
// }
// setInterval(() => {
//   one.innerHTML = `<h1>${h}</h1>`;
//   two.innerHTML = `<h1>${m}</h1>`;
//   three.innerHTML = `<h1>${s}</h1>`;
//   four.innerHTML = `<h1>${d}</h1>`;
//   five.innerHTML = `<h1>${month + 1}</h1>`;
//   six.innerHTML = `<h1>${year}</h1>`;
// }, 1000);
// setInterval(function () {
//   one.innerHTML = `<h1>${h}</h1>`;
//   two.innerHTML = `<h1>${m}</h1>`;
//   three.innerHTML = `<h1>${s}</h1>`;
//   four.innerHTML = `<h1>${d}</h1>`;
//   five.innerHTML = `<h1>${month + 1}</h1>`;
//   six.innerHTML = `<h1>${year}</h1>`;
// }, 100);
setInterval(() => {
  one.innerHTML = `<h1>${h}</h1>`;
  two.innerHTML = `<h1>${m}</h1>`;
  three.innerHTML = `<h1>${s}</h1>`;
  four.innerHTML = `<h1>${d}</h1>`;
  five.innerHTML = `<h1>${month + 1}</h1>`;
  six.innerHTML = `<h1>${year}</h1>`;
}, 1000);
