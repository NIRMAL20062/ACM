// add js events for scrolling bar progress 
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

// Scroll Reveal
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = 0.5;
            section.style.transform = "translateY(20px)";
        }
    });
});

// Highlight Active Link
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Event Carousel (Dynamic)
const eventList = ["Hackathon", "CodeFest", "AI Workshop"];
const eventsSection = document.querySelector(".events-section ul");

setInterval(() => {
    const nextEvent = eventList.shift();
    const li = document.createElement("li");
    li.textContent = nextEvent;
    li.className = "event-item";
    eventList.push(nextEvent);
    eventsSection.appendChild(li);
    if (eventsSection.childElementCount > 3) {
        eventsSection.removeChild(eventsSection.firstElementChild);
    }
}, 3000);


