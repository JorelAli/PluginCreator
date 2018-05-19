Blockly.JavaScript['for_loop'] = function(block) {
  var value_repetitions = Blockly.JavaScript.valueToCode(block, 'REPETITIONS', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(int i = 0; i < ' + value_repetitions + '; i++) {\n' + statements_name + '\n}\n';
  return code;
};