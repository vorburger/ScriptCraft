var scriptcraftExtensions = require('./scriptcraftExtensions');
command( 'hello', function ( parameters, player ) {
var theDrone = new Drone(player);
theDrone.up();
theDrone.chkpt('start');
var timeoutStop = new Date().getTime()+500;
  scriptcraftExtensions.boxAlternate(theDrone,4,4,'15','14');
});