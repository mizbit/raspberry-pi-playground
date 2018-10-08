const five = require('johnny-five');
const PiIO = require('pi-io');

const board = new five.Board({
  io: new PiIO(),
  repl: false,
});

board.on('ready', function() {
  const proximity = new five.Proximity({
    controller: PiIO.HCSR04, // Custom controller
    triggerPin: 'GPIO23',
    echoPin: 'GPIO24'
  });

  proximity.on("change", function() {
    console.log("cm: ", this.cm);
  });
});
