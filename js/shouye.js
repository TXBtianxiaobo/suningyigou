// 轮播图
let banner = document.querySelector(".screen .middle .banner");
let imgs = document.querySelectorAll(".screen .middle .banner img");
let yuans = document.querySelectorAll(".screen .middle .banner .banner-nav .yuan");
let leftKey = document.querySelector(".screen .middle .banner .left-key");
let rightKey = document.querySelector(".screen .middle .banner .right-key");
let n = 0;
let size = yuans.length - 1;

function move() {
	if (n > size) {
		n = 0;
	} else if (n < 0) {
		n = size;
	}
	yuans.forEach(function(val, index) {
		val.classList.remove("active");
		imgs[index].classList.remove("active");
	})
	yuans[n].classList.add("active");
	imgs[n].classList.add("active");
}

let time = setInterval(function() {
	n++;
	move();
}, 2000);

banner.onmouseover = function() {
	clearInterval(time);
}

banner.onmouseout = function() {
	time = setInterval(function() {
		n++;
		move();
	}, 2000);
}

leftKey.onclick = function() {
	n--;
	move();
}

rightKey.onclick = function() {
	n++;
	move();
}

yuans.forEach(function(val, index) {
	val.onmouseover = function() {
		n = index;
		move();
	}
})

let toutiao = document.querySelector(".screen .middle .information .toutiao");

//抢购轮播
// let qgleftKey = document.querySelector(".qg .content .kong .left-key");
// let qgrightKey = document.querySelector(".qg .content .kong .left-key");
// let qgUl = document.querySelectorAll(".qg .content .kong ul");
// console.log(qgUl)
// let speed = -100;
// function move1(){
// 	let nowPosition=qgUl.offsetLeft;
// 	nowPosition+=speed;
// 	if(nowPosition<-5000){
// 		qgUl.style.left=0+"px";
// 	}else{
// 		qgUl.style.left=nowPosition+"px";
// 	}
// 	
// 	
// }
// let time1=setInterval(move1,1000);



//img选项卡
let smallImgs=document.querySelectorAll(".img-box ul li:nth-child(2) a .small-show img");
let bigImgs=document.querySelectorAll(".img-box ul li:nth-child(2) a .big-show img");
let i= 0;
let a=bigImgs.length-1;

function display(){
	if(i<0){
		i=a;
	}else if(i>a){
		i=0
	}
	bigImgs.forEach(function(val,index){
		val.classList.remove("active");
	})
	bigImgs[i].classList.add("active");
}

smallImgs[i].onmouseover=function(){
	i++;
	display();
}

