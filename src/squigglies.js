const fps = 30;
const interval = 1000 / fps;

function Squigglies(ctx) {

  function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  return {
    Draw: function inner(startX, startY) {
      let now;
      let then = Date.now();
      let delta;

      this.startX = startX;
      this.startY = startY;
      this.x = startX;
      this.y = startY;
      this.step = 0;
      this.ctx = ctx;

      this.update = () => {
        console.log('update');
      };

      this.render = () => {
        requestAnimationFrame(this.render.bind(this));
        now = Date.now();
        delta = now - then;
        if (delta > interval) {
          // update time stuffs

          then = now - (delta % interval);
          // ... Code for Drawing the Frame ...
          clearCanvas();
          this.update();
        }
      };
      return this;
    },
  };
}

export default Squigglies;