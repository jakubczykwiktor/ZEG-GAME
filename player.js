const playerImg = new Image();
playerImg.src = "gracz.png"; 


playerImg.onload = () => console.log("PLAYER OK");
playerImg.onerror = () => console.log("PLAYER ERROR");
