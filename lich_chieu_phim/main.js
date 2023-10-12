/* bật tắt modal login */
const loginBtns = document.querySelectorAll('.js-login')
const modalLogin = document.querySelector('.modal-login-container')
const modalLoginContainer = document.querySelector('.modal-main-form-container')

var index=0;
        changeImage = function(){
            var imgs=["./images/img8.jpg","images/img9.jpg","images/img10.jpg","images/img11.jpg","images/img12.jpg"];
            document.getElementById('img').src=imgs[index];
            index++;
            if(index==5)
            {
                index=0;
            }
        }
        setInterval(changeImage,1100);


function showLogin() {
    modalLogin.classList.add('open')
}

function hideLogin() {
    modalLogin.classList.remove('open')
}

for (const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showLogin)
}

modalLogin.addEventListener('click', hideLogin)
modalLoginContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
const inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.add("modal-login-box-animation");
  });
  // trạng thái focus mà bị mất focus
  input.addEventListener("blur", function () {
    const parentElement = input.parentElement.parentElement;
    parentElement.classList.remove("modal-login-box-animation");
  });
});

const buttons = document.querySelectorAll("#modal-multiple-btn button");
const form_container = document.getElementById('modal-form_section')
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // left-right sẽ đc thêm vào thẻ có id modal-form_section nếu chưa có 
        // nếu đã tồn tại thì sẽ đc xóa đi
        form_container.classList.toggle("left-right");
    });
});
const chonghe=document.querySelector('.chonghe');

const i=document.querySelector('.button1');

i.addEventListener('click',()=>{
    chonghe.classList.add('active');
});
function showTable() {
    var table = document.getElementById("chonGhe");
    table.style.display = "flex";
};
function out(){
    var table = document.getElementById("chonGhe");
    table.style.display = "none";
};
function Info(){
    var table = document.getElementById("gtphimmoi");
    table.style.display = "flex";   
};
function out2(){
    var table = document.getElementById("gtphimmoi");
    table.style.display = "none";
};
function tbao(id){
    alert("Bạn đã đặt ghế thành công.");
};
function showinfphimhot(){
    var table = document.getElementById("in4about");
    table.style.display = "flex";
}