const fps = 60;
const interval = 1000 / fps;

function Squigglies(ctx) {

  function willUpdate(instance) {
    if (instance.x > ctx.canvas.width || instance.y > ctx.canvas.height) {
      instance.reset();
    }
  }

  // Collect all renderable instances here
  const renderQueue = [];

  let now;
  let then = Date.now();
  let delta;
  (function renderBuffer() {
    requestAnimationFrame(renderBuffer);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      then = now - (delta % interval);
      //willUpdate(this);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      renderQueue.map((instance) => {
        (instance.x > ctx.canvas.width || instance.y > ctx.canvas.height) ? instance.reset() : instance.update();
      })
    }
  })();

  return {
    Draw: function (reset) {

      this.reset = () => {
        Object.assign(this, reset())
        this.x = this.startX;
        this.y = this.startY;      
      };
      this.reset();
      this.ctx = ctx;


      this.update = () => {
        console.log('update');
      };

      this.start = () => {
        renderQueue.push(this);
      };
      return this;
    },
  };
}

export default Squigglies;