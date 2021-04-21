"use script";
document.addEventListener("DOMContentLoaded", () => {
    try {
        window.onscroll = function () {
            myFunction();
        };

        let header = document.getElementById("stickcase");
        let sticky = header.offsetTop;
        let navigation = document.getElementById("navigation");

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                navigation.style.justifyContent = "center";
            } else {
                header.classList.remove("sticky");
                navigation.style.justifyContent = "center";
            }
        }
    } catch  {}
 
});
