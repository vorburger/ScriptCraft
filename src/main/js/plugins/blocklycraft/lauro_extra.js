
var items = require('items');


var ItemType = Packages.net.canarymod.api.inventory.ItemType;
var Canary = Packages.net.canarymod.Canary;
var itemFactory = Canary.factory().itemFactory;

  


exports.piramid = function( drone, width, lenght, height ) {
while(width>=2&&lenght>=2&&height>=1){
     drone.box0(2,width,1,lenght);
	 drone.fwd();
	 drone.right();
	 width=width-2;
	 lenght=lenght-2;
	 drone.box (3,width,1,lenght);
	 drone.up();
	 height--;
	}
};


command( 'daytime', function ( parameters, player ) {
player.location.world.setTime(4000);

});


command( 'exp', function ( parameters, player ) {
var theDrone = new Drone(player);  
for (var count = 0; count < 50; count++) {
	theDrone.fwd();
	theDrone.fwd();


		player.world.makeExplosion( player, theDrone.getLocation(), 2.5, true );
	}
});
command( 'tor', function ( parameters, player ) {
var theDrone = new Drone(player); 
theDrone.hangtorch(); 

});


exports.boxAlternate = function(drone, width, lenght, material1, material2 ) {
	for (var count3 = 0; count3 < 2; count3++) {
    for (var count = 0; count < width/2; count++) {
      drone.box(material1);drone.fwd();drone.box(material2);drone.fwd();}
    drone.turn();for (var count2 = 0; count2 < lenght/2; count2++) {
      drone.box(material1);drone.fwd();drone.box(material2);drone.fwd();}
    drone.turn();
	}
};

