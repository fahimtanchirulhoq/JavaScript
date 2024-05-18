const form= document.querySelector('form');
const name= form.querySelector('div #name');
console.log(name); //result: <input id="name" type="text" name="name" required="" autofocus=""></input>


const email= form.querySelector('div #email');
const password= document.querySelector('div #password');

form.addEventListener('submit',formHandler);

function formHandler(e){
e.preventDefault();
// console.log("submit");   //result:submit
//  console.log(name.value);
//  console.log(email.value);
//  console.log(password.value);


const userInfo= {
name: name.value,
email: email.value,
password: password.value,
};
 console.log(userInfo);  
  //result:Object { name: "tafhimul", email: "abbcc@gmail.com", password: "*d3fh'P$!" }
name.value="";
email.value="";
password.value="";

}



