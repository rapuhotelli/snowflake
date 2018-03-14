export const getStaticRandom = function(min, max) {
  const key = `${min}-${max}`;
  if (!this.randomTable[key]) {
    const range = max - min;
    this.randomTable[key] = min+(Math.random()*range)
  }
  return this.randomTable[key];
}

export const getAspectHeight = width => width*0.5625;

export const onResize = (callback) => {
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

export const onDocumentLoad = (callback) => {
  document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        callback();
    }
  }
}


// https://github.com/substack/point-in-polygon/
export const pointInPolygon = function(point, vs) {  
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