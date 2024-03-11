const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
    paginationCircles[currentSlideIndex].classList.add("active");
}

function hideSlide() {
    paginationCircles[currentSlideIndex].classList.remove("active");
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    currentSlideIndex = slideIndex;
    showSlide();
    checkArrows();
}

function checkArrows() {
    arrowRight.style.visibility = "visible";
    arrowLeft.style.visibility = "visible";
    if (currentSlideIndex == 0) {
        arrowLeft.style.visibility = "hidden"
    } else if (currentSlideIndex == slides.length - 1) {
        arrowRight.style.visibility = "hidden"
    }
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
checkArrows();