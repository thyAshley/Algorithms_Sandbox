let btn = document.getElementById("btn");

function debounce(timer, func) {
  let timeout;
  return function () {
    if (timeout) {
      clearInterval(timeout);
    }
    timeout = setTimeout(() => {
      func();
    }, timer);
  };
}

btn.addEventListener(
  "click",
  debounce(1000, () => console.log("click debounce"))
);
