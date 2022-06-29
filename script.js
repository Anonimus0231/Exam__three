//================CLASIC MODAL WINDOW================================================
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

// ===========================MODAL WINDOW FOR IMG==============================

const boxPlus = document.querySelectorAll(".box__plus");
const arrPlus = Array.from(boxPlus);
const modaltwo = document.querySelector(".modal__two")
const modalImg = document.querySelector(".modal__img")
const boxImg = document.querySelectorAll(".box__img")
const boxImgs = Array.from(boxImg)

modaltwo.addEventListener("mouseup", function(event) {
  if (!modalImg.contains(event.target)) {
    modaltwo.style.display = "none";
  }
});

for(let i = 0; i <= boxImgs.length; i++){
    const item = +i ;
    arrPlus[item].addEventListener("click", function() {
        modaltwo.style.display = "block";
        modalImg.src = boxImgs[item].src
    }
)}

// ----------------CLOSE MODAL WINDOW, ESC------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
  modaltwo.style.display = "none";
  modal.style.display = "none";
  }
});