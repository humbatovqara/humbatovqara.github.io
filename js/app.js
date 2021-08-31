var x = document.querySelector("main");
var y = document.querySelector("section");
var i = document.getElementById("exitmap");

function myFunction() {
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        i.style.display = "block";

        x.style.display = "flex";
        x.style.justifyContent = "center";
        x.style.alignItems = "center";
    }
}

function myFunction2() {
    if (y.style.display == "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}