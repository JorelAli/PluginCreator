Blockly.Blocks['strikelightning'] = {
  init: function() {
    this.appendValueInput("LIGHTNING")
        .setCheck("Location")
        .appendField("Strike lightning at");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};