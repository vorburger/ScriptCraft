
command( 'helx', function ( parameters, player ) {
  var theDrone = new Drone(player);
theDrone.up().left().box(blocks.oak).down().fwd(3).cylinder0(blocks.diamond,8); 
});

command( 'r', function ( parameters, player ) {
	refresh();
});


function drawtree(aDrone, lengthx){
	for (var i=0; i<lengthx; i++){
		aDrone.box(blocks.oak);
		aDrone.fwd();
	}
	aDrone.turn();
	lengthx=lengthx/2;
	if (lengthx>1) {
		drawtree(aDrone, lengthx);
	}
}

	


command( 'tree', function ( parameters, player ) {
 var theDrone = new Drone(player);
	drawtree(theDrone, 64);
});


command( 'spar', function( parameters, sender ) {
   var type = (parameters[0]).toUpperCase();
    var entity = Packages.net.canarymod.Canary.factory().entityFactory.newEntity(Packages.net.canarymod.api.entity.EntityType[type], sender.location);
    entity.spawn();

} );


var utils = require('utils');

var scriptFolder = 'scriptcraft/plugins/blocklycraft';
var fileObject = new java.io.File(scriptFolder);

function watchMyFiles(folder){
		var names=folder.list();
		for (var i=0; i<names.length; i++){
			var fname=scriptFolder+"/"+names[i]; // TODO "\\" instead of "/" needed on Win, or OK? 
			console.log('watching '+fname );
			utils.watchFile(fname , function( fileModified ) { // refresh after any file modification
				refresh();  
			});
		}
}
function onChangeRefresh(){
	console.log( 'Monitoring folder '+scriptFolder);
	utils.watchFile(scriptFolder , function( folder ) { // check the folder
		console.log( folder + ' has changed !');
		watchMyFiles(fileObject);
	});
}
watchMyFiles(fileObject);
onChangeRefresh(); // start monitoring



	
function fileWatcher() {
	console.log( ' check');
	 var fileObject = new java.io.File(scriptFolder); // 'C:\\Users\\lauro\\Downloads\\CanaryMod-1.8.0-1.2.0-RC1\\scriptcraft\\plugins\\aldo_ben');//\\myscript.js
    var lm = fileObject.lastModified()
	console.log( 'time '+fileObject.name+lm);
  setTimeout( fileWatcher, 5000 );
};
//fileWatcher();
