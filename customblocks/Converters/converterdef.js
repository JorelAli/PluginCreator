Blockly.Blocks['block2location'] = {
  init: function() {
    this.appendValueInput("BLOCK_IN")
        .setCheck("Block")
        .appendField("Convert block to a location");
    this.setOutput(true, "Location");
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};