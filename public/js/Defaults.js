var nodesjs = new NodesJs({
    id: 'nodes',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 1,
    lineSize: 0.05,
    particleColor: [0, 0, 0, 0.9],
    lineColor: [255,255, 255,0.3],
    backgroundFrom: [255, 255, 255],
    backgroundTo: [250, 250, 250],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30: 100,
    speed: 50,
    pointerCircleRadius: 150
});

window.onresize = function () {
        nodesjs.setWidth(window.innerWidth);
        nodesjs.setHeight(window.innerHeight);
    };
