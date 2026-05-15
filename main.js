
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