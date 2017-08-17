var leap      = require('leapjs')
var controller  = new leap.Controller()
controller.connect();

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
	var redLED = new five.Led(11)
	var greenLED = new five.Led(10)
	var blueLED = new five.Led(9)

	redLED.on()
  greenLED.on()
  blueLED.on()

  function onServiceStreaming() {
    console.log('Service started streaming event');
	}
	controller.on('streamingStarted', onServiceStreaming)

	function onFrame(frame) {
	  for(var p = 0; p < frame.pointables.length; p++){
	    var pointable = frame.pointables[0]
	    console.log(pointable.stabilizedTipPosition)
	      redLED.brightness(pointable.stabilizedTipPosition[0])
  			greenLED.brightness(pointable.stabilizedTipPosition[1])
  			blueLED.brightness(pointable.stabilizedTipPosition[2])
		}
	}
	controller.on('frame', onFrame)
});