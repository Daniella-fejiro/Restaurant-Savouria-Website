const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
    nav.classList.toggle("show")
})
const tabs = document.querySelectorAll(".tab");
const menugroups = document.querySelectorAll(".menugroup");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        menugroups.forEach( group => {
            group.classList.remove("active");
        });

        const category = tab.dataset.category;
        document.getElementById(category).classList.add("active");
    });
});