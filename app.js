const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introscrn = document.querySelector(".intro");
        const maths = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introscrn.classList.add("fadeOut");
            maths.classList.add("fadeIn");
            
        });  
    };
    const playMatch = () => {

        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        
        
        options.forEach(Option => {
            Option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {

                comapreHands(this.textContent, computerChoice);
                
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                    
               },2000)  
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
            
        });
        
        
    };

    const UpdateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const comapreHands = (computerChoice, playerchoice) => {
        const winner = document.querySelector(".winner");

        if (playerchoice === computerChoice) {
            winner.textContent = "it's is  a tie";
            return;
        }
        //rock
        if (playerchoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins";
                pScore++;
                UpdateScore();
                return;
            } else {
                winner.textContent = "compter wins";
                cScore++;
                UpdateScore();
                return;
            }
        }
        //paper

        if (playerchoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "computer wins";
                cScore++;
                UpdateScore();
                return;
                
            } else {
                winner.textContent = "player wins";
                pScore++;
                UpdateScore();
                return;
            }
        }

        //sicissor

        if (playerchoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "computer wins";
                cScore++;
                UpdateScore();
                return;
            } else {
                winner.textContent = "player wins";
                pScore++;
                UpdateScore();
                return;
            }
        }
        
    }

   
    startGame();
    playMatch();
    
};
game();