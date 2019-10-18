document.querySelector(".button").onclick = function () {
    let user = document.querySelector("#username").value;
    let pw = document.querySelector("#password").value;
    if (user === '' && pw === '') {
        alert('请输入名和密码')
    } else {
    
        let xhr = new XMLHttpRequest();

        xhr.open("POST", '/YPH/src/api/login.php', true);

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                if (this.responseText === '登录成功') {
                    location.href = 'http://localhost/YPH/src/index.html';
                }

            } else {


                alert('登陆失败');
            }
        }
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${user}&pass=${pw}`);



    }

}
