/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__squigglies__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__snowflake__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);




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
  bg.height = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* getAspectHeight */])(bg.width);
  canvas.width = bg.width;
  canvas.height = bg.height;
}
Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* onResize */])(adjustDimensions)
Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* onDocumentLoad */])(() => {
  adjustDimensions()
  foreground();
  background();
});

const ctx = canvas.getContext('2d');

//canvas.width = document.body.scrollWidth;
//canvas.height = document.body.scrollHeight;

const {Draw} = Object(__WEBPACK_IMPORTED_MODULE_0__squigglies__["a" /* default */])(ctx);

ctx.strokeStyle = 'black';

const background = () => {
  const snowFlakeCount = 50;
  for (let s = 0; s < snowFlakeCount; s++) {
    Object(__WEBPACK_IMPORTED_MODULE_1__snowflake__["a" /* default */])(ctx, Draw, {
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
    Object(__WEBPACK_IMPORTED_MODULE_1__snowflake__["a" /* default */])(ctx, Draw, {
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);


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

      this.getStaticRandom = __WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getStaticRandom */];

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

/* harmony default export */ __webpack_exports__["a"] = (Squigglies);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getStaticRandom = function(min, max) {
  const key = `${min}-${max}`;
  if (!this.randomTable[key]) {
    const range = max - min;
    this.randomTable[key] = min+(Math.random()*range)
  }
  return this.randomTable[key];
}
/* harmony export (immutable) */ __webpack_exports__["b"] = getStaticRandom;


const getAspectHeight = width => width*0.5625;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAspectHeight;


const onResize = (callback) => {
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        callback();
       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = onResize;


const onDocumentLoad = (callback) => {
  document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        callback();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = onDocumentLoad;



// https://github.com/substack/point-in-polygon/
const pointInPolygon = function(point, vs) {  
  var x = point[0], y = point[1];
  
  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];
      
      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  
  return inside;
};
/* unused harmony export pointInPolygon */


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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



/* harmony default export */ __webpack_exports__["a"] = (createSnowFlake);

/*
{
startX,
startY,
stepX,
stepY
}
*/

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map