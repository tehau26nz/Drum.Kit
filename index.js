/*********Detect button pressed*********/

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);       
        buttonAnimation(buttonInnerHTML);

    });

}

/*********Detect keyboard pressed*********/

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
     // Switch statement between buttons
     switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            // break;
    }

}


/***********Button animation***********/

function buttonAnimation(currentKey){

    // Style the button
    var activeButton = document.querySelector("."+currentKey);

    // Add pressed class to give it a shadow
    activeButton.classList.add("pressed");

    // Remove the style after 0.1s
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}


