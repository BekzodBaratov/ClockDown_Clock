const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const btn = document.querySelector(".btn");

function time(getTime) {
  let date;
  setInterval(() => {
    if (getTime !== -367200000) {
      getTime = getTime - 1000;
    }
    date = new Date(getTime);
    card1.value = date.getDay();
    card2.value = date.getHours();
    card3.value = date.getMinutes();
    card4.value = date.getSeconds();
  }, 1000);
}

btn.addEventListener("click", () => {
  let getTime =
    Number(card1.value) * 24 * 60 * 60 * 1000 +
    Number(card2.value) * 60 * 60 * 1000 +
    Number(card3.value) * 60 * 1000 +
    Number(card4.value) * 1000 -
    4 * 24 * 60 * 60 * 1000 -
    6 * 60 * 60 * 1000;

  time(getTime);
});
