const Department=document.querySelector('#Department');
console.log(Department);

Department.addEventListener('change',handaleDepartment);

function handaleDepartment(e){
    //console.log("selected");
    console.log(e.target.value);
}