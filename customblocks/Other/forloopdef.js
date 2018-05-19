Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("REPETITIONS")
        .setCheck("Number")
        .appendField("Repeat ");
    this.appendDummyInput()
        .appendField("times");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};