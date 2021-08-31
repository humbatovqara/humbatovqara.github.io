const currentYear = document.querySelector(".currentYear");
const myAge = document.querySelector(".myAge");

window.addEventListener('DOMContentLoaded', function () {
    getCurrentYear();
    getMyAge();
});

// Cari tarixin ilini verən funksiya
function getCurrentYear() {
    let year = new Date();
    currentYear.textContent = year.getFullYear();
}

// Yaşımı göstərən funksiya
function getMyAge() {
    let current = new Date();
    let myBD = new Date('2000, 07, 23');
    let differTime = Math.abs(current - myBD);
    let differFullTime = Math.ceil(differTime / (1000 * 60 * 60 * 24 * 365.25) - 1); 

    myAge.textContent = differFullTime;
};