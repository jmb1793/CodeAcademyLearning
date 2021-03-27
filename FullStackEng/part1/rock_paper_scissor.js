//Rock, Paper, Scissors Game
//Practice Functions and Control Flow

const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput !== 'rock'&&userInput !== 'paper'&&userInput !== 'scissors'){
      console.log('Error: Need to pick either rock, paper or scissors');
    }
    return userInput;}
  
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    
    switch(choice){
      case 0:
          return 'rock';
          break;
      case 1:
          return 'scissors';
          break;
      case 2:
          return 'paper'
          break;
      default:
          break;
    }}
  
  const determineWinner= (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return `You both selected ${userChoice}, it\'s a tie!`;
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return `You selected ${userChoice} and computer chose ${computerChoice}, Computer Wins!`;
      } else {
        return `You selected ${userChoice} and computer chose ${computerChoice}, You Win!`;
       }}
    
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return `You selected ${userChoice} and computer chose ${computerChoice}, Computer Wins!`;
      } else {
          return `You selected ${userChoice} and computer chose ${computerChoice}, You Win!`;
       }
      }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return `You selected ${userChoice} and computer chose 
          ${computerChoice}, Computer Wins!`;
      } else {
        return `You selected ${userChoice} and computer chose 
          ${computerChoice}, You Win!`;
       }}
  
  }
  
  let userinput = "Rock"
  console.log(determineWinner(getUserChoice(userinput),getComputerChoice()));