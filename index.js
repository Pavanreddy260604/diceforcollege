document.querySelector(".bsdk").onclick = function() {
    rolled();
};

function rolled() {
    const diceImages = [
        "dice1.png",
        "dice2.png",
        "dice3.png",
        "dice4.png",
        "dice5.png",
        "dice6.png"
    ];

    const randNum = Math.floor(Math.random() * 6);
    

    const dice = document.getElementsByClassName("img1")[0];


    dice.setAttribute('src', diceImages[randNum]);


  
}
