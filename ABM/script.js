window.onload = function () {
    const bubbles = document.getElementById("bubbles");
    for (let i = 0; i < 30; i++) {
      const b = document.createElement("div");
      b.classList.add("bubble");
      b.style.width = b.style.height = Math.random() * 40 + 10 + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = Math.random() * 5 + 4 + "s";
      b.style.animationDelay = Math.random() * 3 + "s";
      bubbles.appendChild(b);
    }
  };
  