let btn = document.getElementById("btn");

function throttle(timer, func) {
  let last = 0;
  return function () {
    console.log(last);
    const now = new Date().getTime();
    if (now - last < timer) {
      return;
    }
    last = now;
    return func();
  };
}

btn.addEventListener(
  "click",
  throttle(1000, () => console.log("click debounce 1"))
);
