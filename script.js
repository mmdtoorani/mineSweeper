// let gameWidth = 3;
// let gameHeight = 3;

// const game = document.getElementById("game");

// const block = document.createElement("div");
// function createBlock(i, j) {
//   block.classList.add("block" + "_" + i + "_" + j);
//   block.classList.add("block");
//   game.appendChild(block.cloneNode(true));
// }

// let i = 1;
// let j = 1;
// for (i, j; i <= gameWidth || j <= gameHeight; i++, j++) {
//   if (gameWidth === 0) {
//     createBlock(i, j);
//     gameHeight--;
//   } else {
//     createBlock(i, j);
//     gameWidth--;
//   }
// }
// for (j; j <= gameHeight; j++) {
//   createBlock(i, j);
//   gameHeight--;
// }
// let i = 1;
// let j = 1;
// while ((gameWidth !== 0) | (gameHeight !== 0)) {
//   if (gameWidth === 0) {
//     createBlock(i, j);
//     i++;
//     gameHeight--;
//   }
//   createBlock(i, j);
//   j++;
//   gameWidth--;
// }

// const blk = {
//   func: function () {
//     return "Hello World";
//   },
//   status: "pressed", //pressed / unpressed
//   dataX: 2,
//   dataY: 3,
//   isMine: true,
//   isEmpty: false,
//   flag: false,
//   value: 3,
// };

// console.log(blk);
// console.log(blk.func());

let gameWidth = 6;
let gameHeight = 6;
let matrix = [];

for (let i = 1; i <= gameHeight; i++) {
  matrix[i] = [];
  for (let j = 1; j <= gameWidth; j++) {
    matrix[i][j] = i * gameWidth + j;
  }
}

function createBlock(i, j) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.classList.add(`block_${i}_${j}`);
  // block.innerText = value;
  return block;
}

const game = document.getElementById("game");

matrix.forEach((row, i) => {
  row.forEach((value, j) => {
    const blockElement = createBlock(i, j, value);
    game.appendChild(blockElement);
  });
  game;
});
