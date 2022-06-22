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

const white_elephant=new Image();
white_elephant.src='./images/white_elephant.png';
white_elephant.addEventListener('load', function() {
  ctx.drawImage(white_elephant, 330, 680, 50, 38);
  ctx.drawImage(white_elephant, 85*11, 680, 50, 38);
}, false);

const black_elephant=new Image();
black_elephant.src='./images/black_elephant.png';
black_elephant.addEventListener('load', function() {
  ctx.drawImage(black_elephant, 330, 85, 50, 38);
  ctx.drawImage(black_elephant, 85*11, 85, 50, 38);
}, false);

const white_horse=new Image();
white_horse.src='./images/white_horse.png';
white_horse.addEventListener('load', function() {
  ctx.drawImage(white_horse, 330+85, 680, 50, 38);
  ctx.drawImage(white_horse, 85*10, 680, 50, 38);
}, false);

const white_knight=new Image();
white_knight.src='./images/white_knight.png';
white_knight.addEventListener('load', function() {
  ctx.drawImage(white_knight, 330+85+85, 680, 50, 38);
  ctx.drawImage(white_knight, 85*9, 680, 50, 38);
}, false);

const white_queen=new Image();
white_queen.src='./images/white_queen.png';
white_queen.addEventListener('load', function() {
  ctx.drawImage(white_queen, 330+85+85+85, 680, 50, 38);
}, false);

const white_king=new Image();
white_king.src='./images/white_king.png';
white_king.addEventListener('load', function() {
  ctx.drawImage(white_king, 330+85+85+85+85, 680, 50, 38);
}, false);

const black_horse=new Image();
black_horse.src='./images/black_horse.png';
black_horse.addEventListener('load', function() {
  ctx.drawImage(black_horse, 330+85, 85, 50, 38);
  ctx.drawImage(black_horse, 85*10, 85, 50, 38);
}, false);

const black_knight=new Image();
black_knight.src='./images/black_knight.png';
black_knight.addEventListener('load', function() {
  ctx.drawImage(black_knight, 330+85+85, 85, 50, 38);
  ctx.drawImage(black_knight, 85*9, 85, 50, 38);
}, false);

const black_queen=new Image();
black_queen.src='./images/black_queen.png';
black_queen.addEventListener('load', function() {
  ctx.drawImage(black_queen, 330+85+85+85, 85, 50, 38);
}, false);

const black_king=new Image();
black_king.src='./images/black_king.png';
black_king.addEventListener('load', function() {
  ctx.drawImage(black_king, 330+85+85+85+85, 85, 50, 38);
}, false);
    }
  }
  
  