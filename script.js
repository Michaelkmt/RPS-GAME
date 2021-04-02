// Setting the scores and selecting our HTML elements.
let computerScore = 0;
let playerScore = 0;

let compScore = document.getElementById('computerScore');
let playScore = document.getElementById('playerScore');
let rockbtn = document.getElementById('rock');
let paperbtn = document.getElementById('paper');
let scissorsbtn = document.getElementById('scissors');
let showPlayer =document.querySelector('.player i');
let comPlayer =document.querySelector('.computer i');
let finalDec = document.getElementById('demo');
let again = document.getElementById('againbtn');
let result = document.getElementById('result');


again.style.backgroundColor = "black";
again.style.color = "orange";
again.style.boxSizing = "10px";
again.style.fontFamily = "Monofett";
again.style.fontSize = "40px";




const randArray =['fas fa-hand-rock','fas fa-hand-paper','fas fa-hand-scissors'];

function game (event){
   let randomNum =Math.floor(Math.random() * randArray.length);
console.log(event)
showPlayer.className=event.target.className;
comPlayer.className=randArray[randomNum];

if(showPlayer.className === comPlayer.className){
       result.innerHTML = "It's a Tie!!!";
   }
   
else if(showPlayer.className === "fas fa-hand-rock" && comPlayer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-paper" && comPlayer.className==="fas fa-hand-rock" || showPlayer.className === "fas fa-hand-scissors" && comPlayer.className==="fas fa-hand-paper"){
      playerScore ++;
      result.innerHTML =`Player Wins <i class="far fa-smile"></i>` 
      playScore.innerHTML =playerScore;
      if(playerScore === 10){
         rockbtn.disabled = true;
         paperbtn.disabled = true;
         scissorsbtn.disabled = true;
         finalDec.innerHTML = "GAME OVER!!!"

       }
   }
   
else if(showPlayer.className === "fas fa-hand-rock" && comPlayer.className==="fas fa-hand-paper" || showPlayer.className === "fas fa-hand-paper" && comPlayer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-scissors" && comPlayer.className==="fas fa-hand-rock"){
    computerScore ++;
 result.innerHTML =`Computer Wins <i class="fas fa-sad-cry"></i>` 
 compScore.innerHTML =computerScore;
 if(computerScore === 10){
   rockbtn.disabled = true;
   paperbtn.disabled = true;
   scissorsbtn.disabled = true;
   finalDec.innerHTML = "GAME OVER!!!"
 }
}

}
rockbtn.addEventListener('click',game);
paperbtn.addEventListener('click',game);
scissorsbtn.onclick = game;


again.onclick = () => {
   result.innerHTML = "Choose One!";
   playScore.innerHTML = 0;
   compScore.innerHTML = 0;
   showPlayer.className = "fas fa-hand-rock";
   comPlayer.className = "fas fa-hand-scissors";
   finalDec.innerHTML = "Try your luck !";
   computerScore = 0;
   playerScore = 0;

   rockbtn.disabled = false;
   paperbtn.disabled = false;
   scissorsbtn.disabled = false;

}

// function resetGame (event) {
//    result.innerHTML = "Choose One!";
//    playScore.innerHTML = "0";
//    compScore.innerHTML = "0";
//    showPlayer.className = "fas fa-hand-rock";
//    comPlayer.className = "fas fa-hand-scissors";
//    finalDec.innerHTML = "Try your luck !";

   // rockbtn.disabled = false;
   // paperbtn.disabled = false;
   // scissorsbtn.disabled = false;



// }


// again.addEventListener('click', resetGame);


















