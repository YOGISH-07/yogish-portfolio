// Mobile Navigation
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.onclick = function () {
    navLinks.classList.toggle("show");
};


// Dark / Light Mode
const themeButton = document.getElementById("theme-btn");

themeButton.onclick = function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
};


// Close mobile menu after clicking a link
const links = document.querySelectorAll("#nav-links a");

links.forEach(function (link) {
    link.onclick = function () {
        navLinks.classList.remove("show");
    };
});


// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("visible");
        }

    });

});


// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();
};