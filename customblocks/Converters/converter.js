Blockly.JavaScript['block2location'] = function(block) {
  var value_block_in = Blockly.JavaScript.valueToCode(block, 'BLOCK_IN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_block_in + '.getLocation()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};