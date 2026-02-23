document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Loaded Successfully");

    // Smooth scroll effect
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff4fa3";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "";
        });
    });

});