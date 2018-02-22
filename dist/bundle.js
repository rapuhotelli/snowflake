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


const angleInRadians = angle => angle * (Math.PI / 180);
const angleInDegrees = radian => radian * (180 / Math.PI);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const { Draw } = Object(__WEBPACK_IMPORTED_MODULE_0__squigglies__["a" /* default */])(ctx);

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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Squigglies);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map