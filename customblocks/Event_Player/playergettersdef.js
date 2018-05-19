Blockly.Blocks['playerhealth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("the player's health");
    this.setOutput(true, "Number");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playername'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("the player's name");
    this.setOutput(true, "String");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};