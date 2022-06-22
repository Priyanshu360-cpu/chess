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
      const img = new Image();  
img.addEventListener('load', function() {
  let movement=0;
  for(let j=1;j<=8;j++){
  ctx.drawImage(img, movement+330, 595, 50, 38);
  movement=movement+85;
  console.log(movement)
  }
  console.log("done")
}, false);
img.src = './images/white_pawn.png'; 
    }
  }
  
  