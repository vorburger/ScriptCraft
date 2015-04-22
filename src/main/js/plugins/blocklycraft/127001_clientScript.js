var lauro_extra = require('./lauro_extra');
command( 'michael2', function ( parameters, player ) {
var theDrone = new Drone(player);
theDrone.up();
theDrone.chkpt('start');
var timeoutStop = new Date().getTime()+500;
  lauro_extra.boxAlternate(theDrone,2,5,12,13);});
