function beginner() {
  // TODO: this function should convert the grid of game into an easy game
}

function intermediate() {
  // TODO: this function should convert the grid of game into an medium level game
}

function expert() {
  // TODO: this function should convert the grid of game into an hard game
}

function custome() {
  // TODO: By this function user can set width and height and count of mins
}

function newGame() {
  // TODO: this function should restart the game
}

function createGrid(width, height) {
  // this function should create grid of blocks by given width and height
  let matrix = [];
  for (let i = 1; i <= height; i++) {
    matrix[i] = [];
    for (let j = 1; j <= width; j++) {
      matrix[i][j] = i * width + j;
    }
  }

  function createBlock(i, j) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.classList.add(`block_${i}_${j}`);
    return block;
  }

  const game = document.getElementById("game");

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      const blockElement = createBlock(i, j);
      game.appendChild(blockElement);
    });
    game;
  });
}

function isEmpty(block) {
  // TODO: this function return true if the block is empty
}

function isMine(block) {
  // TODO: this function return true if the block is mine
}
