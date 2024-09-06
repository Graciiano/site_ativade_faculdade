const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

function expandir(value) {
    const card = document.querySelector('#t'+value);
    card.classList.toggle('hover-effect');

  

    const pizza = document.querySelector('#p' + value);
    if (pizza) {
        if (pizza.style.display === 'block') {
            pizza.style.display = 'none'; 
        } else {
            pizza.style.display = 'block';
        }
    }
}



