/* <input>  </input>
text, number, password, email, color, search,time,date,
datetime, month,url,tel, file */



// const input= document.querySelector("input");
// input.addEventListener('change',changeHandler)

// function changeHandler(e){
//     console.log("changed");
// }

// // find e properties and type
// const input= document.querySelector("input");
// input.addEventListener('change',changeHandler)

// function changeHandler(e){
//     console.log(e);
//     console.log(e.type);
// }

// // target
// const input= document.querySelector("input");
// input.addEventListener('change',changeHandler)

// function changeHandler(e) {
//     console.log(e.target);
   
// }

// // result <input type="text" name="name">


// // selecting by type: name, email,
// const input= document.querySelector("input[name=name]");  //[name=email]
// input.addEventListener('change',changeHandler)

// function changeHandler(e) {
//     console.log(e.target);
   
// }

// result <input type="text" name="name">

// 3. class id
const input= document.querySelector("input[name=name]"); 
input.addEventListener('change',changeHandler)

function changeHandler(e) {
    console.log(e.target); 
    console.log(e.target.className);
    console.log( e.target.id);
    console.log(e.target.value);
    
}
 





