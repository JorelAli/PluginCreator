Blockly.Blocks['writetoconsole'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String")
          .appendField("Write");
      this.appendDummyInput()
          .appendField("to the console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };