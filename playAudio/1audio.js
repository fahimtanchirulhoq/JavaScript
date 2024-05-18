var text; // declare text variable outside the event listener

for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        text = this.innerHTML; // assign value to the text variable
        console.log(text);
        audioPlay(); // call the audioPlay function
    });
}

function audioPlay() { 
    switch (text) {
        case "a":
            var audioA = new Audio("./A.mp3");
            audioA.play();
            break;

        case "b":
            var audioB = new Audio("./B.mp3");
            audioB.play();
            break;

        case "c":
            var audioC = new Audio("./C.mp3");
            audioC.play();
            break;
    }
}
