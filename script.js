const text = ["Software Developer", "AI Enthusiast", "Future Tech Builder"];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hide");
    }, 1200);

});

const navLinks2 = document.querySelectorAll("nav a");
const lightTransition = document.getElementById("light-transition");

navLinks2.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");

        // Show transition
        lightTransition.classList.add("active");

        // Scroll after small delay
        setTimeout(() => {

            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });

        }, 200);

        // Hide transition safely
        setTimeout(() => {

            lightTransition.classList.remove("active");

        }, 600);

    });

});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 50;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


const sectionsNav = document.querySelectorAll("section");
const navLinksActive = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sectionsNav.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }

    });

    navLinksActive.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const circles = document.querySelectorAll(".circle");

function animateCircles() {

    circles.forEach(circle => {

        const percent = circle.getAttribute("data-percent");
        const progressCircle = circle.querySelectorAll("circle")[1];

        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset =
            circumference - (percent / 100) * circumference;

    });

}

window.addEventListener("load", animateCircles);



const skillBars = document.querySelectorAll(".progress-bar span");

function animateSkills() {

    skillBars.forEach(bar => {

        const value = bar.getAttribute("data-width");
        bar.style.width = value;

    });

}

window.addEventListener("scroll", animateSkills);


window.addEventListener("scroll", animateSkills);


window.addEventListener("scroll", animateSkills);


function typeEffect() {

    if (index === text.length) {
        index = 0;
    }

    if (!isDeleting && charIndex <= text[index].length) {
        currentText = text[index].substring(0, charIndex);
        charIndex++;
    }

    if (isDeleting && charIndex >= 0) {
        currentText = text[index].substring(0, charIndex);
        charIndex--;
    }

    if (charIndex === text[index].length) {
        isDeleting = true;
        setTimeout(() => {}, 1000);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    document.getElementById("typing-text").textContent = currentText;

    setTimeout(typeEffect, 120);
}

typeEffect();
 
window.addEventListener("scroll", function () {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
 
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


window.addEventListener("scroll", revealSections);

// PAGE LOAD PAR BHI CALL
window.addEventListener("load", revealSections);


const filterBtns = document.querySelectorAll(".cert-filter button");
const certCards = document.querySelectorAll(".cert-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const category = btn.dataset.filter;

        certCards.forEach(card => {

            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

function showSuccess() {

const popup = document.getElementById("success-popup");

popup.style.display = "block";

setTimeout(() => {
popup.style.display = "none";
}, 3000);

}

document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("theme-toggle");

    if (!toggleBtn) {
        console.log("Toggle button not found");
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        toggleBtn.innerHTML = "☀️";
    }

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            toggleBtn.innerHTML = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.innerHTML = "🌙";
            localStorage.setItem("theme", "light");
        }

    });

});


 
const visionCounters = document.querySelectorAll(".vision-counter");

visionCounters.forEach(counter => {

    const updateVisionCount = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const speed = 60;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateVisionCount, 25);
        } else {
            counter.innerText = target;
        }
    };

    updateVisionCount();
});


const tabBtns = document.querySelectorAll(".tab-btn");
const skillCards = document.querySelectorAll(".skill-card");

tabBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        skillCards.forEach(card => {

            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const skillReveal = document.querySelectorAll(".skill-card");

function revealSkills() {

    skillReveal.forEach(card => {

        const top = card.getBoundingClientRect().top;
        const trigger = window.innerHeight - 50;

        if (top < trigger) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSkills);


document.addEventListener("DOMContentLoaded", function () {

    const skillBars = document.querySelectorAll(".progress-bar span");

    if (skillBars.length === 0) {
        console.log("No skill bars found");
        return;
    }

    let skillsAnimated = false;

    function animateSkills() {

        if (skillsAnimated) return;
        skillsAnimated = true;

        skillBars.forEach(bar => {

            const target = parseInt(bar.getAttribute("data-target"));
            let width = 0;

            const interval = setInterval(() => {

                if (width >= target) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                    bar.textContent = width + "%";
                }

            }, 15);

        });

    }

    // Run once page loads
    animateSkills();

});

document.addEventListener("DOMContentLoaded", function () {

    const skillBars = document.querySelectorAll(".progress-bar span");

    let skillsAnimated = false;

    function animateSkills() {

        if (skillsAnimated) return;
        skillsAnimated = true;

        skillBars.forEach(bar => {

            const target = parseInt(bar.getAttribute("data-target"));
            let width = 0;

            const interval = setInterval(() => {

                if (width >= target) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                }

            }, 15);

        });

    }

    animateSkills();

});


const skillCircles = document.querySelectorAll(".circle");

skillCircles.forEach(circle => {

    circle.addEventListener("click", () => {
        circle.classList.toggle("show-tip");
    });

});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", revealEffect);

function revealEffect() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}
