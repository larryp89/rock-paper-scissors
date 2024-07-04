let computer_choice;
let player_score = 0
let computer_score = 0

function gen_rand_int() {
  let rand_int = Math.floor(Math.random() * 3);
  return rand_int
} 

function gen_comp_choice(){
  num = gen_rand_int()
  if(num == 0){
    return "rock"
  }
  else if (num == 1){
    return "paper"
  }
  else {
    return "scissors"
  }
}

function play_round(comp_choice, user_choice){
  if(comp_choice == user_choice){
    return "It's a tie"
  }
  if(comp_choice == "scissors" & user_choice == "rock" || comp_choice == "paper" & user_choice == "scissors" || comp_choice == "rock" & user_choice == "paper"){
    player_score ++
    return "Player wins"
  }
  else{
    computer_score++
    return "Computer wins"
  }
}

while(player_score <5 & computer_score <5 ){
  computer_choice = gen_comp_choice()
  user_choice = prompt("Select 'Rock', 'Paper', or 'Scissors'").toLowerCase()
  console.log(`Computer chose ${computer_choice}, player chose ${user_choice}`)
  console.log(play_round(computer_choice, user_choice))
  console.log(`Player score ${player_score} - ${computer_score} Computer Score`)
}

if (player_score > computer_score){
  console.log("Player wins!")
}
else{
  console.log("Compski wins!")
}
console.log("We done here.")