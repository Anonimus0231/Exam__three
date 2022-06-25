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

const boxPlus = document.querySelectorAll(".box__plus");
const arrPlus = Array.from(boxPlus);
const modaltwo = document.querySelector(".modal__two")
const modalImg = document.querySelector(".modal__img")
const objImgs = [
    {
        src: "./asset/portfolio__img-1.png",
    },
    {
        src: "./asset/portfolio__img-2.png",
    },
    {
        src: "./asset/portfolio__img-3.png",
    },
    {
        src: "./asset/portfolio__img-4.png",
    },
    {
        src: "./asset/portfolio__img-5.png",
    },
    {
        src: "./asset/portfolio__img-6.png",
    },
    {
        src: "./asset/portfolio__img-7.png",
    },
    {
        src: "./asset/sorry.jpg",
    },
];

modaltwo.addEventListener("mouseup", function(event) {
    if (!modalImg.contains(event.target)) {
        modaltwo.style.display = "none";
    }
});

for(let i = 0; i <= objImgs.length; i++){
    +i ;
    arrPlus[i].addEventListener("click", function() {
        modaltwo.style.display = "block";
        modalImg.src = objImgs[i].src
    })
}