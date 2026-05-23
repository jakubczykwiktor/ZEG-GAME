
const enemyImg = new Image();
enemyImg.src = "wąz1.png";

let enemy = {
  x: 8,
  y: 8
};


function drawEnemy(ctx) {
  ctx.drawImage(enemyImg, enemy.x * TILE, enemy.y * TILE, TILE, TILE);
}