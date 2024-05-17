$(document).ready(function() {
    // Bootstrap dropdown initialization
    $('.dropdown-toggle').dropdown();
});

function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See Less";
        moreText.style.display = "inline";
    }
}
