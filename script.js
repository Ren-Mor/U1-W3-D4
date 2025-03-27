const extractedNumbers = [];

function tableMaker() {
  const tableBlock = document.getElementById("table-block");

  for (let i = 1; i <= 90; i++) {
    const tD = document.createElement("div");
    tD.classList.add("cells");
    tD.textContent = i;
    tD.dataset.numero = i;

    tableBlock.appendChild(tD);
  }
}

function getNum() {
  if (extractedNumbers.length === 90) {
    alert("Hai estratto tutti i numeri!");
    return;
  }

  let numRandom;
  do {
    numRandom = Math.floor(Math.random() * 90 + 1);
  } while (extractedNumbers.includes(numRandom));

  extractedNumbers.push(numRandom);
  getCell(numRandom);
}

function getCell(num) {
  const tDivs = document.querySelectorAll(".cells");

  for (let i = 0; i < tDivs.length; i++) {
    if (parseInt(tDivs[i].dataset.numero) === num) {
      tDivs[i].classList.add("inEvidenza");
    }
  }
}

const pulsante = document.getElementById("extraction-button");
pulsante.addEventListener("click", getNum);

tableMaker();
