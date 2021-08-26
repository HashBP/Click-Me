let btno=document.querySelector(".open");
let mainbtn=document.querySelector(".main-c");
let btnc=document.querySelector(".close");
console.log(btno);
console.log(btnc);
console.log(mainbtn);
btno.addEventListener("click",function(){
    mainbtn.classList.add("show");
});
btnc.addEventListener("click",function(){
  mainbtn.classList.remove("show");
});
