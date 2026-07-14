// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all 0.8s ease";
    observer.observe(section);
});

// Card animation
document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-10px) scale(1.05)";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0) scale(1)";
    });
});

// Typing Effect
const text = "MBA (HR) | Talent Acquisition | HR Operations";
const typing = document.querySelector(".hero h3");

if (typing) {
    typing.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    type();
}

// Scroll to Top Button
const btn = document.createElement("button");
btn.innerHTML = "↑";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.width = "45px";
btn.style.height = "45px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#2563eb";
btn.style.color = "#fff";
btn.style.fontSize = "20px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} J.L. Jasin | HR Portfolio`;
}