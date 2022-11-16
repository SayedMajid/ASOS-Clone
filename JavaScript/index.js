document.querySelector("#homePage").addEventListener("click", myFunction);
function myFunction() {
  event.preventDefault();
  window.location.href = "index.html";
}

document.querySelector(".men").addEventListener("click", () => {
  window.location.href = "/HTML/mensClothing.html"
});

document.querySelector(".icon3").addEventListener("click", bagFn);
function bagFn() {
  event.preventDefault();
  window.location.href = "bag.html";
}

