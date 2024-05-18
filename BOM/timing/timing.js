//window object 

// setTimeOut-, setInterval() \


// setTimeout(display,2000);
//     function display(){
//         console.log("display function");
//     }

// const saveButton = document.querySelector(".save-button");
// const message = document.querySelector(".message");

// saveButton.addEventListener('click', saveUser);

// function saveUser() {
//     message.textContent = "User registration successful";

//     setTimeout(display, 2000);
// }

// function display() {
//     message.textContent = "";
// }


// const saveButton = document.querySelector(".save-button");
// const message = document.querySelector(".message");

// saveButton.addEventListener('click',diaplay);
// function diaplay()
// {
//     let count =0;
//     message.textContent=count;
//     setInterval(()=>{
//         count++;
//         message.textContent=count;
//     },1000);
// }

const saveButton = document.querySelector(".save-button");
const message = document.querySelector(".message");

 saveButton.addEventListener('click',startClock);

 function startClock(){
    let date= new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();

   let  minute= formation(minutes);
 let   Second=formation(seconds);
    let time= hours+":"+ minute+ ":"+Second;

    message.textContent=time;
    setInterval(startClock,1000);
 }

 function formation(value){
    if( value<10){
        value="0"+ value;
        
    } 
    return value;
 }