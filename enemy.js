
const enemyImg = new Image();
enemyImg.src = "wąz1.png";

let enemy = {
  x: 8,
  y: 8
};


function drawEnemy(ctx) {
  ctx.drawImage(enemyImg, enemy.x * TILE, enemy.y * TILE, TILE, TILE);
}

function moveEnemy() {
  // Definicja możliwych kierunków: góra, dół, lewo, prawo
  const dirs = [
    {x:0, y:-1}, {x:0, y:1}, {x:-1, y:0}, {x:1, y:0}
  ];
}