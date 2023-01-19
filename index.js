window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
// const listNav = document.querySelector('li');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    // listNav.classList.remove('navClicked');
}

//====================================

var numberOfLi = document.querySelectorAll("li").length;

for(var i = 0; i<numberOfLi; i++){
    document.querySelectorAll("li")[i].addEventListener("click", function(){

        navigation.classList.remove('active');
        document.querySelector('.toggle').classList.remove('active');

    });
}

// *******************************************************************************************

let textLength = 0;
let text = "I'm Eric|";

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 120);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});



let textLength2 = 0;
let text2 = "Programmer";

function type2() {
    let textChar2 = text2.charAt(textLength2++);
    let paragraph2 = document.getElementById("typed2");
    let charElement2 = document.createTextNode(textChar2);
    paragraph2.appendChild(charElement2);
    if(textLength2 < text2.length+1) {
        setTimeout('type2()', 120);
    } else {
        text2 = '';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type2, 1000);
});


//=============================


