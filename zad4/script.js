function toggleTheme() {
    let themeLink = document.getElementById("theme-style");
    if (themeLink.getAttribute("href") === "red.css") {
        themeLink.setAttribute("href", "green.css");
    } else {
        themeLink.setAttribute("href", "red.css");
    }
}

function toggleSection() {
    let section = document.getElementById("sekcja-doswiadczenie");
    let button = document.getElementById("btn-ukryj");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "👁️ Ukryj Doświadczenie"; 
    } 
    else {
        section.style.display = "none";
        button.innerText = "👁️ Pokaż Doświadczenie"; 
    }
}
