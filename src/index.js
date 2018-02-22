import Squigglies from './squigglies';

const angleInRadians = angle => angle * (Math.PI / 180);
const angleInDegrees = radian => radian * (180 / Math.PI);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const { Draw } = Squigglies(ctx);

ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';

const snowFlakeReset = function() {
  return {
    startX: Math.max(0, Math.random()*canvas.width-canvas.width/5),
    startY: Math.max(0, Math.random()*canvas.height-canvas.height/5),
    stepX: Math.random()*10,
    stepY: Math.random()*10,
    incrementX: 1+Math.random()*2,
    incrementY: 1+Math.random()*1
  }
}

function createSnowFlake() {
  let d = new Draw(snowFlakeReset);
  d.update = function update() {
    this.stepX += this.incrementX;
    this.stepY += this.incrementY;
    this.x = this.startX + (this.stepX)+Math.cos(angleInRadians(this.stepX*2))*5
    this.y = this.startY + (this.stepY)+Math.sin(angleInRadians(this.stepY*2))*5;
    ctx.fillRect(this.x, this.y, 5, 5);
  };
  d.start();
}

const snowFlakeCount = 10;
for (var s = 0; s < snowFlakeCount; s++) createSnowFlake();


// */
/*
const f = new Draw(150, 70);
f.update = function update() {
  ctx.clearRect(this.x, this.y, 5, 5);
  this.x += 2;
  this.y += 2;
  ctx.fillRect(this.x, this.y, 5, 5);
};
f.render();
// */