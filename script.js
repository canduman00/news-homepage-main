const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".primary-navigation");
const modal = document.querySelector(".modal");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    modal.classList.toggle("active");
})

document.querySelectorAll(".nav-list > li > a").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    modal.classList.remove("active");
}))

modal.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    modal.classList.remove("active");
})