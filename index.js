var leap      = require('leapjs')
var controller  = new leap.Controller()
controller.connect();

function onServiceStreaming() {
    console.log("Service started streaming event");
}
controller.on('streamingStarted', onServiceStreaming)

function onFrame(frame) {
  for(var p = 0; p < frame.pointables.length; p++){
    var pointable = frame.pointables[0]
    console.log(pointable.stabilizedTipPosition)
	}
}
controller.on('frame', onFrame)