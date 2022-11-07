const ratingContainer = document.querySelector(".rating-card");
const thankContainer = document.querySelector(".thank-you-card");
const submitBtn = document.querySelector("#submit-rating");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.querySelector("#rating");

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        // actualRating.innerHTML = `You selected ${rating.innerHTML} out of 5`
        actualRating.innerHTML =rating.innerHTML;
    })
})

submitBtn.addEventListener("click", () => {
    ratingContainer.style.display = "none";
    thankContainer.classList.remove("hidden")
})