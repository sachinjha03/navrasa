let navLogo = document.getElementById("navLogo")
let navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
          navbar.style.backgroundColor = "white";
          navLogo.style.filter = "invert(0%)";
        } else {
          navbar.style.backgroundColor = "transparent";
          navLogo.style.filter = "invert(100%)";
        }
      });