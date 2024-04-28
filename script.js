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

      let i=1;
      function plusOne(){
        if(i<3){
          i=i+1;
          console.log(document.getElementById(`${i}`));
          document.getElementById(`${i}`).style.transform = `translateX(100%)`;
          console.log(i);
        }
        else{
          i=0;
          document.getElementById(`${i}`).style.transform = `translateX(0%)`;
        }
      }