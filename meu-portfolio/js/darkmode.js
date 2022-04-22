const btnDarkMode = document.getElementById("theme");

function toggleMenu(){
    const main = document.getElementById("dark-main");
    const curriculum = document.getElementById("dark-curriculum");
    curriculum.classList.toggle("dark-curriculum");
    main.classList.toggle("dark")
}

btnDarkMode.addEventListener("click", toggleMenu);