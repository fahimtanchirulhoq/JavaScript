//except some Element

// onclick
// ondblclick
// onmousedown
// onmouseup
// onmouseenter
// onmouseleave
// onmousemove
// onmouseover

console.clear();
const div= document.querySelector("div");
div.addEventListener("click",function(){
console.log('clicked');   //answer: clicked

});

div.addEventListener("dblclick",function(){
    console.log('double clicked is clicked');   //answer: double clicked is clicked
    
    });

    div.addEventListener('mousedown',function(){
        console.log('mouse down is occured');   //answer: clicked
        
        });

        div.addEventListener('mouseup',function(){
            console.log('mouseUp  is occured');   //answer: clicked
            
            });


            // result: mouse down is occured 
            // mouseUp  is occured 
            // clicked


            
        div.addEventListener("mouseenter",function(){
            console.log('mouse enter  is occured');   
            
            });

            div.addEventListener("mouseleave",function(){
                console.log('mouse leave  is occured');  
                
                });
    

                
        div.addEventListener("mouseover",function(){
            console.log('mouseover  is occured');   
            
            });          //is at a time when entering

            div.addEventListener("mousemove",function(){
                console.log('mouse move  is occured');   
                
                });
    