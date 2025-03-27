const appNums = [];

function tableMaker() {
  const tableBlock = document.getElementById("table-block");

  for (let i = 1; i <= 90; i++) {
    const tD = document.createElement("div");
    tD.classList.add("cells");
    tD.textContent = i; // Il numero è memorizzato direttamente come contenuto della cella

    tableBlock.appendChild(tD);
  }
}

function getNum() {
  if (appNums.length === 90) {
    alert("Hai estratto tutti i numeri!");
    return;
  }

  let numRandom;
  do {
    numRandom = Math.floor(Math.random() * 90 + 1);
  } while (appNums.includes(numRandom));

  appNums.push(numRandom);
  getCell(numRandom);
}

function getCell(num) {
  const tDivs = document.querySelectorAll(".cells");

  for (let i = 0; i < tDivs.length; i++) {
    // Confronta il numero estratto con il contenuto testuale della cella
    if (parseInt(tDivs[i].textContent) === num) {
      tDivs[i].classList.add("inEvidenza");
    }
  }
}

const pulsante = document.getElementById("extraction-button");
pulsante.addEventListener("click", getNum);

tableMaker();
