// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// document.addEventListener("contextmenu", (event) => event.preventDefault());

// document.addEventListener("selectstart", (event) => event.preventDefault());

// document.addEventListener("keydown", function (event) {
//   if (
//     event.ctrlKey &&
//     (event.key === "a" ||
//       event.key === "s" ||
//       event.key === "u" ||
//       event.key === "i" ||
//       event.key === "j" ||
//       event.key === "-" ||
//       event.key === "+" ||
//       event.key === "=")
//   ) {
//     event.preventDefault();
//   }
// });

// document.onkeydown = function (e) {
//   if (e.keyCode === 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
//     return false;
//   }
// };

// document.addEventListener("gesturestart", function (e) {
//   e.preventDefault();
// });

// let lastTouchEnd = 0;
// document.addEventListener(
//   "touchend",
//   function (event) {
//     const now = new Date().getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
//   },
//   false
// );

// document.addEventListener(
//   "wheel",
//   function (event) {
//     if (event.ctrlKey) {
//       event.preventDefault();
//     }
//   },
//   { passive: false }
// );
