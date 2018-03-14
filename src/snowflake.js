
function createSnowFlake(ctx, Draw, config) {
  let d = new Draw();

  d.reset = function reset() {
    this.size = 3;
    Object.assign(this, config);
    this.randomTable = [];
    this.oX = this.startX();
    this.oY = this.startY();
    this.x = this.oX;
    this.y = this.oY;
    this.cycle = 0;
    this.opacity = 0;
  };

  d.reset();

  d.update = function update() {
    //console.log(this.cycle);
    if (this.x > ctx.canvas.width || this.y > ctx.canvas.height) this.reset();
    if (this.cycle >= this.ttl()) {
      this.reset();
    } else if (this.cycle > (this.ttl() - 100)) {
      this.opacity -= 0.01
    } else if (this.opacity < 1) {
      this.opacity += 0.02
    } 
    

    this.x = this.travelX(this.cycle);
    this.y = this.travelY(this.cycle);
    this.cycle++;
    ctx.save();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.restore();
  };
  d.start();
}



export default createSnowFlake;

/*
{
startX,
startY,
stepX,
stepY
}
*/