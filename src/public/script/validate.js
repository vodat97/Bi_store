
function Validator(options) {

    function getParent (selector, element) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {

            }
        }
    }

    function removeIsValid (inputElement) {
        var errorElement = inputElement.parentElement.querySelector(options.errorMessage);
        errorElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
    }
    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorMessage);
        var errorMessage;
        //lấy ra các rule ứng với selector
        var rules = selectorRules[rule.selector];
        //lặp qua từng rule và check error và nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);//tương đương với test(inputElement.value)
            if(errorMessage) break;
        }
        if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);
    if(formElement) {
        //submit form
        formElement.onsubmit = function (event) {
            event.preventDefault();
            

            //lặp qua các rule và kiểm tra error
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement,rule);
            })
        }
        options.rules.forEach(function (rule) {

            //Lưu lại các rule vào mảng
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement,rule);
                }
                inputElement.oninput = function () {
                    removeIsValid(inputElement);
                }
                inputElement.onchange = function () {
                    validate(inputElement,rule);
                }
            }
        });
    }
    //console.log(selectorRules)
}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector, message) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return {
        selector: selector,
        test: function (value) {
            return regexEmail.test(value) ? undefined : message || 'Vui lòng nhập Email';
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= 6 ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmPassword = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Mật khẩu không trùng khớp';
        }
    }
}