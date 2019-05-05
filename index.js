// VERSION SIMPLE:
// var options=["rock","paper","scissors"];
// var rock=document.getElementById("r");
// var paper=document.getElementById("p");
// var scissors=document.getElementById("s");
// function beginGameR(){
//   var randNum=Math.floor(Math.random()*3);
//   var computerChoice=options[randNum];
//   console.log(computerChoice);
//     if(computerChoice=="scissors"){
//       document.getElementById("finalResult").innerText="rock wins over scissors";
//     }else if(computerChoice=="paper"){
//       document.getElementById("finalResult").innerText="rock looses over paper";
//     }else{
//       document.getElementById("finalResult").innerText="it is a tie";
//     }
// }
// rock.addEventListener("click",beginGameR);
// // paper.addEventListener("click",beginGameP);
// // scissors.addEventListener("click",beginGameS);


let userScore=0;
let computerScore=0;
let userScore_span=document.getElementById("user-score");
let computerScore_span=document.getElementById("computer-score");
let scoreBoard_div=document.querySelector(".score-board");
let result_p=document.querySelector(".result>p");
let rock_div=document.getElementById("r");
let scissors_div=document.getElementById("s");
let paper_div=document.getElementById("p");

function getComputerChoice(){
  const choices=["r","p","s"];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function convertToLetter(letter){
  if(letter==="r") return "Rock";
  if(letter==="p") return "Paper";
  if(letter==="s") return "Scissors";
}
function win(userChoice,computerChoice){
  console.log("WIN");
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerText=computerScore;
  result_p.innerHTML=convertToLetter(userChoice)+" beats "+convertToLetter(computerChoice)+". You win!";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")},1000);

}
function loose(userChoice,computerChoice){
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerText=computerScore;
  result_p.innerHTML=convertToLetter(userChoice)+" looses "+convertToLetter(computerChoice)+". You loose! ";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow")},1000);


}
function draw(userChoice,computerChoice){
  userScore_span.innerHTML=userScore;
  computerScore_span.innerText=computerScore;
  result_p.innerHTML=convertToLetter(userChoice)+" it is the same "+convertToLetter(computerChoice)+". It is a draw!";
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("grey-glow")},1000);

}

function game(userChoice){
  console.log("you clicked on: "+userChoice);
  let computerChoice=getComputerChoice();
  console.log("this is the computer hoice" +computerChoice);

  switch (userChoice+computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    console.log("wins");
    win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    console.log("loose");
    loose(userChoice,computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
    console.log("tie");
    draw(userChoice,computerChoice);
      break;
  }
}
function main(){
  rock_div.addEventListener("click",function(){
    game("r");
  });
  scissors_div.addEventListener("click",function(){
    game("s");
  });
  paper_div.addEventListener("click",function(){
    game("p");
  });
}

main();
