

let result = document.querySelector(".result")
let humanScore = document.querySelector("#human-score")
let machineScore = document.querySelector("#machine-score")



let humanScoreNumber = 0
let machineScoreNumber = 0 

const OPTIONS_GAME = {

    ROCK: 'rock' ,
    PAPER: 'paper' , 
    SCISSORS: 'scissors',

}



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, machinePlay())

}

const machinePlay = () => {
    const choice = [OPTIONS_GAME.ROCK, OPTIONS_GAME.PAPER, OPTIONS_GAME.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Humano: ` + human  +  `Máquina: ` + machine)

    if (human === machine) {
        result.innerHTML = `Você Empatou!`

    } else if ((human === 'paper' && machine === 'rock')
        || (human === 'rock' && machine === 'scissors')
        || (human === 'scissors' && machine === 'paper'))  
       {
        
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = ("Você Ganhou!!")
        
         }  else {
            machineScoreNumber++ 
            machineScore.innerHTML  = machineScoreNumber 
            result.innerHTML = "Você perdeu para a Alexa !"
        }
}

