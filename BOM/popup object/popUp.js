//popUpbox- alert, prompt,confirm
// console.log(window);

alert("It is a error !");
confirm(" Can you delete it");

function deleteSomething(){
    let value = confirm(" Can you delete it ?");
    if(value){
        console.log(" it is deleted");
    }
    else{ 
        console.log(" not deleted");}
}
deleteSomething();

// function WelcomeMessage(){
//     var h1= document.createElement("h1");
//     let text;
//     var name= prompt("What is your name ?");
//     if(name==null||name==""){
//         text= "no name found";

//     }
//     else{
//         text="Welcome"+ name;
//     }
//     var textNode=document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }

// WelcomeMessage();