
document.querySelector(".button").onclick=function(){
    let user=document.querySelector('#username').value;
    let password=document.querySelector('#pw').value;
    if(user===''|| password===''){
        alert('请注册账户')
    } else{

  
    
  
    let xhr = new XMLHttpRequest();
  
    xhr.open("POST", '/YPH/src/api/regiest.php', true);

    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {

        if(this.responseText==='注册成功'){
            location.href='http://localhost/YPH/src/html/login.html';
        }else{
            alert("注册失败请重新注册")
        }


         
    } else{
        console.log('登陆失败');
    }

        }
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
         xhr.send(`usernames=${user}&pass=${password}`);
      

}
}