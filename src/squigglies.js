import { getStaticRandom } from './utils';

const fps = 60;
const interval = 1000 / fps;

function Squigglies(ctx) {

  // Collect all renderable instances here
  const renderQueue = [];

  // Draw all instances in one go
  let now;
  let then = Date.now();
  let delta;
  (function renderBuffer() {
    requestAnimationFrame(renderBuffer);
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      then = now - (delta % interval);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      renderQueue.map(instance => instance.update())
    }
  })();

  return {
    Draw: function () {
      
      this.reset = () => {
        throw new Error('Reset function not provided');
      }

      this.getStaticRandom = getStaticRandom;

      // Assign a custom frame update function
      this.update = () => {
        throw new Error('Update function not provided');
      };

      this.start = () => {
        renderQueue.push(this);
      };
    },
  };
}

export default Squigglies;