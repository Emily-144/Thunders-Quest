
function jump() {
    const jumpthunder = document.getElementById("thunder");

    if (jumpthunder.classList != "jumpanimation") {
        jumpthunder.classList.add("jumpanimation");
        document.getElementById("thunder").style.backgroundImage = "url(jump2.png)";
        document.getElementById("thunder").style.width = "620px";
        document.getElementById("thunder").style.height = "310px";
        document.getElementById("rock").style.top = "48px"; //rock otherwise moves

        setTimeout(function () {
            jumpthunder.classList.remove("jumpanimation"); //add jumping animation and then remove it after 1 second
            document.getElementById("thunder").style.backgroundImage = "url(runcycle.gif)";
            document.getElementById("thunder").style.width = "570px";
            document.getElementById("thunder").style.height = "284px";
            document.getElementById("rock").style.top = "74px";
        }, 1000); //milliseconds
    }
}

document.addEventListener('keypress', event => {
    if (event.code === 'Space') {
        jump(); //use spacebar to jump
    }
})

//function hitRock() {

    //console.log(document.getElementById("rock").right);

//}