const playerImg = new Image();
playerImg.src = "gracz.png"; 


playerImg.onload = () => console.log("PLAYER OK");
playerImg.onerror = () => console.log("PLAYER ERROR");


let player = {
  x: 1,  
  y: 1,  
  hp: 3  
};