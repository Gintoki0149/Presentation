function nameCorrect(fname, lname, name_error){
    let result = /^[A-Z]+$/.test(fname.value) && /^[A-Z]+$/.test(lname.value); 
    if(!result) name_error.style.visibility = "visible";
    else name_error.style.visibility = "hidden";
    console.log("nameCorrect:"+result);
    return result;
}

function phoneCorrect(phone, phone_error){
    let result = /^[0-9]+$/.test(phone.value) && phone.value.length == 10;
    if(!result) phone_error.style.visibility = "visible";
    else phone_error.style.visibility = "hidden";
    console.log("phoneCorrect:"+result);
    return result;
}

function dobCorrect(dob){
    let today = new Date();
    let cur_year = today.getFullYear().toString();
    let cur_month = (today.getMonth()+1).toString();
    let cur_date = today.getDate().toString();
    let dob_string = dob.value;
    let arr = dob_string.split("-");
    if(cur_year<parseInt(arr[0])) return false;
    else{
        if(cur_month<parseInt(arr[1])) return false;
        else{
            if(cur_date<parseInt(arr[2])) return false;
        }
    }
    return true;
}

function checkPwd(pwd, pwd_error){
    if(pwd.length<6){
        pwd_error.style.visibility="visible";
        return false;
    }
    else{
        if(/.*[a-z].*/.test(pwd) && /.*[A-Z].*/.test(pwd) && /.*\d.*/.test(pwd) && /.*\W.*/.test(pwd)) pwd_error.style.visibility = "hidden";
        else{
            pwd_error.style.visibility = "visibile";
            return false;
        }
    }
    return true;
}

function confirmPwd(pwd,cpwd,cpwd_error){
    if(pwd===cpwd){
        cpwd_error.style.visibility="hidden";
        return true;
    }
    else{
        cpwd_error.style.visibility="visible";
        return false;
    } 
}

function getGender(male, female, others){
    if(male) return "Male";
    else
    if(female) return "female"
    return "Others";
}

function validateForm(){
    let valid = false;
    let userForm = document.forms["user_form"];
    let fname = userForm["fname"];
    let lname = userForm["lname"];
    let name_error = document.getElementById("name_error");
    let male = document.getElementById("Male").checked;
    let female = document.getElementById("Female").checked;
    let others = document.getElementById("Others").checked;
    let gender = getGender(male,female,others);
    let email = userForm["email"];
    let phone = userForm["pnum"];
    let phone_error = document.getElementById("phone_error");
    let dob = userForm["dob"];
    let address = userForm["Address"].value;
    let country = userForm["country"].value;
    let pwd = userForm["pwd"].value;
    let pwd_error = document.getElementById("pwd_error");
    let cpwd = userForm["cpwd"].value;
    let cpwd_error = document.getElementById("cpwd_error");
    let agreeToTerms = userForm["user_agreement"].checked;
    console.log("dobCorrect:"+dobCorrect(dob));
    console.log("checkPwd correct:"+checkPwd(pwd,pwd_error));
    console.log("ocnfirmPwd correct:"+confirmPwd(pwd,cpwd,cpwd_error));
    if(nameCorrect(fname,lname,name_error) && phoneCorrect(phone,phone_error) && dobCorrect(dob) && confirmPwd(pwd,cpwd,cpwd_error) && checkPwd(pwd,pwd_error)){
        valid = true;
        user_obj = {
            "firstname":fname.value,
            "lastname":lname.value,
            "gender":gender,
            "email":email.value,
            "phone":phone.value,
            "dob":dob.value,
            "address":address,
            "country":country,
            "pwd":CryptoJS.AES.encrypt(pwd, "G9MMa23PwYiPJejlM+8w+rQt4VY1JyAw0a+3wF/gvYKUPQWISBMpDZ6c5Ue+Lixh").toString()
        };
    }
    else{
        userForm["pwd"].value = "";
        userForm["cpwd"].value = "";
    }
    console.log(user_obj);
    console.log(valid);
    return valid;
}