
const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

function resizeCanvas(){

  canvas.width = COLS*TILE;

  canvas.height = ROWS*TILE;
}