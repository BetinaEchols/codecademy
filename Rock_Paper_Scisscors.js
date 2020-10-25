//determining and validating user input.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'|| userInput === 'bomb'){
    return userInput;
  } else {
    console.log(`This is not a valid option. Please try again.`);
  }
};

//generating a computer input.
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0: 
    return 'rock'
    break;
    case 1:
    return 'paper'
    break;
    case 2:
    return 'scissors'
    break;
  }
};

//determining who is the winner - computer or user.
function determineWinner(userChoice,computerChoice){

  if(userChoice === computerChoice){
    return 'Tie';
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Paper covers rock.  You lose.';
    }else {
      return 'Rock destroys scissors. You win.';
    }
  }else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Scissors cut paper.  You lose.';
    }else {
      return 'Paper covers rock.  You win.';
    }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Rock destroys scissors.  You lose.';
    }else {
      return 'Scissors cut paper.  You win.';
    }
  }else if (userChoice === 'bomb'){
    return 'You blew the computer away.  You are the winner.';
  }else {
    return 'Game aborted.';
  }
};

//this function plays the game of rock paper scissors.
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();

  console.log('You threw: ' + choice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
};

//this call the function playGame.
playGame('bomb');