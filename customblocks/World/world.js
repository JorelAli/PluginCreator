Blockly.JavaScript['strikelightning'] = function(block) {
  var value_lightning = Blockly.JavaScript.valueToCode(block, 'LIGHTNING', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'player.getWorld().strikeLightning(' + value_lightning + ');\n';
  return code;
};