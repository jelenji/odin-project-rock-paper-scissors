function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);

    if(rand === 0){
        return "rock";
    }
    else if(rand === 1){
        return "paper";
    }
    else if(rand === 2){
        return "scissors";
    }

    return "NA";
}


function playRound (computerChoice, playerChoice){

    let comp = computerChoice.toLowerCase();
    let player = playerChoice.toLowerCase();

    if (comp === player)
    {
        return 0; //Draw
    }
    else if ((comp === "rock" && player === "scissors") ||
        (comp === "scissors" && player === "paper") ||
        (comp === "paper" && player === "rock")){

        return 1; // Computer Wins
    }
    else{
        return 2; // Player Wins
    }
}

/*return `It's A Draw! You Both Chose ${comp}`
return `You Lose! ${comp} beats ${player}`
return `You Win! ${player} beats ${comp}`;*/
function game(){
    let cWins = 0, pWins = 0, draw = 0, output;
    let input, playerInput;

    for (let i = 0; i < 5; i++){
        input = window.prompt("Rock, Paper , or Scissors?");
        playerInput = input.toLowerCase();
        computerInput = getComputerChoice();

        if ((playerInput !== "rock") && (playerInput !== "paper") && (playerInput !== "scissors")){
            console.log("Invalid Input... Computer Wins This Round");
            cWins++;
            continue;
        }

        output = playRound(computerInput, playerInput);

        if (output === 1){
            cWins++;
            console.log(`You Lose! ${computerInput} beats ${playerInput}`);
        }
        else if (output === 2) {
            pWins++;
            console.log(`You Win! ${playerInput} beats ${computerInput}`);
        }
        else{
            draw++;
            console.log(`It's A Draw! You Both Chose ${computerInput}`);
        }

    }

    console.log(`Results After 5 Rounds \n Player Wins : ${pWins} \n Computer Wins : ${cWins} \n Draws : ${draw} \n`);
    if (cWins > pWins)
        console.log("Computer Won The Match")
    else if (pWins > cWins)
        console.log("You Won The Match")
    else
        console.log("Match Ended in a Draw")
}

game()
