// it's pic touch only

// document.querySelector(".w").addEventListener("click", function(){
//     Sound();
// });
// function Sound()
// {
//     var audio=new Audio('/photo/drum1.mp3');
//     audio.play();
// }
// document.querySelector(".a").addEventListener("click", function(){
//     Sound1();
// });
// function Sound1()
// {
//     var audio=new Audio('/photo/harmonium 1.mp3');
//     audio.play();
// }
// document.querySelector(".s").addEventListener("click", function(){
//     Sound2();
// });
// function Sound2()
// {
//     var audio=new Audio('/photo/guitar 1.mp3');
//     audio.play();
// }
// document.querySelector(".d").addEventListener("click", function(){
//     Sound3();
// });
// function Sound3()
// {
//     var audio=new Audio('/photo/violin 1.mp3');
//     audio.play();
// }
// document.querySelector(".j").addEventListener("click", function(){
//     Sound4();
// });
// function Sound4()
// {
//     var audio=new Audio('/photo/flute 1.mp3');
//     audio.play();
// }
// document.querySelector(".k").addEventListener("click", function(){
//     Sound5();
// });
// function Sound5()
// {
//     var audio=new Audio('/photo/piano 1.mp3');
//     audio.play();
// }
// document.querySelector(".l").addEventListener("click", function(){
//     Sound6();
// });
// function Sound6()
// {
//     var audio=new Audio('/photo/sexophone 1.mp3');
//     audio.play();
// }

// ********************************************************************************************
//For Button Click
var numOfBut = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfBut; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() 
{
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
}
//For Key Press

document.addEventListener("keydown", keySound);
function keySound(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("drum1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("harmonium 1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("guitar 1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("violin 1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("flute 1.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("piano 1.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("saxophone 1.mp3");
            audio.play();
            break;
        default:
            alert("Wrong Key Pressed!")
            break;
    }
}
function buttonAnimation(event)
{
var activeButton=document.querySelector("."+event);
activeButton.classList.add("pressed");

setTimeout(function()
{
    activeButton.classList.remove("pressed");

},100);
}