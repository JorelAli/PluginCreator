Blockly.Blocks['on_event'] = {
  init: function() {
    this.appendStatementInput("EVENT")
        .setCheck(null)
        .appendField("When the player ")
        .appendField(new Blockly.FieldDropdown([["joins the server","JOIN"], ["leaves the server","LEAVES"], ["dies","DIES"], ["breaks a block","BREAKBLOCK"], ["places a block","PLACEBLOCK"]]), "EVENT_TYPE");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playerinteractevent'] = {
  init: function() {
    this.appendStatementInput("PLAYER_INTERACT_EVENT")
        .setCheck(null)
        .appendField("When a player")
        .appendField(new Blockly.FieldDropdown([["left clicks","LEFT_CLICK"], ["right clicks","RIGHT_CLICK"]]), "INTERACT_ACTION_CLICK")
        .appendField(new Blockly.FieldDropdown([["the air","AIR"], ["a block","BLOCK"]]), "INTERACT_ACTION_BLOCK");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};