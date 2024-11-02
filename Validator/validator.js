//đối tượng - constructor function mở rộng 
function Validator(option) 
{ 

    var selectorRules = {}; 
    function validate(inputElement,rule) //thực hiện gán các function 
    {
        var testList = selectorRules[rule.selector]; 
        var errorMessage; //thông báo lỗi 
        var errorElement = inputElement.parentElement.querySelector('.form-message'); 
        for (let i = 0; i < testList.length; ++i) {
            errorMessage = testList[i](inputElement.value); 
            if (errorMessage) break; 
        }
        if (errorMessage) 
        {
            errorElement.innerText = errorMessage; 
            inputElement.parentElement.classList.add('invalid'); 
        } 
        else 
        {
            errorElement.innerText = ''; 
            inputElement.parentElement.classList.remove('invalid'); 
        } 
        return !!errorElement; //chuyển đổi gia trị sang boolean 
    }
    var formElement = document.querySelector(option.form); 
    if (formElement) 
    {
        //bỏ hành vi mặc định khi submit form 
        formElement.onsubmit = function(e) 
        {
            e.preventDefault(); 
            var flag = 0; 
            option.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector); 
                flag = validate(inputElement,rule); 
            }); 
            if (flag) //false: không có lỗi 
            {
                var enableInput = formElement.querySelectorAll('[name]:not([disabled])'); 
                //Trong thực tế có những thẻ mà disabled đi thì không tương tác được 
                var enableInputInfo = Array.from(enableInput).reduce(function(res,inp) {
                    return (res[inp.name] = inp.value) && res;  
                    //toán tử logic &&: tua qua các giá trị truly 
                    //toán tử ||: tua qua các giá trị fasly 
                },{}); 
            }
        }
        //xử lí sự kiện blur cho từng inputElement 
        option.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector); 
            if (inputElement) 
            {
                if (Array.isArray(selectorRules[rule.selector])) //chứa các test của từng rule qui định cho các element
                {
                    selectorRules[rule.selector].push(rule.test); 
                } else 
                {
                    selectorRules[rule.selector] = [rule.test]; 
                }
                inputElement.addEventListener('blur' , function() {
                    validate(inputElement,rule); 
                })
            }
        }); //kết thúc vòng lặp 
        console.log(selectorRules); 

    }
}
//Nguyên tắc của rules 
//Khi có lỗi thì trả ra message lỗi 
//Khi hợp lệ thì không trả ra giá trị cả (undefined)
Validator.isEmail = function(selector, mess) { //kiểm tra xem có phải email hay không 
    return {
        selector: selector,
        test: function(val) {
            return (val.trim())?undefined : mess; 
        }
    }; 
}
Validator.isRequired = function(selector, mess) { //bắt buộc phải nhập dữ liệu 
    return {
        selector: selector, 
        test: function(val) {
            return (val.trim())?undefined : mess; 
        } 
    };  
}
Validator.isConfirmed = function(selector, getConfirmedValue, mess) //kiểm tra xem mật khẩu có khớp không
{
    return {
        selector: selector, 
        test: function(val) {
            return val === getConfirmedValue() ? undefined : mess; 
        }
        /** NGUYÊN TẮC CHẠY 
         * 1. Khai báo thì bỏ qua, không thực thi bên trong 
         * 2. Bọt từ bên ngoài vào bên trong 
         */
    }
} 
Validator.minLength = function(selector,minLen,mess)  //mật khẩu hợp lệ? 
{
    return {
        selector: selector, 
        test: function() {
            var realLen = document.querySelector('#form-1').querySelector(selector).value; 
            if (realLen) return (realLen >= minLen)? undefined : mess; 
        }
    }
}