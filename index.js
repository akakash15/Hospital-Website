let a = document.getElementById("snav");

function demo() {
    if (a.style.left === "0%") {
        a.style = "left:100%; transition: all 2s;";
    } else {
        a.style = "left:0%; transition: all 2s;";
    }
}
