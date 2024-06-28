// window.addEventListener('load', function(){
//     const preload = document.querySelector('.preload');
//     preload.classList.add("preload-finish");
// });


document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    // id это id, selector это class
    const closeModalBtn = document.querySelector(".close");
    
    openModalBtn.addEventListener("click", function(){
    modal.style.display = "block";
    });
    
    closeModalBtn.addEventListener("click", function(){
        modal.style.display = "none";
        });
    
        // нажимаешь на любое место на экране и форма закрывается
    window.addEventListener("click", function(event){
    if (event.target == modal){
        modal.style.display = "none";
    };
    });
    
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        // за счет этой функции делаем не как обычно
        event.preventDefault();
        alert("Molodets");
        // закрываем модальное окно после отправки
        modal.style.display = "none";
        // сбрасываем содержание формы
        form.reset(); 
    });



let ogromniy = document.queryselector(".ogromniy")
let texti = document.querySelector(".texti")
text.addeventListener("mouseover", (e) => {
ogromniy.style.opacity="0";
text.addeventListener("mouseleave", (e) => {
ogromniy.style.opacity="1";
});

    });
});