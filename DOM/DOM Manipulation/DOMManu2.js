// var heading1=document.getElementsByTagName("h1")[0];
// heading1.innerHTML="Say no";

// var heading2=document.getElementsByTagName("h2")[0];
// heading2.innerHTML="Say no";

// var heading3=document.createElement("h1");
// var text=document.createTextNode(" This is heading3");
// heading3.appendChild(text);

// var myDiv = document.getElementById("my-div");
// myDiv.appendChild(heading3);

// //removing tag

var heading2=document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

//adding before
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);

var myDiv = document.getElementById("my-div");
var heading1 = myDiv.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);
