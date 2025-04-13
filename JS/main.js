let nav = document.getElementById("navbar");

function Traverse() {
  if (window.scrollY >= 150) {
    nav.classList.remove("bg-transparent");
    nav.style.cssText = "background-color: black";
  } else {
    nav.style.cssText = "background-color: transparent";
  }
}

///////////////////////////////////////////////////////////////////////////////

let nums = document.querySelectorAll("#number");
let section = document.getElementById("numbersSection");
let started = false;

window.onscroll = function () {
  Traverse();
  if (window.scrollY >= section.offsetTop - 700) {
    if (!started) {
      nums.forEach((num) => countUp(num));
    }
    started = true;
  }
};

function countUp(el) {
  var goal = el.dataset.goal;
  var count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10);
}
