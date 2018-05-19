Blockly.JavaScript['writetoconsole'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "getLogger().info" + value_name + ';\n';
  return code;
};