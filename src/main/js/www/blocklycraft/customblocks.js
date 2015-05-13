	function getObjNames(list, ids) { // extract the needed objects from the main list
		var shortList = []
		for (i = 0; i < ids.length; i++) {
			shortList[i]=[list[ids[i]], "'"+ids[i]+"'"]
		}
		return shortList ; 
	}


	var objects = getObjNames(Blockly.Msg.OBJNAMES , [141, 142, 175, 81, 92, 54, 58, 61, 64, 65, 66, 68, 37, 46, 50, 51, 27]);    
	var blocks = getObjNames(Blockly.Msg.OBJNAMES , [0, 1, 2, 3, 4, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 30, 49, 56, 73, 79, 80, 89, 129]);    


Blockly.Blocks['box'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(160);
		    this.appendDummyInput()
		        .appendField(Blockly.Msg.M_MATERIAL);
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown(blocks), "Material");
		    
		    
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['objects'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(160);
		    this.appendDummyInput()
		        .appendField(Blockly.Msg.M_OBJECT);
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown(objects), "Material");
		    
		    
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['command'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(120);
		    this.appendValueInput("param")
		        .setCheck("String")
		        .appendField("Command");
		    this.appendStatementInput("statements")
		        .setCheck("null");
		    this.setInputsInline(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['drone'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(120);
		    this.appendValueInput("param")
		        .setCheck("String")
		        .appendField(Blockly.Msg.M_DRONE);
		    this.appendStatementInput("statements")
		        .setCheck("null");
		    this.setInputsInline(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['drone_move'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(120);
		    this.appendDummyInput()
	        .appendField(Blockly.Msg.M_MOUVEMENT);
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown([
		                                                ["su", "up()"], 
		                                                ["giu", "down()"], 
		                                                ["in avanti", "fwd()"], 
		                                                ["in dietro", "back()"],
		                                                ["destra", "right()"], 
		                                                ["sinistra", "left()"],
		                                                ["gira a destra", "turn()"],
		                                                ["gira a sinistra", "turn(2)"],
		                                                ["ritorna alla partenza", "move('start')"],
		                                                ["salva questa partenza", "chkpt('start')"]
		                                               ]), "direction");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};
Blockly.Blocks['drone_tree'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(120);
		    this.appendDummyInput()
	        .appendField("Extra");
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown([
		                                                ["quercia", "oak()"], 
		                                                ["betulla", "birch()"], 
		                                                ["mogano", "jungle()"], 
		                                                ["abete", "spruce()"], 
		                                                ["letto", "bed()"], 
		                                                ["porta", "door( blocks.door_wood )"] 
		                                               ]), "direction");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['spawner'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(20);
		    this.appendDummyInput()
		        .appendField("Animali");
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown([
		                                                ["pipistrello", "Bat"], 
		                                                ["pollo", "Chicken"], 
		                                                ["mucca", "COW"], 
		                                                ["maiale", "PIG"], 
		                                                ["coniglio", "RABBIT"], 
		                                                ["lupo", "WOLF"], 
		                                                ["pecora", "Sheep"], 
		                                                ["cavallo", "Horse"], 
		                                                ["ocelot", "OCELOT"]]), "NAME");
		    
		    
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['circle'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(260);
		    this.appendDummyInput()
		        .appendField("Cerchio");
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown([["vuoto", "0"], ["pieno", " "]]), "fill");
		    this.appendValueInput("radius")
		        .setCheck("Number")
		        .appendField("raggio");
		    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(blocks), "material");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['rectangle'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(260);
		    this.appendDummyInput()
		        .appendField("Rettangolo");
		    this.appendDummyInput()
		        .appendField(new Blockly.FieldDropdown([["vuoto", "0"], ["pieno", " "]]), "fill");
		    this.appendValueInput("width")
		        .setCheck("Number")
		        .appendField("larghezza");
		    this.appendValueInput("lenght")
		        .setCheck("Number")
		        .appendField("lunghezza");
		    this.appendDummyInput()
	        .appendField("materiale");
		    this.appendDummyInput()
	        .appendField(new Blockly.FieldDropdown(blocks), "material");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['mountain'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(260);
		    this.appendDummyInput()
		        .appendField("mountain");
		    this.appendValueInput("width")
		        .setCheck("Number")
		        .appendField("width");
		    this.appendValueInput("lenght")
	        .setCheck("Number")
	        .appendField("lenght");
		    this.appendValueInput("height")
	        .setCheck("Number")
	        .appendField("height");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};

Blockly.Blocks['alternator'] = {
		  init: function() {
		    this.setHelpUrl('http://www.example.com/');
		    this.setColour(260);
		    this.appendDummyInput()
		        .appendField("Rettangolo");
		    this.appendValueInput("width")
		        .setCheck("Number")
		        .appendField("larghezza");
		    this.appendValueInput("lenght")
	        .setCheck("Number")
	        .appendField("lunghezza");
		    this.appendDummyInput()
	        .appendField("materiali");
		    this.appendDummyInput()
	        .appendField(new Blockly.FieldDropdown(blocks), "material1");
		    this.appendDummyInput()
	        .appendField(new Blockly.FieldDropdown(blocks), "material2");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true);
		    this.setNextStatement(true);
		    this.setTooltip('');
		  }
		};