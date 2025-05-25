const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRounds = 5;

function playRound(playerChoice) {
  if (currentRound > maxRounds) return;  // Stop after 5 rounds

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('player-choice').textContent = `You chose: ${emojis[playerChoice]}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${emojis[computerChoice]}`;

  const result = getResult(playerChoice, computerChoice);
  document.getElementById('result').textContent = result;

  if (result.includes('win')) {
    playerScore++;
  } else if (result.includes('lose')) {
    computerScore++;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  if (currentRound === maxRounds) {
    setTimeout(showFinalResult, 1000);
    // Disable choices so user can't click after game ends
    document.querySelector('.choices').classList.add('disabled');
  } else {
    currentRound++;
    document.getElementById('round-info').textContent = `Round ${currentRound} of ${maxRounds}`;
  }
}


function getResult(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win this round!';
  } else {
    return 'You lose this round!';
  }
}

function showFinalResult() {
  let finalMsg = '';
  if (playerScore > computerScore) {
    finalMsg = "🏆 You won the match!";
  } else if (playerScore < computerScore) {
    finalMsg = "💀 You lost the match!";
  } else {
    finalMsg = "⚖️ It's a tie match!";
  }

  document.getElementById('result').textContent = finalMsg;
  document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;

  document.getElementById('player-choice').textContent = "You chose:";
  document.getElementById('computer-choice').textContent = "Computer chose:";
  document.getElementById('result').textContent = "";
  document.getElementById('round-info').textContent = `Round 1 of ${maxRounds}`;
  document.getElementById('player-score').textContent = 0;
  document.getElementById('computer-score').textContent = 0;
  document.getElementById('play-again').style.display = 'none';

  // Enable choices again for new game
  document.querySelector('.choices').classList.remove('disabled');
}
