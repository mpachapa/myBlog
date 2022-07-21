//BOF
window.onload = function() {
    //enter in the function to be called when the button is clicked
    document.getElementById("btn1").onclick = changeImage1;
    document.getElementById("btn2").onclick = changeImage2;
    document.getElementById("btn3").onclick = changeImage3;
    document.getElementById("btn4").onclick = changeImage4;
    document.getElementById("btn5").onclick = changeImage5;
    document.getElementById("btn6").onclick = changeImage6;
    document.getElementById("btn7").onclick = changeImage7;
    document.getElementById("btn8").onclick = changeImage8;
};

//variable to keep track of the image on screen
var counter = 1;

//next image function
function next(){
    console.log(counter)
    if (counter == 8){
        counter = 1;
    }   
    counter++;  
    document.getElementById("currentImage").src = `Ukraine/ukraine-${counter}.jpg`;
    
}

//previous image function
function previous(){
    console.log(counter)
    if (counter == 1){
        counter = 8;
    }
    counter--;
    document.getElementById("currentImage").src = `Ukraine/ukraine-${counter}.jpg`;
    
}


//Change functions for each of the buttons
function changeImage1() {
    counter = 1;
    document.getElementById("currentImage").src = "Ukraine/ukraine-1.jpg";
}

function changeImage2() {
    counter = 2;
    document.getElementById("currentImage").src = "Ukraine/ukraine-2.jpg";
}

function changeImage3() {
    counter = 3;
    document.getElementById("currentImage").src = "Ukraine/ukraine-3.jpg";
}

function changeImage4() {
    counter = 4;
    document.getElementById("currentImage").src = "Ukraine/ukraine-4.jpg";
}

function changeImage5() {
    counter = 5;
    document.getElementById("currentImage").src = "Ukraine/ukraine-5.jpg";
}

function changeImage6() {
    counter = 6;
    document.getElementById("currentImage").src = "Ukraine/ukraine-6.jpg";
}

function changeImage7() {
    counter = 7;
    document.getElementById("currentImage").src = "Ukraine/ukraine-7.jpg";
}

function changeImage8() {
    counter = 8;
    document.getElementById("currentImage").src = "Ukraine/ukraine-8.jpg";
}

//EOF