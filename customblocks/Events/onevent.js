Blockly.JavaScript['on_event'] = function(block) {
  var dropdown_event_type = block.getFieldValue('EVENT_TYPE');
  var statements_event = Blockly.JavaScript.statementToCode(block, 'EVENT');
  // TODO: Assemble JavaScript into code variable.

  var eventName;

  switch(dropdown_event_type) {
    case 'JOIN':
      eventName = "PlayerJoinEvent";
      break;
    case 'LEAVES':
      eventName = "PlayerQuitEvent";
      break;
    case 'DIES':
      eventName = "PlayerDeathEvent";
      break;
    case 'BREAKBLOCK':
      eventName = "BlockBreakEvent";
      break;
    case 'PLACEBLOCK':
      eventName = "BlockPlaceEvent";
      break;
  }

  var code = "@EventHandler\npublic void on" + eventName + "(" + eventName + " event) {\n" + statements_event + "}\n";
  return code;
};

Blockly.JavaScript['playerinteractevent'] = function(block) {
  var dropdown_interact_action_click = block.getFieldValue('INTERACT_ACTION_CLICK');
  var dropdown_interact_action_block = block.getFieldValue('INTERACT_ACTION_BLOCK');
  var statements_player_interact_event = Blockly.JavaScript.statementToCode(block, 'PLAYER_INTERACT_EVENT');
  // TODO: Assemble JavaScript into code variable.

  var clickType;
  var blockType;

  //click type
  if(dropdown_interact_action_click == "LEFT_CLICK") {
    clickType = "LEFT_CLICK_";
  } else {
    clickType = "RIGHT_CLICK_";
  }

  if(dropdown_interact_action_block == "BLOCK") {
    blockType = "BLOCK";
  } else {
    blockType = "AIR";
  }

  var code = "@EventHandler\npublic void onInteract(PlayerInteractEvent event) {\n" +
  "if(event.getAction().equals(Action." + clickType + blockType + ")) {\n" +
  statements_player_interact_event + "\n}\n}\n"

  return code;
};