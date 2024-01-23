/* bật tắt modal login */
const loginBtns = document.querySelectorAll('.js-login')
const modalLogin = document.querySelector('.modal-login-container')
const modalLoginContainer = document.querySelector('.modal-main-form-container')


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

/* Modal login */
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


function validate_null(e) {
  if(e.value.length == 0) {
      return true;
  }
  return false;
}

function validate_num(e) {
  let n = e.value;
  if (isNaN(parseInt(n))) return true;
  return false;
}

function validate_email(e) {
  var check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
  if (!check_email.test(e.value)) {
      return true;
  }
  return false
}




document.body.onload = 
  () => {
      const submit = document.getElementById('submit');
      //  Đặt thuộc tính type của nút submit thành "button", giúp ngăn trình duyệt tự động thực hiện hành động submit mặc định của form khi nút này được click.
      submit.setAttribute('type', 'button'); 
      submit.onclick = 
          () => {
              if(validate_null(document.getElementById('name'))) {
                  alert('Full Name bị bỏ trống')
                  return;
              }
              if(validate_null(document.getElementById('email'))) {
                  alert('Email bị bỏ trống')
                  return;
              }
              if(validate_null(document.getElementById('password'))) {
                  alert('Password bị bỏ trống')
                  return;
              }

              if(validate_num(document.getElementById("phonenumber"))) {
                  alert("Phone Number phải là một số")
                  return;
              }

              if (validate_email(document.getElementById("email"))) {
                  alert("Email không đúng định dạng")
                  return;
              }
              location.reload()
          }
  }

document.body.onload = 
  () => {
      const submit2 = document.getElementById('submit2');
      //  Đặt thuộc tính type của nút submit thành "button", giúp ngăn trình duyệt tự động thực hiện hành động submit mặc định của form khi nút này được click.
      submit2.setAttribute('type', 'button'); 
      submit2.onclick = 
          () => {

              if(validate_null(document.getElementById('email2'))) {
                  alert('Email bị bỏ trống')
                  return;
              }

              if (validate_email(document.getElementById("email2"))) {
                  alert("Email không đúng định dạng")
                  return;
              }
              if(validate_null(document.getElementById('password2'))) {
                  alert('Password bị bỏ trống')
                  return;
              }
              location.reload()
          }
  }