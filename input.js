"use strict";
document.querySelector("#box").style.display = "flex";
document.querySelector("#box").style.alignItems = "center";
document.querySelector("#box").style.justifyContent = "center";
document.querySelector("#box").style.flexDirection = "column";

document.addEventListener("DOMContentLoaded", ()=>{

let _age = document.querySelector("#age");
let _checkPoint = document.querySelector("p");
let _btn = document.querySelector("#submit");
_btn.addEventListener("click", ()=>{
    if(_age.value<18){
		_checkPoint.innerHTML="Under age";
		_checkPoint.style.color="red";
	}else if(_age.value>=18 && _age.value<=28){
		_checkPoint.innerHTML="Qualified Novice";
		_checkPoint.style.color="green";
	} else if(_age.value>28 && _age.value<=38){
		_checkPoint.innerHTML="Qualified Professional";
		_checkPoint.style.color="green";
	}else{
		_checkPoint.innerHTML="Qualified veteran";
		_checkPoint.style.color="yellow";
	}
});

});