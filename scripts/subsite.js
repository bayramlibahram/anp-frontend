﻿

document.addEventListener("DOMContentLoaded", function () {

    let toogleIcon      = document.getElementById("subnavtoggle");
    let subsideBottom   = document.getElementById("subsidebottom");

    toogleIcon.addEventListener("click", function () {
        subsideBottom.classList.toggle("submob-active");
       
    });


});

function changeLayout(content, side) {

    let contentSide = document.getElementById(content.Id);
    contentSide.className = content.className;

    let rightSide = document.getElementById(side.Id);
    console.log(rightSide);
    rightSide.className = side.className;


}

