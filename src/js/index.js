
var num_Index = 0;
// 轮播图  切换
function slider(index) {
    if (index === 3) {
        index = num_Index = 0;
    }
    if (index === -1) {
        index = num_Index = 2
    }
    var lis = document.querySelectorAll(".list_li");

    document.querySelector(".opc").classList.remove("opc");

    lis[index].classList.add("opc")

}
//   焦点  聚焦   自动跟随 图片切换 没实现
// var jd=document.querySelectorAll('butter');
// if(lis[index]===jd[index]){
//     jd[index].style
// }


//左右按钮点击事件
function lt() {
    num_Index++
    slider(num_Index)
} function gt() {
    num_Index--
    slider(num_Index)
}
//点击事件 回调函数
document.querySelector(".left").onclick = function () {
    lt()
}
document.querySelector(".right").onclick = function () {
    gt()
}

var butter = document.querySelectorAll(".butter");
for (var i = 0; i < butter.length; i++) {
    butter[i].index = i;
    butter[i].onmouseover = function () {
        num_Index = this.index;
        slider(num_Index)
    }
}

document.querySelector('.slider').onmouseover = function () {
    stops()
}
document.querySelector('.slider').onmouseout = function () {
    auto();
}
var stop;
function auto() {
    stop = setInterval(function () {
        gt();
    }, 5000)
}

function stops() {
    clearInterval(stop);
}
auto();

//  右图上的+号 鼠标移上
var jh = document.querySelector('.rt_div');
jh.onmouseenter = function () {

    var ul_l = document.querySelector(".ul_l0");
    if (ul_l && ul_l.className === "ul_l0") {
        ul_l.style.visibility = "";
        return;
    } else {
        // 移动出现的ul  可以进行优化 变的好点
        var ul = document.createElement('ul');
        ul.className = "ul_l0";
        ul.style.cssText = `width:230px;
                            height:200px; 
                            position: absolute;
                            top:140px;
                            left:82px;
                            z-index:18;
                            `
        jh.appendChild(ul);
        var li = document.createElement('li');
        li.style.cssText = `
                            width:230px;
                            height:45px;
                            line-height:50px;
                            font-size:15px;
                            text-align:center;
                            `
        li.innerHTML = "微信";
        ul.appendChild(li);
        var li = document.createElement('li');
        li.style.cssText = `
                            width:230px;
                            height:45px;
                            line-height:50px;
                            font-size:15px;
                            text-align:center;
                            `
        li.innerHTML = "QQ聊天";
        ul.appendChild(li);
        var li = document.createElement('li');
        li.style.cssText = `
                            width:230px;
                            height:45px;
                            line-height:50px;
                            font-size:15px;
                            text-align:center;
                            `
        li.innerHTML = "腾讯微博";
        ul.appendChild(li);
        var li = document.createElement('li');
        li.style.cssText = `
                            width:230px;
                            height:45px;
                            line-height:50px;
                            font-size:15px;
                            text-align:center;
                            `
        li.innerHTML = "QQ好友";
        ul.appendChild(li);
        var li = document.createElement('li');
        li.style.cssText = `
                            width:230px;
                            height:20px;
                            line-height:20px;
                            font-size:15px;
                            float:right;
                            padding-left:150px;
                            color:red;
                            `
        li.innerHTML = "更多内容......";
        ul.appendChild(li);

    }
}
jh.onmouseleave = function () {
    document.querySelector(".ul_l0").style.visibility = "hidden";
}
// 监听 +的点击事件
var jian = document.querySelector(".jian.l");
var dh_number = document.querySelector(".dh2_number");
var number=parseFloat(dh_number.innerHTML)
jian.onclick=function(){
    //parseFloat  转换取得类型
    if(number>=919){
        dh_number.innerHTML=number;
    }else{
        dh_number.innerHTML=number++;
}
var jia =document.querySelector(".jia.l");
jia.onclick=function(){
    if(number<=1){
        dh_number.innerHTML=number;
    }else{
        dh_number.innerHTML=number--;
    }

}
}

// 回到顶部
var huojian =document.querySelector(".huojian");
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
        
            
    if (t < 1000) {
        huojian.style.display="none";
    }
    else if (t >= 1000) {
        huojian.style.display=`block`;
    }
  }

var timer=null;
huojian.onclick=function(){
    var gun=document.documentElement.scrollTop||document.body.scrollTop;
    timer=setInterval(function(){
        gun-=10;
        document.documentElement.scrollTop=gun;
        document.body.scrollTop=gun;
       
        if(gun<=0){
            clearInterval(timer);
            document.documentElement.scrollTop=0;
            document.body.scrollTop=0;
            }
    },1)
}





