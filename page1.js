$(function(){

})

//判断号码
function checkPhone(){
		var reg=/^1\d{10}$/;
		var phone=$("#iphone").val();
		 var tell=localStorage.getItem(iphone);
		if(tell!=null){
        $(".pic1").css("border-color","red").css("background-color","red");
        $("#iphone").css("border-color","red");
        $(".phoneword").html("该号码已被注册").css("color","red");
        return false;
    }else{
        if(reg.test(phone)){
            $(".pic1").css("border-color","green").css("background-color","#6f6");
            $("#iphone").css("border-color","green");
            $(".phoneword").html("OK").css("color","green");
            return true;
        }else{
            $(".pic1").css("border-color","red").css("background-color","red");
            $("#iphone").css("border-color","red");
            $(".phoneword").html("号码不符合，应以1开头的11位数字").css("color","red");
            return false;
        }
    }
  }
//验证码获取
function  getChecked(){
    var num=Math.floor((Math.random())*9000+1000);
    $("#getcode").val(num);
}
//判断验证码是否输入正确
function checkCode(){
    var Code=$("#code").val();
    var num= $("#getcode").val();
    if(Code==num){
        $(".pic2").css("border-color","green").css("background-color","#6f6");
        $("#code").css("border-color","green");
        $(".codeword").html("OK").css("color","green");
        return true;
    }else{
        $(".pic2").css("border-color","red").css("background-color","red");
        $("#code").css("border-color","#f30");
        $(".codeword").html("验证码不正确").css("color","red");
        return false;
    }
}
//判断密码
function checkPassword(){
    var reg=/^[\da-zA-Z]{6,12}$/;
    var password=$("#login").val();
    if(reg.test(password)){
        $(".pic3").css("border-color","green").css("background-color","#6f6");
        $("#login").css("border-color","green");
        $(".loginword").html("&nbsp;OK").css("color","green");
        return true;
    }else{
        $(".pic3").css("border-color","red").css("background-color","red");
        $("#login").css("border-color","#f30");
        $(".loginword").html("密码不合法，由数字或字母组成的6至12位数字").css("color","red");
    }
}
//判断密码是否一致
function checkRepassword(){
    var reg=/^[\da-zA-Z]{6,12}$/;
    var password=$("#login").val();
    var repassword=$(".sure").val();
    if(password==repassword&&reg.test(repassword)){
        $(".pic4").css("border-color","green").css("background-color","#6f6");
        $(".sure").css("border-color","green");
        $(".sureword").html("OK").css("color","green");
        return true;
    }else{
        $(".pic4").css("border-color","red").css("background-color","red");
        $(".sure").css("border-color","red");
        $(".sureword").html("确认密码正确").css("color","red");
        return false;
    }
}

//同意提交
function submit(){
    if(checkPhone()&&checkPassword()&&checkRepassword()&&checkCode()){
    $("#myfrm").submit();
    var data=new Object;
    data.name=$("#iphone").val();
    data.password=$("#login").val();
    var str=JSON.stringify(data);
    localStorage.setItem(data.name,str);
    }
}