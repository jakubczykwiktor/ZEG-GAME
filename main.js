
const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

function resizeCanvas(){

  canvas.width = COLS*TILE;

  canvas.height = ROWS*TILE;
}

function drawMap(){


  for(let y=0;y<ROWS;y++){

  
    for(let x=0;x<COLS;x++){
       
    
    if(currentMap[y][x]===1)
        ctx.fillStyle="gray";

    else
        ctx.fillStyle="black";

    ctx.fillRect(
        x*TILE,
        y*TILE,
        TILE,
        TILE
        );}
    }
}

function resetState(){

  // reset pozycji gracza
  player.x=1;
  player.y=1;

  // reset klucza
  hasKey=false;

  // reset zagadki
  puzzleSolved=false;
}


document.addEventListener("keydown",(e)=>{

  // ruch góra
  if(e.key==="ArrowUp")
    movePlayer(0,-1);

  // ruch dół
  if(e.key==="ArrowDown")
    movePlayer(0,1);

  // ruch lewo
  if(e.key==="ArrowLeft")
    movePlayer(-1,0);

  //ruch prawo
  if(e.key==="ArrowRight")
    movePlayer(1,0);

  
  checkWin();
});

function loop(){


  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawMap();
drawPlayer(ctx);
drawEnemy(ctx);
drawItems(ctx);

  requestAnimationFrame(loop);
}


loadLevel();

resizeCanvas();

loop();
