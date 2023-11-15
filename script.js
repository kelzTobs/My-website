let btn = document.getElementById("Btn1");
let Btn = document.getElementById("Btn2");
let sec1 = document.getElementById("firstSection");
let sec2 = document.getElementById("secondSection");


// function for Black Background button
function myBtn() {
   btn.addEventListener("click", ()=>{
        sec1.style.backgroundColor = "black";
        sec1.style.color = "white";
   }); 
}

// function for Change Color button
function myBTN() {
    Btn.addEventListener("click", ()=>{
        sec1.style.backgroundColor = "white";
        sec1.style.color = "black";
    });
}