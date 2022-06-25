const btn = document.querySelector(".myInfo__btn");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalBtn = document.querySelector(".modal__btn");
const modalInput = document.querySelector(".modal__inputs");

modal.addEventListener("mouseup", function(event) {
    if (!modalContainer.contains(event.target)) {
        modal.style.display = "none";
    }
});

btn.addEventListener("click", function() {
    modal.style.display = "block";
});


modalInput.addEventListener("change", function(e){
    console.log(e.target.value)
})