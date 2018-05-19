Blockly.JavaScript['playerhealth'] = function(block) {
  var code = 'event.getPlayer().getHealth()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['playername'] = function(block) {
  var code = 'event.getPlayer().getDisplayName()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};