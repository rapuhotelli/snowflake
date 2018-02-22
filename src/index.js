import Squigglies from './squigglies';

const angleInRadians = angle => angle * (Math.PI / 180);
const angleInDegrees = radian => radian * (180 / Math.PI);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const { Draw } = Squigglies(ctx);

ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';

const d = new Draw(Math.random()*canvas.width, 50);
d.update = function update() {
  this.step +=2
  this.x = this.startX + (this.step*2)+Math.cos(angleInRadians(this.step*5))*5
  this.y = this.startY + (this.step)+Math.sin(angleInRadians(this.step*5))*5;
  ctx.fillRect(this.x, this.y, 5, 5);
};
//d.render();

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