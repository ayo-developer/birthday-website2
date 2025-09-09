// 🎵 Music Button (Online song)
const musicBtn = document.getElementById("musicBtn");
let audio = new Audio("Simi-Happy-Birthday-Ft-Adekunle-Gold-And-DeJa-(TrendyBeatz.com).mp3");

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        audio.pause();
        musicBtn.textContent = "🎵 Play Birthday Song";
    }
});

// 📸 Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}
setInterval(showSlides, 3000); // change image every 3s

// 💌 Popup
window.onload = function () {
    document.getElementById("popup").style.display = "flex";
};
document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});

// 📝 Guest Book (localStorage)
const wishForm = document.getElementById("wishForm");
const wishesList = document.getElementById("wishesList");
let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

function displayWishes() {
    wishesList.innerHTML = "";
    wishes.forEach(wish => {
        const div = document.createElement("div");
        div.className = "wish";
        div.innerHTML = `<strong>${wish.name}:</strong> ${wish.message}`;
        wishesList.appendChild(div);
    });
}

wishForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    wishes.push({ name, message });
    localStorage.setItem("wishes", JSON.stringify(wishes));
    wishForm.reset();
    displayWishes();
});

displayWishes();
