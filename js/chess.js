function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      for(let i=0;i<8;i++){
      for(let j=0;j<8;j++){
          ctx.fillStyle=((i+j)%2==0)?"white":"black"
      ctx.fillRect(320+(j*85), 50+(i*85), 85, 85);
      }}
      ctx.strokeRect(320, 50, 680, 680);
      const white_pawn = new Image();  
      white_pawn.addEventListener('load', function() {
  let movement=0;
  for(let j=1;j<=8;j++){
  ctx.drawImage(white_pawn, movement+330, 595, 50, 38);
  movement=movement+85;
  }
  
}, false);
movement=0;
white_pawn.src = './images/white_pawn.png'; 
const black_pawn = new Image();  
black_pawn.src = './images/black_pawn.png'; 
black_pawn.addEventListener('load', function() {
  for(let j=1;j<=8;j++){
  ctx.drawImage(black_pawn, movement+330, 165, 50, 38);
  movement=movement+85;
  console.log(movement)
  }
  
}, false);
    }
  }
  
  