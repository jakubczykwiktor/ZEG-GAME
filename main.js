
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

  
  player.x=1;
  player.y=1;

  
  hasKey=false;

  
  puzzleSolved=false;
}

function checkWin(){

  
  if(currentMap[player.y][player.x]===2){

    
    if(!hasKey){

      alert("Weź klucz!");
      return;
    }
    
    if(!puzzleSolved){

      alert("Rozwiąż zagadkę!");
      return;
    }

    
    level++;

    if(level>maps.length){

      alert("KONIEC GRY!");

      // restart gry
      location.reload();

      return;
    }
    loadLevel();

    
    resizeCanvas();

    
    resetState();

    
    alert("Poziom "+level);

    
    document.getElementById("levelText").innerText =
      "POZIOM: " + level;

    
    document.getElementById("bottomLevelText").innerText =
      "POZIOM: " + level;
}
}

function updateHeartsUI(){

  
  document.getElementById("heartsText").innerText =
    "serca: " + player.hp;

  
  document.getElementById("topHeartsText").innerText =
    "serca: " + player.hp;
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


setInterval(moveEnemy,500);
function loop(){


  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawMap();
drawPlayer(ctx);
drawEnemy(ctx);
drawItems(ctx);

  requestAnimationFrame(loop);
}
function resetGame(){

  level = 1;

  
  loadLevel();

  
  player.x = 1;
  player.y = 1;
  player.hp = 3;

  
  hasKey = false;
  puzzleSolved = false;

  
  resizeCanvas();

  
  document.getElementById("levelText").innerText =
    "POZIOM: 1";

  document.getElementById("bottomLevelText").innerText =
    "POZIOM: 1";

  document.getElementById("heartsText").innerText =
    "serca: 3";

  document.getElementById("topHeartsText").innerText =
    "serca: 3";

  document.getElementById("coinsText").innerText =
    "klucze: 0";

  document.getElementById("topCoinsText").innerText =
    "klucze: 0";

  alert("Gra została zresetowana.");
}
const resetBtn = document.getElementById("resetBtn");

if(resetBtn){
  resetBtn.addEventListener("click", resetGame);
}

loadLevel();

resizeCanvas();

loop();
