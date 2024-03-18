function levelSetting(gameWidth, gameHeight, h, w) {
  // this is just for not to repeat the same thing
  // h = the height of thegrid of blocks (game)
  // w = the width of the element with class main

  const mainContainer = document.querySelector(".main");
  game.innerHTML = "";
  game.style.height = h + "px";
  mainContainer.style.width = w + "px";
  createGrid(gameWidth, gameHeight);
}

function beginner() {
  // this function convert the grid of game into an easy game
  levelSetting(9, 9, 225, 290);
}

function intermediate() {
  // this function convert the grid of game into an medium level game
  levelSetting(16, 16, 400, 466);
}

function expert() {
  // this function convert the grid of game into an hard game
  levelSetting(16, 30, 400, 816);
}

function custome() {
  // TODO: By this function user can set width and height and count of mins
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
    block.classList.add(`block_${j}_${i}`);
    block.setAttribute("xpos", j);
    block.setAttribute("ypos", i);
    block.addEventListener("mousedown", function () {
      this.style.backgroundImage = "url(./img/pressed.svg)";
      this.addEventListener("mouseout", function () {
        this.style.backgroundImage = "url(./img/closed.svg)";
      });
      this.addEventListener("mouseup", function () {
        this.style.backgroundImage = "url(./img/closed.svg)";
      });
    });

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

function newGame() {
  // TODO: this function should restart the game
}
