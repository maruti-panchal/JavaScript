// setInterval() :- it will continiously execute setInterval method in given time.

// console.log("Hey ");
// setInterval(() => {
//   console.log("Drink your water.");
// }, 2000);
// console.log("Bye");
// console.log("Good night");

const body = document.body;
const button = document.querySelector("button");
const id = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green},${blue})`;
  console.log(rgb);
  body.style.background = rgb;
}, 1000);
button.addEventListener("click", () => {
  clearInterval(id);
  button.textContent = body.style.background;
});
