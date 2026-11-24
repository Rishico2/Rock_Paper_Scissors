
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
                return `You lose ${computerChoice} beats ${humanChoice}`;

            }
            else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"
                  || humanChoice === "PAPER" && computerChoice === "ROCK"
                  || humanChoice === "SCISSORS" && computerChoice === "PAPER"
            ){  humanScore++;  
                return `You win ${humanChoice} beats ${computerChoice}`;
            }
            else {
                return `Its a tie ${humanChoice} = ${computerChoice}`
            }
            }
        


        
        

        const result = document.querySelector("#result")
        const scoreboard = document.querySelector("#score")
        const winner = document.querySelector("#winner")

        const rockBtn = document.querySelector("#Rock")
        const paperBtn = document.querySelector("#Paper")
        const ScissorsBtn = document.querySelector("#Scissors")

        
        rockBtn.addEventListener("click", () => {
            const run = playRound("ROCK", getComputerChoice())
            result.textContent = run;
            scoreboard.textContent = `computerScore = ${computerScore} \n humanScore = ${humanScore}`
            if (humanScore == 5){
             winner.textContent = "YOU WON THE GAME"
             humanScore = 0 ;
             computerScore = 0;      
            }
            else if (computerScore == 5) 
            {
                winner.textContent = "COMPUTER WON THE GAME"
                humanScore = 0;
                computerScore = 0;
            }
            else {
                winner.textContent =""
            }

        })

        paperBtn.addEventListener("click", () => {
            const run = playRound("PAPER", getComputerChoice())
            result.textContent = run;
            scoreboard.textContent = `computerScore = ${computerScore} \n humanScore = ${humanScore}`
            if (humanScore == 5){
             winner.textContent = "YOU WON THE GAME"
             humanScore = 0 ;
             computerScore = 0;      
            }
            else if(computerScore == 5) 
            {
                winner.textContent = "COMPUTER WON THE GAME"
                humanScore = 0;
                computerScore = 0;
            }
            else {
                winner.textContent =""
            }
        })

        ScissorsBtn.addEventListener("click", () => {
            const run = playRound("SCISSORS", getComputerChoice())
            result.textContent = run;
            scoreboard.textContent = `computerScore = ${computerScore} \n humanScore = ${humanScore}`
            if (humanScore == 5){
             winner.textContent = "YOU WON THE GAME"
             humanScore = 0 ;
             computerScore = 0;      
            }
            else if (computerScore == 5)
            {
                winner.textContent = "COMPUTER WON THE GAME"
                humanScore = 0;
                computerScore = 0;
            }
            else {
                winner.textContent =""
            }
        })
       
        
                
        
        