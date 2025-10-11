const Score = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Loses: 0,
  tye: 0,
};
function Reset() {
  Score.Win = 0;
  Score.Loses = 0;
  Score.tye = 0;
  let result = document.querySelector(".Result");
  result.innerHTML = `Wins:${Score.Win} Loses:${Score.Loses} Tyes:${Score.tye}`;

  localStorage.removeItem("score");
}

function computer() {
  let rand = Math.random();
  let comp = "";
  if (rand < 1 / 3) {
    comp = "Rock";
  } else if (rand > 1 / 3 && rand < 2 / 3) {
    comp = "Paper";
  } else {
    comp = "Sissor";
  }
  return comp;
}
function result(comp, user, Winner) {
  let result = document.querySelector(".Result");
  result.innerHTML = `Wins:${Score.Win} Loses:${Score.Loses} Tyes:${Score.tye}`;
  localStorage.setItem("score", JSON.stringify(Score));
  let choise = document.querySelector(".Choices");
  choise.innerHTML = `You <img class="size" src="${user}-emoji.png"> Computer <img class="size" src="${comp}-emoji.png">`;
  let winner = document.querySelector(".Winner");
  winner.innerHTML = `${Winner}`;
}

// let result=document.querySelector('p')
// result.textContent=`Wins:${Score.Win} Loses:${Score.Loses} Tyes:${Score.tye}`;
function userchoice(comp, user) {
  let Winner = "";
  if (user === "Rock") {
    if (comp === "Rock") {
      Score.tye = Score.tye + 1;
      Winner = "Tye";
    } else if (comp === "Sissor") {
      Score.Win = Score.Win + 1;
      Winner = "You Win";
    } else {
      Score.Loses = Score.Loses + 1;
      Winner = "You Lose";
    }
  } else if (user === "Paper") {
    if (comp === "Paper") {
      Score.tye = Score.tye + 1;
      Winner = "Tye";
    } else if (comp === "Sissor") {
      Score.Loses = Score.Loses + 1;
      Winner = "You Lose";
    } else {
      Score.Win = Score.Win + 1;
      Winner = "You Win";
    }
  } else {
    if (comp === "Sissor") {
      Score.tye = Score.tye + 1;
      Winner = "Tye";
    } else if (comp === "Rock") {
      Score.Loses = Score.Loses + 1;
      Winner = "You Lose";
    } else {
      Score.Win = Score.Win + 1;
      Winner = "You Win";
    }
  }
  result(comp, user, Winner);
}
