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

function showDiv(img) {
    for (i = 0; i < 13; i++) {
        document.getElementById("Ukraine/ukraine-" + i).style.display = "none";
    }
    //in the next 2 lines, you make sure img isn't lower than 1, and isn't greater than the number of images
    if (img < 1) img = 1;
    if (img > 13) img = 13;
    document.getElementById("Ukraine/ukraine-" + img).style.display = "block";
    currentImage = img;

}

function changeImage1() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-1.jpg";
}

function changeImage2() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-2.jpg";
}

function changeImage3() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-3.jpg";
}

function changeImage4() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-4.jpg";
}

function changeImage5() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-5.jpg";
}

function changeImage6() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-6.jpg";
}

function changeImage7() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-7.jpg";
}

function changeImage8() {
    document.getElementById("currentImage").src = "Ukraine/ukraine-8.jpg";
}