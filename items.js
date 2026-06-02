const keyImg = new Image();
keyImg.src = "grafika/klucz.png";
  
const doorImg = new Image();
doorImg.src = "grafika/drzwi.png";

const puzzleImg = new Image();
puzzleImg.src = "grafika/grafikapienadza.png";

const medkitImg = new Image();
medkitImg.src = "grafika/apteczka.png";

const trapImg = new Image();
trapImg.src = "grafika/pulapka.png";

let hasKey = false;
let puzzleSolved = false;
 coins = 0;

function drawItems(ctx){
  for(let y=0;y<ROWS;y++){
    for(let x=0;x<COLS;x++){
      if(currentMap[y][x]===3) ctx.drawImage(keyImg,x*TILE,y*TILE,TILE,TILE);    // 3 = Klucz
      if(currentMap[y][x]===4) ctx.drawImage(puzzleImg,x*TILE,y*TILE,TILE,TILE); // 4 = Zagadka/Moneta
      if(currentMap[y][x]===2) ctx.drawImage(doorImg,x*TILE,y*TILE,TILE,TILE);   // 2 = Wyjście
      
      if(currentMap[y][x]===5) ctx.drawImage(medkitImg,x*TILE,y*TILE,TILE,TILE); // 5 = Apteczka
      if(currentMap[y][x]===6) ctx.drawImage(trapImg,x*TILE,y*TILE,TILE,TILE); // 6 = Pułapka
  }
}
}

function checkItems(){
  if(currentMap[player.y][player.x]===3){
    hasKey=true;
    coins++;

    // Aktualizacja licznika w interfejsie HTML
    document.getElementById("coinsText").innerText = "klucze: " + coins;
    document.getElementById("topCoinsText").innerText = "klucze: " + coins;

    currentMap[player.y][player.x]=0; // Usuwa klucz z mapy (zmienia na podłogę)
    alert("Masz klucz!");
  }

  if(currentMap[player.y][player.x] === 5){

  player.hp++;

  updateHeartsUI();

  currentMap[player.y][player.x] = 0;

  alert("Znaleziono apteczkę! +1 HP");
}
}



function canOpenDoor(x,y){
  if(currentMap[y][x]===4){
    if(!hasKey){
      alert("Najpierw klucz!");
      return false; // Blokuje ruch, jeśli nie masz klucza
    }

    if(!puzzleSolved){
      startPuzzle(); // Aktywuje minigrę/zagadkę
      return false; // Blokuje ruch do czasu rozwiązania
    }

    currentMap[y][x]=0; // Usuwa przeszkodę po rozwiązaniu
  }
  return true; // Pozwala na ruch
}