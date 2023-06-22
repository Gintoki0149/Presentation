function nameCorrect(fname,mname,lname,name_error){
    let result = /^[A-Z]+$/.test(fname) && /^[A-Z]+$/.test(lname); 
    if(mname.length>0){
        if(!/^[A-Z]+$/.test(mname)) result = false;
    }
    if(!result) name_error.style.display = "flex";
    else name_error.style.display = "none";
    console.log("nameCorrect:"+result);
    return result;
}

function dobCorrect(dob,dob_error){
    let today = new Date();
    let cur_year = today.getFullYear().toString();
    let cur_month = (today.getMonth()+1).toString();
    let cur_date = today.getDate().toString();
    let dob_string = dob;
    let arr = dob_string.split("-");
    if(cur_year<parseInt(arr[0])){
        dob_error.style.display="flex";
        return false;   
    }
    else{
        if(cur_month<parseInt(arr[1])){
            dob_error.style.display="flex";
            return false;
        } 
        else{
            if(cur_date<parseInt(arr[2])){
                dob_error.style.display="flex";
                return false;  
            } 
        }
    }
    dob_error.style.display="none";
    return true;
}

function getGender(male, female, others){
    if(male) return "Male";
    else
    if(female) return "female"
    return "Others";
}

function phoneCorrect(phone_num,phone_error){
    let result = /^[0-9]+$/.test(phone_num) && phone_num.length == 10;
    if(!result) phone_error.style.display = "flex";
    else phone_error.style.display = "none";
    console.log("phoneCorrect:"+result);
    return result;
}

function checkPwd(pwd,pwd_error,cpwd_error){
    // console.log(pwd);
    if(pwd.length<6){
        pwd_error.style.display="flex";
        document.getElementById("cpwd").disabled=true;
        return false;
    }
    else{
        if(/.*[a-z].*/.test(pwd) && /.*[A-Z].*/.test(pwd) && /.*\d.*/.test(pwd) && /.*\W.*/.test(pwd)){
            pwd_error.style.display = "none";
            document.getElementById("cpwd").disabled=false;
        } 
        else{
            pwd_error.style.display = "flex";
            document.getElementById("cpwd").disabled=true;
            return false;
        }
    }
    console.log(document.getElementById("cpwd").disabled);
    return true;
}

function confirmPwd(pwd,cpwd,cpwd_error){
    if(cpwd === pwd){
        cpwd_error.style.display="none";
        return true;
    }
    else{
        cpwd_error.style.display="flex";
        return false;
    }
}

function validateForm(){
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    if(mname === null) mname = null;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;
    let dob = document.getElementById("dob").value;
    let phone_num = document.getElementById("pno").value;
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
    let name_error = document.getElementById("name_error");
    let dob_error = document.getElementById("dob_error");
    let phone_error = document.getElementById("phone_error");
    let pwd_error = document.getElementById("pwd_error");
    let cpwd_error = document.getElementById("cpwd_error");
    // nameCorrect(fname,mname,lname,name_error);
    // dobCorrect(dob,dob_error);
    // phoneCorrect(phone_num,phone_error);
    // console.log(fname);
    // console.log(lname);
    // console.log("hi");
    if(nameCorrect(fname,mname,lname,name_error) && dobCorrect(dob,dob_error) && phoneCorrect(phone_num,phone_error) && checkPwd(pwd,pwd_error) && confirmPwd(pwd,cpwd,cpwd_error)){
        let user_obj = {
            "firstname":fname,
            "lastname":lname,
            "middlename":mname,
            "gender":getGender(male,female,others),
            "email":document.getElementById("email").value,
            "phone":phone_num,
            "dob":dob,
            "address":document.getElementById("Address").value,
            "state":document.getElementById("State").value,
            "pwd":CryptoJS.AES.encrypt(pwd, "G9MMa23PwYiPJejlM+8w+rQt4VY1JyAw0a+3wF/gvYKUPQWISBMpDZ6c5Ue+Lixh").toString()
        };
        console.log(user_obj);
        return true;
    }
    else{
        document.getElementById("pwd").value = "";
        document.getElementById("cpwd").value = "";
    }
    return false;
}