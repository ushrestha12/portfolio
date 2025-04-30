document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    if (hamburger && navMenu) {
        // Toggle menu when clicking the hamburger button
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the menu from closing immediately
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking a menu link
        document.querySelectorAll(".nav-links li a").forEach((link) => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }
});

