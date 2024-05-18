// document.querySelector("button").addEventListener("click",myFunction);

// function myFunction(){
//     alert("Hello");
// }

// var myVar= document.querySelector("h1");
// myVar.addEventListener("click",function(){
//     alert("hi");
// })


var myVar= document.querySelector("p1");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
});