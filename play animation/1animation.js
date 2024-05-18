for(var i=0; i<3; i++){

document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
var text =this.innerHTML;
console.log(text);
playAnimation(text);

});
}

function audioPlay(){

    switch(text){
    
        case:"a":
        var audio = new Audio("./Recording.m4a");
        audio.play();
        break;
    
        case:"b":
        var audio = new Audio("./Recording1.m4a");
        audio.play();
        break;
    
        case:"c":
        var audio = new Audio("./Recording2.m4a");
        audio.play();
        break;
    }
    
}    

function playAnimation(text) {
   var selectedButton= document.querySelector("."+ text);
   selectedButton.classList.add("anim");
}

