
const enemyImg = new Image();
enemyImg.src = "grafika/wąz1.png";

let enemy = {
  x: 5,
  y: 5
};


function drawEnemy(ctx) {
  ctx.drawImage(enemyImg, enemy.x * TILE, enemy.y * TILE, TILE, TILE);
}

function moveEnemy() {
  
  const dirs = [
    {x:0, y:-1}, {x:0, y:1}, {x:-1, y:0}, {x:1, y:0}
  ];

  
  const r = dirs[Math.floor(Math.random() * dirs.length)];

  const nx = enemy.x + r.x; 
  const ny = enemy.y + r.y;


  if (currentMap[ny][nx] !== 1) {
    enemy.x = nx;
    enemy.y = ny;
  }
} 