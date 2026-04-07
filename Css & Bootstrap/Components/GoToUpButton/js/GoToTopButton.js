window.addEventListener("scroll", scrollFunction);
let upBtnArrow = document.querySelector('.up-btn');
upBtnArrow.addEventListener("click", arrowUpClick);
function scrollFunction() {


    if (window.scrollY > 20) {

        upBtnArrow.classList.add("up-btn_show");
    }
    else if (window.scrollY < 20) {
        upBtnArrow.classList.remove("up-btn_show");
    }
}

function arrowUpClick() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}