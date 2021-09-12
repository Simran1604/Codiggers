let x = document.getElementById("time");
let y = document.getElementById("tableBtn");

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.innerHTML = "Hide Schedule";
    } else {
      x.style.display = "none";
      y.innerHTML = "Show Schedule";
    }
  }

  y.addEventListener("click", myFunction);
