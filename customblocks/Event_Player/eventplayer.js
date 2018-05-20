Blockly.JavaScript['setplayerhealth'] = function(block) {
  var value_num_hearts = Blockly.JavaScript.valueToCode(block, 'NUM_HEARTS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code = 'event.getPlayer().setHealth(' + (value_num_hearts * 2) + ');\n';

  return code;
};

Blockly.JavaScript['playerchat'] = function(block) {
  var value_chat_msg = Blockly.JavaScript.valueToCode(block, 'CHAT_MSG', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'event.getPlayer().chat' + value_chat_msg + ';\n';
  return code;
};

Blockly.JavaScript['fireprojectile'] = function(block) {
  var dropdown_projectile = block.getFieldValue('PROJECTILE');

  var header = "event.getPlayer().launchProjectile(";
  var projectileType;

  switch(dropdown_projectile) {
    case "ARROW":
      projectileType = "Arrow";
      break;
    case "EGG":
      projectileType = "Egg";
      break;
    case "FIREBALL":
      projectileType = "Fireball";
      break;
    case "WITHER_SKULL":
      projectileType = "WitherSkull";
      break;
    case "BLUE_WITHER_SKULL":
      break;
    case "ENDERPEARL":
      projectileType = "EnderPearl";
      break;
    case "DRAGON_FIREBALL":
      projectileType = "DragonFireball";
      break;
    case "SNOWBALL":
      projectileType = "Snowball";
      break;
  }

  var footer = ".class);"
  var code = header + projectileType + footer + '\n';

  //Deal with blue wither skulls
  if(dropdown_projectile == "BLUE_WITHER_SKULL") {
    code = "((WitherSkull) event.getPlayer().launchProjectile(WitherSkull.class)).setCharged(true);\n"
  }

  // TODO: Assemble JavaScript into code variable.
  return code;
};

Blockly.JavaScript['playercommand'] = function(block) {
  var value_player_command = Blockly.JavaScript.valueToCode(block, 'PLAYER_COMMAND', Blockly.JavaScript.ORDER_ATOMIC);
  //Make the player perform the input command
  var code = 'event.getPlayer().performCommand' + value_player_command + ';\n';
  return code;
};