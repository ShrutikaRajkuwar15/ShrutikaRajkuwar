document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            document.getElementById("navbar_top").classList.add("fixed-top");

            navbar_height = document.querySelector(".navbar").offsetHeight;
            document.body.style.paddingTop = navbar_height + "px";
        } else {
            document.getElementById("navbar_top").classList.remove("fixed-top");

            document.body.style.paddingTop = "0";
        }
    });
});

AOS.init();


const text = "Web Developer";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed by changing the delay (in milliseconds)
    }
}

type();
