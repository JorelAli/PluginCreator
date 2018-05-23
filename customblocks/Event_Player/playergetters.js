Blockly.JavaScript['playerhealth'] = function(block) {
  var code = 'player.getHealth()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['playername'] = function(block) {
  var code = 'player.getDisplayName()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};