// khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// khai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* bật tắt nút mua vé */
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalBox = document.querySelector('.js-modal--box')
const modalContainer = document.querySelector('.js-modal--container')
const modalClose = document.querySelector('.js-modal--close')

function showBuyTickets() {
    modalBox.classList.add('open')
}

function hideBuyTickets() {
    modalBox.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)
modalBox.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

/* btn like comment*/ 
const likeBtns = document.querySelectorAll(".comment-like__btn");

function toggleLike(event) {
    const likeIcon = event.currentTarget.querySelector(".icon");
    const count = event.currentTarget.querySelector(".count");

    if (likeIcon.classList.contains("far")) {
        likeIcon.classList.remove("far");
        likeIcon.classList.add("fas");
        count.textContent = parseInt(count.textContent) + 1;
    } else {
        likeIcon.classList.remove("fas");
        likeIcon.classList.add("far");
        count.textContent = parseInt(count.textContent) - 1;
    }
}

for (const likeBtn of likeBtns) {
    likeBtn.addEventListener("click", toggleLike);
}

/* Modal login */
const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.add("modal-login-box-animation");
  });
  input.addEventListener("blur", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.remove("modal-login-box-animation");
  });
});

const buttons = document.querySelectorAll("#modal-multiple-btn button");
const form_container = document.getElementById('modal-form_section')
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        form_container.classList.toggle("left-right");
    });
});

/* bật tắt modal login */
const loginBtns = document.querySelectorAll('.js-login')
const modalLogin = document.querySelector('.modal-login-container')
const modalLoginContainer = document.querySelector('.modal-main-form-container')


function showBuyTickets() {
    modalLogin.classList.add('open')
}

function hideBuyTickets() {
    modalLogin.classList.remove('open')
}

for (const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showBuyTickets)
}

modalLogin.addEventListener('click', hideBuyTickets)
modalLoginContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})