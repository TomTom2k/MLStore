// chuyển đổi trong login và signup
let x = document.getElementById("login"),
y = document.getElementById("sign-up");

const toggleBtn = document.querySelector(".toggle-btn")

function login() {
    x.style.left = '0';
    y.style.left = '40rem';
    toggleBtn.querySelector(".login").classList.add("active");
    toggleBtn.querySelector(".sign-up").classList.remove("active");

}

function signUp() {
    x.style.left = '-40rem';
    y.style.left = '0';
    toggleBtn.querySelector(".login").classList.remove("active");
    toggleBtn.querySelector(".sign-up").classList.add("active");
}


// Validator
function Validator(options) {
    let selectorRules = {};


    // hàm xử lí xem có input có hợp lệ hay không 
    function validate(inputElement, rule) {
        let errorMessage;
        let errorElement = inputElement.parentElement.querySelector(".message");
        

        let rules = selectorRules[rule.selector];
        
        // lặp qua từng rule
        for(let i = 0; i < rules.length; ++i) {
            errorMessage =rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('error');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('error');
        }

        return errorMessage;
    }

    





    // hàm xử lí từng rule xem có hợp lệ hay không
    let formElement = document.querySelector(options.form);

    if(formElement) {

        // nhấp nút submit
        let btnSubmit = formElement.querySelector(".submit-btn");
        btnSubmit.onclick = (e) => {
            let isValid = true;

            options.rules.forEach(function (rule) {
                let inputElement = formElement.querySelector(rule.selector);
                console.log(validate(inputElement, rule));
                if(validate(inputElement, rule)) {
                    isValid = false;
                }
            })
            
            if(!isValid) {
                e.preventDefault();
            }
        }


        options.rules.forEach((rule) => {
            let inputElement = formElement.querySelector(rule.selector);
            let errorElement = inputElement.parentElement.querySelector(".message");

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            if(inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }
                inputElement.oninput = () => {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('error');
                }
            }
        });
    }
}

// kiểm tra có bỏ trống hay không
Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: function(value) {
            return (value) ? undefined : 'Không được bỏ trống';
        },
    }
}

// kiểm tra có phải email
Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: function(value) {
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return res.test(value) ? undefined : 'Đây không phải là email';
        },
    }
}

//Kiểm tra có dủ độ dài hay không
Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: function(value) {
            return (value.length >= min) ? undefined : `Không đủ ${min} kí tự`; 
        },
    }
}

// Kiểm tra giá trị 
Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: function(value) {
            return (value ===  getConfirmValue() ) ? undefined : `${message} không đúng`;
        }
    }
}




