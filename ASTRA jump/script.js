const astra = document.getElementById("astra");
const rocket = document.getElementById("rocket");

function jump() {
  if (astra.classList != "jump") {
    astra.classList.add("jump");

    setTimeout(function () {
      astra.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current astra Y position
  let astraTop = parseInt(window.getComputedStyle(astra).getPropertyValue("top"));

  // get current rocket X position
  let rocketLeft = parseInt(
    window.getComputedStyle(rocket).getPropertyValue("left")
  );

  // detect collision
  if (rocketLeft < 50 && rocketLeft > 0 && astraTop >= 140) {
    // collision
    alert("Przegrales beka z cb!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});