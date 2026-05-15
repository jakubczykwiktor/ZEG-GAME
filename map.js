const TILE= 32;

let level =1;
let ROWS;
let COLS;

// 0- podloga, 1-sciana, 2- wyjscie, 3-klucz, 4- zagadka
//mapa 9x9
const maps = [
[
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,2,1],
    [1,0,1,1,1,1,0,1,1],
    [1,0,0,0,0,1,0,0,1],
    [1,1,1,3,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1],
    [1,0,0,0,4,0,0,0,1],
    [1,1,1,1,1,1,1,1,1],
],






];

let currentMap = maps[0];


function updateSize() {
  ROWS = currentMap.length;          
  COLS = currentMap[0].length;       
}
function loadLevel() {
  
  currentMap = maps[level - 1];
  updateSize();
}

