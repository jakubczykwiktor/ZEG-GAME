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