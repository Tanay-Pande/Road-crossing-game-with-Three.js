import { queueMove } from "./components/Player";
// import { keepCollecting } from "./utilities/global";
import { globalState } from "./utilities/global";

document
  .getElementById("forward")
  ?.addEventListener("click", () => queueMove("forward"));

document
  .getElementById("backward")
  ?.addEventListener("click", () => queueMove("backward"));

document
  .getElementById("left")
  ?.addEventListener("click", () => queueMove("left"));

document
  .getElementById("right")
  ?.addEventListener("click", () => queueMove("right"));

window.addEventListener("keydown", (event) => {

  let test= globalState.keepCollecting;

  console.log("Pressed: "+test)
  if(test) {
    if (event.key === "ArrowUp") {
    event.preventDefault(); // Avoid scrolling the page
    queueMove("forward");
  } else if (event.key === "ArrowDown") {
    event.preventDefault(); // Avoid scrolling the page
    queueMove("backward");
  }
   else if (event.key === "ArrowLeft") {
    event.preventDefault(); // Avoid scrolling the page
    queueMove("left");
  } else if (event.key === "ArrowRight") {
    event.preventDefault(); // Avoid scrolling the page
    queueMove("right");
  }
  }
});