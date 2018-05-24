Blockly.JavaScript['playerhealth'] = function(block) {
  var code = 'player.getHealth()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['playername'] = function(block) {
  var code = 'player.getDisplayName()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['playertargetblock'] = function(block) {
  var code = 'player.getTargetBlock((java.util.Set<Material>) null, 256)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};