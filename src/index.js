import Squigglies from './squigglies';
import createSnowFlake from './snowflake';
import {
  getAspectHeight,
  onResize,
  onDocumentLoad
} from './utils';

const angleInRadians = angle => angle * (Math.PI / 180);
const angleInDegrees = radian => radian * (180 / Math.PI);

// Flex container
const content = document.getElementById('content');
// Background
const bg = document.getElementById('background');
// Canvas
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
bg.appendChild(canvas);

const adjustDimensions = (multiplier) => {
  bg.width = document.body.scrollWidth * 1;
  bg.height = getAspectHeight(bg.width);
  canvas.width = bg.width;
  canvas.height = bg.height;
}
onResize(adjustDimensions)
onDocumentLoad(() => {
  adjustDimensions()
  foreground();
  background();
});

const ctx = canvas.getContext('2d');

//canvas.width = document.body.scrollWidth;
//canvas.height = document.body.scrollHeight;

const {Draw} = Squigglies(ctx);

ctx.strokeStyle = 'black';

const background = () => {
  const snowFlakeCount = 50;
  for (let s = 0; s < snowFlakeCount; s++) {
    createSnowFlake(ctx, Draw, {
      ttl: function () {
        return this.getStaticRandom(200, 480)
      },
      startX: function () {
        return Math.random() * canvas.width
      },
      startY: function () {
        return this.getStaticRandom(0, (canvas.height - canvas.height / 5))
      },
      travelX: function () {
        return (this.oX
          + (this.cycle
            + Math.cos(angleInRadians(this.cycle * this.getStaticRandom(1, 4)))
            * this.getStaticRandom(8, 9)
          )
          * this.getStaticRandom(-0.5, 1, 5)
        )
      },
      travelY: function () {
        return (this.oY
          - (this.cycle
            + Math.cos(angleInRadians(this.cycle * this.getStaticRandom(1, 5)))
            * this.getStaticRandom(1, 5)
          )
        )
      }
    });
  }
};

//foreground:  normal, slowly falling, fairly large flakes
const foreground = () => {
  const snowFlakeCount = 100;
  for (var s = 0; s < snowFlakeCount; s++) {
    createSnowFlake(ctx, Draw, {
      ttl: function () {
        return this.getStaticRandom(200, 320)
      },
      startX: function () {
        return Math.random() * canvas.width
      },
      startY: function () {
        return this.getStaticRandom(-(canvas.height / 4), (canvas.height - canvas.height / 5))
      },
      travelX: function () {
        return (this.oX
          + (this.cycle
            + Math.cos(angleInRadians(this.cycle * this.getStaticRandom(1, 4)))
            * this.getStaticRandom(8, 9)
          )
          * this.getStaticRandom(-0.5, 1, 5)
        )
      },
      travelY: function () {
        return (this.oY
          + (this.cycle
            + Math.cos(angleInRadians(this.cycle * this.getStaticRandom(1, 5)))
            * this.getStaticRandom(1, 5)
          )
        )
      }
    });
  }
}


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