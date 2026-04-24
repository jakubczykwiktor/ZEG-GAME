const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE = 40;
const ROWS = 10;
const COLS = 10;

canvas.width = COLS * TILE;
canvas.height = ROWS * TILE;

// 0 = puste, 1 = ściana
const map = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,1,0,1,1],
  [1,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,1,1,1,1,0,1],
  [1,1,1,0,0,0,0,1,0,1],
  [1,0,0,0,1,1,0,0,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1],
];

// rysowanie mapy
function drawMap() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (map[y][x] === 1) {
        ctx.fillStyle = "gray";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
    }
  }
}

// pętla gry
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

gameLoop();
