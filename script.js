let gameWidth = 3;
let gameHeight = 3;

const game = document.getElementById("game");

console.log(game);

const block = document.createElement("div");
block.classList.add("block");
game.appendChild(block);

// while (gameWidth!==0) {
// gameWidth--;
// if (gameWidth === 0) {

// }
// }

// for (let i; i <= gameWidth; i++) {
//   for (let j; j <= gameHeight; j++) {
//     game.appendChild(document.createElement("div"));
//     console.log(game.lastChild);
//   }
// }

// let blk = {
//   status: "pressed",
//   dataX: 2,
//   dataY: 3,
//   isMine: true,
//   isEmpty: false,
//   flag: false,
//   value: 3,
// };
