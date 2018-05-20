Blockly.Blocks['setplayerhealth'] = {
  init: function() {
    this.appendValueInput("NUM_HEARTS")
        .setCheck("Number")
        .appendField("Set player health to");
    this.appendDummyInput()
        .appendField("hearts");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Player");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playerchat'] = {
  init: function() {
    this.appendValueInput("CHAT_MSG")
        .setCheck("String")
        .appendField("Make the player say ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fireprojectile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the player shoot a")
        .appendField(new Blockly.FieldDropdown([["arrow","ARROW"], ["egg","EGG"], ["fireball","FIREBALL"], ["wither skull","WITHER_SKULL"], ["blue wither skull","BLUE_WITHER_SKULL"], ["enderpearl","ENDERPEARL"], ["dragon fireball","DRAGON_FIREBALL"], ["snowball","SNOWBALL"]]), "PROJECTILE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playercommand'] = {
  init: function() {
    this.appendValueInput("PLAYER_COMMAND")
        .setCheck("String")
        .appendField("Make the player perform the command");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};