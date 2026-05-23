const playerImg = new Image();
playerImg.src = "gracz.png"; 


playerImg.onload = () => console.log("PLAYER OK");
playerImg.onerror = () => console.log("PLAYER ERROR");


let player = {
  x: 1,  
  y: 1,  
  hp: 3  
};

function drawPlayer(ctx){
  
  if (playerImg.complete) {
   
  
    ctx.drawImage(playerImg, player.x * TILE, player.y * TILE, TILE, TILE);
  }
}

function movePlayer(dx, dy){
  let nx = player.x + dx; 
  let ny = player.y + dy;


  if(nx >= 0 && ny >= 0 && nx < COLS && ny < ROWS &&
     currentMap[ny][nx] !== 1 && canOpenDoor(nx, ny)){
    
    
    player.x = nx;
    player.y = ny;
  }
checkItems();
}
