const clock = document.querySelector("#clock");
const button = document.querySelector("#testButton");
const message = document.querySelector("#message");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("fr-FR");
}

updateClock();
setInterval(updateClock, 1000);

button.addEventListener("click", () => {
  message.textContent = "JavaScript fonctionne aussi ✅";
});
