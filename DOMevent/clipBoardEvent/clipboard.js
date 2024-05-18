//oncopy
//oncut 
//onpaste


const input =document.querySelector('input');
const p= document.querySelector('p');

input.addEventListener('copy',function(){
  //  p.innerText= "you have copied";
    console.log("you have copied");


});

input.addEventListener('cut',function(){
    console.log("you have cutted");


});


input.addEventListener('paste',function(){
    console.log("you have pasted");


});

