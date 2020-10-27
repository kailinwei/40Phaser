export default {
    buildYourOwn: `(B)uild your own`,
    clickToContribute: `(C)lick to contribute`,
    endingInstructions: `Press 'p' to play again or 'b' to build your own.`,
    fourZeroFour: `404`,
    highscore: amount => `Highscore: ${amount}`,
    looksLikeYoureLost: `Looks like you're lost.`,
    luckilyYoureNotAlone: `Luckily you're not alone.\nHelp Codey return home and get back to coding.`,
    ohNo: `Oh no!`,
    pause: `(P)ause`,
    playAgain: `(P)lay Again`,
    playTheGame: `(P)lay the Game`,
    pressPToPause: `Press 'P' to pause`,
    pressPToUnpause: `Press 'P' to unpause`,
    pressSpaceOrTap: `Press Space or tap the game to jump`,
    score: amount => `Score: ${amount}`,
    soClose: "So Close!",
    startingInstructions: `Press 'p' to play, 'b' to build your own, or 'c' to contribute.`,
    unpause: `un(P)ause`,
};
const existingHighScore=number;

const possibleSaying =["Wow! Same high score!", "Amazing, new high score!", "Maybe next time"]

 currentScore=(score)=>{
    if (score==existingHighScore){console.log(possibleSaying[0])}
    if (score>existingHighScore){console.log(possibleSaying[1])}
    if(score<existingHighScore){console.log(possibleSaying[2])}
}

currentScore();
