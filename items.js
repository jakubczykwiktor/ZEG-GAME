const keyImg = new Image();
keyImg.src = "klucz.png";
  
const doorImg = new Image();
doorImg.src = "drzwi.png";

const puzzleImg = new Image();
puzzleImg.src = "grafikapienadza.png";

let hasKey = false;
let puzzleSolved = false;
let coins = 0;

function drawItems(ctx){
  for(let y=0;y<ROWS;y++){
    for(let x=0;x<COLS;x++){
      if(currentMap[y][x]===3) ctx.drawImage(keyImg,x*TILE,y*TILE,TILE,TILE);    // 3 = Klucz
      if(currentMap[y][x]===4) ctx.drawImage(puzzleImg,x*TILE,y*TILE,TILE,TILE); // 4 = Zagadka/Moneta
      if(currentMap[y][x]===2) ctx.drawImage(doorImg,x*TILE,y*TILE,TILE,TILE);   // 2 = Wyjście
    }
  }
}