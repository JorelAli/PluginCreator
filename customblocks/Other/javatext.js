Blockly.JavaScript['java_text'] = function(block) {
  var text_java_text_value = block.getFieldValue('JAVA_TEXT_VALUE');
  return ['"' + text_java_text_value + '"', Blockly.JavaScript.ORDER_NONE];
};