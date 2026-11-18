
        let humanScore = 0;
        let computerScore = 0;
        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*30);
            if (randomNumber < 10  ){
                return "ROCK";
            }
            else if (randomNumber < 20 ){
                return "PAPER";
            }
            else {
                return "SCISSORS";
            }    
         
             
        }
        
        function getHumanChoice(){
            let humanChoice = prompt("make your choice","");
            return humanChoice.toUpperCase();

        }
       
        
        
            
            
            
            function playRound(humanChoice,computerChoice){
            if (humanChoice === "ROCK" && computerChoice === "PAPER" 
             || humanChoice === "SCISSORS" && computerChoice === "ROCK"
             || humanChoice === "PAPER" && computerChoice === "SCISSORS"  
             ){
                computerScore++;   
                return `you lose ${computerChoice} beats ${humanChoice}`;
            }
            else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
                  || humanChoice === "PAPER" && computerChoice === "ROCK"
                  || humanChoice === "SCISSORS" && computerChoice === "PAPER"
            ){  humanScore++;
                return `you win ${humanChoice} beats ${computerChoice}`;
            }
            else {
                return `its a tie ${humanChoice} = ${computerChoice}`
            }
            }
            
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(humanSelection,computerSelection));

            
        
        if (computerScore > humanScore){
            console.log(`you lose the game ${computerScore} > ${humanScore}`)
        }
        else if (computerScore < humanScore){
            console.log(`you win the game ${computerScore} < ${humanScore}`)
        }    
        
        
        

        
        const rockbtn = document.querySelector("#Rock")
        const paperbtn = document.querySelector("#Paper")
        const Scissorsbtn = document.querySelector("#Scissors")


        rockbtn.addEventListener("click", () => {
            console.log(playRound("ROCK", getComputerChoice()))
        })

        paperbtn.addEventListener("click", () => {
            console.log(playRound("PAPER", getComputerChoice()))
        })

        Scissorsbtn.addEventListener("click", () => {
            console.log(playRound("SCISSORS", getComputerChoice()))
        })
