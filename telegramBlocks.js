// Define custom blocks for Telegram bot
Blockly.Blocks['on_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('When message received');
    this.appendStatementInput('MESSAGE_HANDLER')
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('Triggered when a new message is received');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['send_message'] = {
  init: function() {
    this.appendValueInput('MESSAGE')
        .setCheck('String')
        .appendField('Send message');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Send a message to the user');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('Hello!'), 'TEXT');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Text input');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if_contains'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('If message contains');
    this.appendStatementInput('THEN')
        .setCheck(null)
        .appendField('then');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Check if message contains specific text');
    this.setHelpUrl('');
  }
};

// Command Handler Block
Blockly.Blocks['on_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('When command')
        .appendField(new Blockly.FieldTextInput('/start'), 'COMMAND');
    this.appendStatementInput('COMMAND_HANDLER')
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('Triggered when a specific command is received');
    this.setHelpUrl('');
  }
};

// Inline Keyboard Button Block
Blockly.Blocks['inline_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Button')
        .appendField(new Blockly.FieldTextInput('Click Me'), 'TEXT')
        .appendField('callback')
        .appendField(new Blockly.FieldTextInput('button_1'), 'CALLBACK');
    this.setOutput(true, 'Button');
    this.setColour(290);
    this.setTooltip('Create an inline keyboard button');
    this.setHelpUrl('');
  }
};

// Inline Keyboard Row Block
Blockly.Blocks['button_row'] = {
  init: function() {
    this.appendValueInput('BUTTON1')
        .setCheck('Button')
        .appendField('Button row');
    this.appendValueInput('BUTTON2')
        .setCheck('Button');
    this.appendValueInput('BUTTON3')
        .setCheck('Button');
    this.setOutput(true, 'ButtonRow');
    this.setColour(290);
    this.setTooltip('Create a row of buttons');
    this.setHelpUrl('');
  }
};

// Send Message with Keyboard Block
Blockly.Blocks['send_message_with_keyboard'] = {
  init: function() {
    this.appendValueInput('MESSAGE')
        .setCheck('String')
        .appendField('Send message');
    this.appendValueInput('KEYBOARD')
        .setCheck(['Button', 'ButtonRow'])
        .appendField('with buttons');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Send a message with inline keyboard');
    this.setHelpUrl('');
  }
};

// Callback Query Handler Block
Blockly.Blocks['on_callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('When button')
        .appendField(new Blockly.FieldTextInput('button_1'), 'CALLBACK')
        .appendField('clicked');
    this.appendStatementInput('CALLBACK_HANDLER')
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('Triggered when a button is clicked');
    this.setHelpUrl('');
  }
};

// Menu Button Click Handler Block
Blockly.Blocks['on_menu_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('When menu button')
        .appendField(new Blockly.FieldTextInput('Option 1'), 'TEXT')
        .appendField('clicked');
    this.appendStatementInput('HANDLER')
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('Triggered when a menu button is clicked');
    this.setHelpUrl('');
  }
};

// Answer Callback Block
Blockly.Blocks['answer_callback'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('Show notification');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Show a notification when button is clicked');
    this.setHelpUrl('');
  }
};

// Get User Message Block
Blockly.Blocks['user_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('user message');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Get the text of the user message');
    this.setHelpUrl('');
  }
};

// Get User Name Block
Blockly.Blocks['user_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('user name');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Get the name of the user');
    this.setHelpUrl('');
  }
};

// Send Photo Block
Blockly.Blocks['send_photo'] = {
  init: function() {
    this.appendValueInput('URL')
        .setCheck('String')
        .appendField('Send photo');
    this.appendValueInput('CAPTION')
        .setCheck('String')
        .appendField('with caption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Send a photo to the user');
    this.setHelpUrl('');
  }
};

// Define Procedure Block
Blockly.Blocks['procedure_def'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Define function')
        .appendField(new Blockly.FieldTextInput('myFunction'), 'NAME');
    this.appendStatementInput('STATEMENTS')
        .setCheck(null)
        .appendField('do');
    this.setColour(290);
    this.setTooltip('Define a reusable function');
    this.setHelpUrl('');
  }
};

// Call Procedure Block
Blockly.Blocks['procedure_call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Call function')
        .appendField(new Blockly.FieldTextInput('myFunction'), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('Call a defined function');
    this.setHelpUrl('');
  }
};

// Variable Set Block
Blockly.Blocks['variable_set'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .appendField('Set')
        .appendField(new Blockly.FieldTextInput('variable'), 'VAR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('Set a variable value');
    this.setHelpUrl('');
  }
};

// Variable Get Block
Blockly.Blocks['variable_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Get')
        .appendField(new Blockly.FieldTextInput('variable'), 'VAR');
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('Get a variable value');
    this.setHelpUrl('');
  }
};

// Text Join Block
Blockly.Blocks['text_join'] = {
  init: function() {
    this.appendValueInput('TEXT1')
        .setCheck('String')
        .appendField('Join');
    this.appendValueInput('TEXT2')
        .setCheck('String')
        .appendField('with');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Join two text strings together');
    this.setHelpUrl('');
  }
};

// Reply Keyboard Button Block
Blockly.Blocks['keyboard_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Menu button')
        .appendField(new Blockly.FieldTextInput('Option 1'), 'TEXT');
    this.setOutput(true, 'KeyboardButton');
    this.setColour(120);
    this.setTooltip('Create a reply keyboard button');
    this.setHelpUrl('');
  }
};

// Keyboard Row Block
Blockly.Blocks['keyboard_row'] = {
  init: function() {
    this.appendValueInput('BUTTON1')
        .setCheck('KeyboardButton')
        .appendField('Menu row');
    this.appendValueInput('BUTTON2')
        .setCheck('KeyboardButton');
    this.appendValueInput('BUTTON3')
        .setCheck('KeyboardButton');
    this.setOutput(true, 'KeyboardRow');
    this.setColour(120);
    this.setTooltip('Create a row of menu buttons');
    this.setHelpUrl('');
  }
};

// Send Message with Reply Keyboard Block
Blockly.Blocks['send_message_with_menu'] = {
  init: function() {
    this.appendValueInput('MESSAGE')
        .setCheck('String')
        .appendField('Send message');
    this.appendValueInput('KEYBOARD')
        .setCheck(['KeyboardButton', 'KeyboardRow'])
        .appendField('with menu');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Send a message with reply keyboard menu');
    this.setHelpUrl('');
  }
};

// Remove Keyboard Block
Blockly.Blocks['remove_keyboard'] = {
  init: function() {
    this.appendValueInput('MESSAGE')
        .setCheck('String')
        .appendField('Send message');
    this.appendDummyInput()
        .appendField('and hide menu');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Send a message and remove the keyboard');
    this.setHelpUrl('');
  }
};

// Contact Request Button Block
Blockly.Blocks['request_contact_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Request contact button')
        .appendField(new Blockly.FieldTextInput('Share Contact'), 'TEXT');
    this.setOutput(true, 'KeyboardButton');
    this.setColour(120);
    this.setTooltip('Create a button that requests user contact');
    this.setHelpUrl('');
  }
};

// Location Request Button Block
Blockly.Blocks['request_location_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Request location button')
        .appendField(new Blockly.FieldTextInput('Share Location'), 'TEXT');
    this.setOutput(true, 'KeyboardButton');
    this.setColour(120);
    this.setTooltip('Create a button that requests user location');
    this.setHelpUrl('');
  }
};

// If-Else Block
Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('If message contains');
    this.appendStatementInput('THEN')
        .setCheck(null)
        .appendField('then');
    this.appendStatementInput('ELSE')
        .setCheck(null)
        .appendField('else');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Check if message contains text, with else clause');
    this.setHelpUrl('');
  }
};

// If Message Equals Block
Blockly.Blocks['if_equals'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('If message equals');
    this.appendStatementInput('THEN')
        .setCheck(null)
        .appendField('then');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Check if message exactly equals text');
    this.setHelpUrl('');
  }
};

// If Message Starts With Block
Blockly.Blocks['if_starts_with'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('If message starts with');
    this.appendStatementInput('THEN')
        .setCheck(null)
        .appendField('then');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Check if message starts with text');
    this.setHelpUrl('');
  }
};

// Number Block
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), 'NUM');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('A number value');
    this.setHelpUrl('');
  }
};

// Repeat N Times Block
Blockly.Blocks['repeat_times'] = {
  init: function() {
    this.appendValueInput('TIMES')
        .setCheck('Number')
        .appendField('Repeat');
    this.appendDummyInput()
        .appendField('times');
    this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Repeat actions a specific number of times');
    this.setHelpUrl('');
  }
};

// For Each Item Block
Blockly.Blocks['for_each'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('For each item in list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.appendStatementInput('DO')
        .setCheck(null)
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Repeat for each item in a list');
    this.setHelpUrl('');
  }
};

// Wait/Delay Block
Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput('SECONDS')
        .setCheck('Number')
        .appendField('Wait');
    this.appendDummyInput()
        .appendField('seconds');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Wait for a specified number of seconds');
    this.setHelpUrl('');
  }
};

// Math Comparison Block
Blockly.Blocks['compare_numbers'] = {
  init: function() {
    this.appendValueInput('A')
        .setCheck('Number')
        .appendField('If');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown([['=','=='], ['>','>'], ['<','<'], ['>=','>='], ['<=','<='], ['≠','!=']], 'OP'));
    this.appendStatementInput('THEN')
        .setCheck(null)
        .appendField('then');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Compare two numbers');
    this.setHelpUrl('');
  }
};

// Math Operations Block
Blockly.Blocks['math_operation'] = {
  init: function() {
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown([['+','+'], ['-','-'], ['×','*'], ['÷','/'], ['%','%']], 'OP'));
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Perform math operations');
    this.setHelpUrl('');
  }
};

// Random Number Block
Blockly.Blocks['random_number'] = {
  init: function() {
    this.appendValueInput('FROM')
        .setCheck('Number')
        .appendField('Random number from');
    this.appendValueInput('TO')
        .setCheck('Number')
        .appendField('to');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Generate a random number');
    this.setHelpUrl('');
  }
};

// Create List Block
Blockly.Blocks['create_list'] = {
  init: function() {
    this.appendValueInput('ITEM1')
        .setCheck('String')
        .appendField('Create list with');
    this.appendValueInput('ITEM2')
        .setCheck('String')
        .appendField(',');
    this.appendValueInput('ITEM3')
        .setCheck('String')
        .appendField(',');
    this.setOutput(true, 'Array');
    this.setColour(260);
    this.setTooltip('Create a list with items');
    this.setHelpUrl('');
  }
};

// Get List Item Block
Blockly.Blocks['list_get_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Get item')
        .appendField(new Blockly.FieldNumber(1, 1), 'INDEX')
        .appendField('from list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.setOutput(true, 'String');
    this.setColour(260);
    this.setTooltip('Get an item from a list');
    this.setHelpUrl('');
  }
};

// List Length Block
Blockly.Blocks['list_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Length of list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.setOutput(true, 'Number');
    this.setColour(260);
    this.setTooltip('Get the number of items in a list');
    this.setHelpUrl('');
  }
};

// Add to List Block
Blockly.Blocks['list_add_item'] = {
  init: function() {
    this.appendValueInput('ITEM')
        .setCheck('String')
        .appendField('Add');
    this.appendDummyInput()
        .appendField('to list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('Add an item to a list');
    this.setHelpUrl('');
  }
};

// Random Choice from List Block
Blockly.Blocks['random_choice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Random item from list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.setOutput(true, 'String');
    this.setColour(260);
    this.setTooltip('Get a random item from a list');
    this.setHelpUrl('');
  }
};

// String Length Block
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('Length of');
    this.setOutput(true, 'Number');
    this.setColour(60);
    this.setTooltip('Get the length of text');
    this.setHelpUrl('');
  }
};

// To Uppercase Block
Blockly.Blocks['text_uppercase'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('UPPERCASE');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Convert text to uppercase');
    this.setHelpUrl('');
  }
};

// To Lowercase Block
Blockly.Blocks['text_lowercase'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('lowercase');
    this.setOutput(true, 'String');
    this.setColour(60);
    this.setTooltip('Convert text to lowercase');
    this.setHelpUrl('');
  }
};

// Split Text Block
Blockly.Blocks['text_split'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('Split');
    this.appendValueInput('DELIMITER')
        .setCheck('String')
        .appendField('by');
    this.appendDummyInput()
        .appendField('into list')
        .appendField(new Blockly.FieldTextInput('myList'), 'LIST');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Split text into a list');
    this.setHelpUrl('');
  }
};

// Current Date/Time Block
Blockly.Blocks['current_datetime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Current')
        .appendField(new Blockly.FieldDropdown([['date','date'], ['time','time'], ['date and time','datetime']], 'TYPE'));
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Get current date or time');
    this.setHelpUrl('');
  }
};

// Edit Message Block
Blockly.Blocks['edit_message'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('Edit last message to');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Edit the last sent message');
    this.setHelpUrl('');
  }
};

// Delete Message Block
Blockly.Blocks['delete_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Delete last message');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Delete the last sent message');
    this.setHelpUrl('');
  }
};

// Log all registered blocks
console.log('All Blockly blocks registered:', Object.keys(Blockly.Blocks).filter(k => !k.startsWith('controls_') && !k.startsWith('logic_') && !k.startsWith('math_') && !k.startsWith('lists_')));
console.log('Total custom blocks:', Object.keys(Blockly.Blocks).filter(k => !k.startsWith('controls_') && !k.startsWith('logic_') && !k.startsWith('math_') && !k.startsWith('lists_')).length);

// Python Code Generators
(function() {
  // Ensure Blockly and Blockly.Python are available
  if (typeof Blockly === 'undefined') {
    console.error('Blockly is not loaded!');
    return;
  }
  
  if (typeof Blockly.Python === 'undefined') {
    console.error('Blockly.Python is not loaded!');
    return;
  }

  // Use forBlock for newer Blockly versions, fallback to direct assignment
  var pythonGenerator = Blockly.Python;
  
  pythonGenerator.forBlock['on_message'] = function(block, generator) {
    var statements = generator.statementToCode(block, 'MESSAGE_HANDLER');
    var code = '@dp.message()\nasync def handle_message(message: Message):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['send_message'] = function(block, generator) {
    var value = generator.valueToCode(block, 'MESSAGE', pythonGenerator.ORDER_ATOMIC);
    var code = 'await message.answer(' + value + ')\n';
    return code;
  };

  pythonGenerator.forBlock['text'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var code = "'" + text.replace(/'/g, "\\'") + "'";
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['if_contains'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var statements = generator.statementToCode(block, 'THEN');
    var code = 'if ' + text + ' in message.text:\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['on_command'] = function(block, generator) {
    var command = block.getFieldValue('COMMAND');
    var statements = generator.statementToCode(block, 'COMMAND_HANDLER');
    var code = '@dp.message(Command("' + command.replace('/', '') + '"))\nasync def handle_command_' + command.replace('/', '') + '(message: Message):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['inline_button'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var callback = block.getFieldValue('CALLBACK');
    var code = 'types.InlineKeyboardButton(text="' + text + '", callback_data="' + callback + '")';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['button_row'] = function(block, generator) {
    var button1 = generator.valueToCode(block, 'BUTTON1', pythonGenerator.ORDER_ATOMIC);
    var button2 = generator.valueToCode(block, 'BUTTON2', pythonGenerator.ORDER_ATOMIC);
    var button3 = generator.valueToCode(block, 'BUTTON3', pythonGenerator.ORDER_ATOMIC);
    var buttons = [button1, button2, button3].filter(b => b && b !== '');
    var code = '[' + buttons.join(', ') + ']';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['send_message_with_keyboard'] = function(block, generator) {
    var message = generator.valueToCode(block, 'MESSAGE', pythonGenerator.ORDER_ATOMIC);
    var keyboard = generator.valueToCode(block, 'KEYBOARD', pythonGenerator.ORDER_ATOMIC);
    var code = 'keyboard = types.InlineKeyboardMarkup(inline_keyboard=[' + keyboard + '])\n';
    code += 'await message.answer(' + message + ', reply_markup=keyboard)\n';
    return code;
  };

  pythonGenerator.forBlock['on_callback'] = function(block, generator) {
    var callback = block.getFieldValue('CALLBACK');
    var statements = generator.statementToCode(block, 'CALLBACK_HANDLER');
    var code = '@dp.callback_query(lambda c: c.data == "' + callback + '")\nasync def handle_callback_' + callback + '(callback_query: types.CallbackQuery):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['on_menu_button'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var statements = generator.statementToCode(block, 'HANDLER');
    var code = '@dp.message(lambda message: message.text == "' + text + '")\nasync def handle_menu_' + text.replace(/[^a-zA-Z0-9]/g, '_') + '(message: Message):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['answer_callback'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var code = 'await callback_query.answer(' + text + ')\n';
    return code;
  };

  pythonGenerator.forBlock['user_message'] = function(block, generator) {
    var code = 'message.text';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['user_name'] = function(block, generator) {
    var code = 'message.from_user.first_name';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['send_photo'] = function(block, generator) {
    var url = generator.valueToCode(block, 'URL', pythonGenerator.ORDER_ATOMIC);
    var caption = generator.valueToCode(block, 'CAPTION', pythonGenerator.ORDER_ATOMIC);
    var code = 'await message.answer_photo(photo=' + url + ', caption=' + caption + ')\n';
    return code;
  };

  pythonGenerator.forBlock['procedure_def'] = function(block, generator) {
    var name = block.getFieldValue('NAME');
    var statements = generator.statementToCode(block, 'STATEMENTS');
    var code = 'async def ' + name + '(message):\n' + (statements || '    pass\n');
    return code;
  };

  pythonGenerator.forBlock['procedure_call'] = function(block, generator) {
    var name = block.getFieldValue('NAME');
    var code = 'await ' + name + '(message)\n';
    return code;
  };

  pythonGenerator.forBlock['variable_set'] = function(block, generator) {
    var varName = block.getFieldValue('VAR');
    var value = generator.valueToCode(block, 'VALUE', pythonGenerator.ORDER_ATOMIC);
    var code = varName + ' = ' + value + '\n';
    return code;
  };

  pythonGenerator.forBlock['variable_get'] = function(block, generator) {
    var varName = block.getFieldValue('VAR');
    var code = varName;
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['text_join'] = function(block, generator) {
    var text1 = generator.valueToCode(block, 'TEXT1', pythonGenerator.ORDER_ATOMIC);
    var text2 = generator.valueToCode(block, 'TEXT2', pythonGenerator.ORDER_ATOMIC);
    var code = text1 + ' + ' + text2;
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['keyboard_button'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var code = 'types.KeyboardButton(text="' + text + '")';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['keyboard_row'] = function(block, generator) {
    var button1 = generator.valueToCode(block, 'BUTTON1', pythonGenerator.ORDER_ATOMIC);
    var button2 = generator.valueToCode(block, 'BUTTON2', pythonGenerator.ORDER_ATOMIC);
    var button3 = generator.valueToCode(block, 'BUTTON3', pythonGenerator.ORDER_ATOMIC);
    var buttons = [button1, button2, button3].filter(b => b && b !== '');
    var code = '[' + buttons.join(', ') + ']';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['send_message_with_menu'] = function(block, generator) {
    var message = generator.valueToCode(block, 'MESSAGE', pythonGenerator.ORDER_ATOMIC);
    var keyboard = generator.valueToCode(block, 'KEYBOARD', pythonGenerator.ORDER_ATOMIC);
    var code = 'keyboard = types.ReplyKeyboardMarkup(keyboard=[' + keyboard + '], resize_keyboard=True)\n';
    code += 'await message.answer(' + message + ', reply_markup=keyboard)\n';
    return code;
  };

  pythonGenerator.forBlock['remove_keyboard'] = function(block, generator) {
    var message = generator.valueToCode(block, 'MESSAGE', pythonGenerator.ORDER_ATOMIC);
    var code = 'await message.answer(' + message + ', reply_markup=types.ReplyKeyboardRemove())\n';
    return code;
  };

  pythonGenerator.forBlock['request_contact_button'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var code = 'types.KeyboardButton(text="' + text + '", request_contact=True)';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['request_location_button'] = function(block, generator) {
    var text = block.getFieldValue('TEXT');
    var code = 'types.KeyboardButton(text="' + text + '", request_location=True)';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['if_else'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var thenStatements = generator.statementToCode(block, 'THEN');
    var elseStatements = generator.statementToCode(block, 'ELSE');
    var code = 'if ' + text + ' in message.text:\n' + thenStatements;
    code += 'else:\n' + (elseStatements || '    pass\n');
    return code;
  };

  pythonGenerator.forBlock['if_equals'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var statements = generator.statementToCode(block, 'THEN');
    var code = 'if message.text == ' + text + ':\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['if_starts_with'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var statements = generator.statementToCode(block, 'THEN');
    var code = 'if message.text.startswith(' + text + '):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['number'] = function(block, generator) {
    var num = block.getFieldValue('NUM');
    var code = num;
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['repeat_times'] = function(block, generator) {
    var times = generator.valueToCode(block, 'TIMES', pythonGenerator.ORDER_ATOMIC);
    var statements = generator.statementToCode(block, 'DO');
    var code = 'for i in range(' + times + '):\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['for_each'] = function(block, generator) {
    var listName = block.getFieldValue('LIST');
    var statements = generator.statementToCode(block, 'DO');
    var code = 'for item in ' + listName + ':\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['wait'] = function(block, generator) {
    var seconds = generator.valueToCode(block, 'SECONDS', pythonGenerator.ORDER_ATOMIC);
    var code = 'await asyncio.sleep(' + seconds + ')\n';
    return code;
  };

  pythonGenerator.forBlock['compare_numbers'] = function(block, generator) {
    var a = generator.valueToCode(block, 'A', pythonGenerator.ORDER_ATOMIC);
    var b = generator.valueToCode(block, 'B', pythonGenerator.ORDER_ATOMIC);
    var op = block.getFieldValue('OP');
    var statements = generator.statementToCode(block, 'THEN');
    var code = 'if ' + a + ' ' + op + ' ' + b + ':\n' + statements;
    return code;
  };

  pythonGenerator.forBlock['math_operation'] = function(block, generator) {
    var a = generator.valueToCode(block, 'A', pythonGenerator.ORDER_ATOMIC);
    var b = generator.valueToCode(block, 'B', pythonGenerator.ORDER_ATOMIC);
    var op = block.getFieldValue('OP');
    var code = a + ' ' + op + ' ' + b;
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['random_number'] = function(block, generator) {
    var from = generator.valueToCode(block, 'FROM', pythonGenerator.ORDER_ATOMIC);
    var to = generator.valueToCode(block, 'TO', pythonGenerator.ORDER_ATOMIC);
    var code = 'random.randint(' + from + ', ' + to + ')';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['create_list'] = function(block, generator) {
    var item1 = generator.valueToCode(block, 'ITEM1', pythonGenerator.ORDER_ATOMIC);
    var item2 = generator.valueToCode(block, 'ITEM2', pythonGenerator.ORDER_ATOMIC);
    var item3 = generator.valueToCode(block, 'ITEM3', pythonGenerator.ORDER_ATOMIC);
    var items = [item1, item2, item3].filter(i => i && i !== '');
    var code = '[' + items.join(', ') + ']';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['list_get_item'] = function(block, generator) {
    var index = block.getFieldValue('INDEX');
    var list = block.getFieldValue('LIST');
    var code = list + '[' + (parseInt(index) - 1) + ']';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['list_length'] = function(block, generator) {
    var list = block.getFieldValue('LIST');
    var code = 'len(' + list + ')';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['list_add_item'] = function(block, generator) {
    var item = generator.valueToCode(block, 'ITEM', pythonGenerator.ORDER_ATOMIC);
    var list = block.getFieldValue('LIST');
    var code = list + '.append(' + item + ')\n';
    return code;
  };

  pythonGenerator.forBlock['random_choice'] = function(block, generator) {
    var list = block.getFieldValue('LIST');
    var code = 'random.choice(' + list + ')';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['string_length'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var code = 'len(' + text + ')';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['text_uppercase'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var code = text + '.upper()';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['text_lowercase'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var code = text + '.lower()';
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['text_split'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var delimiter = generator.valueToCode(block, 'DELIMITER', pythonGenerator.ORDER_ATOMIC);
    var list = block.getFieldValue('LIST');
    var code = list + ' = ' + text + '.split(' + delimiter + ')\n';
    return code;
  };

  pythonGenerator.forBlock['current_datetime'] = function(block, generator) {
    var type = block.getFieldValue('TYPE');
    var code = '';
    if (type === 'date') {
      code = 'datetime.now().strftime("%Y-%m-%d")';
    } else if (type === 'time') {
      code = 'datetime.now().strftime("%H:%M:%S")';
    } else {
      code = 'datetime.now().strftime("%Y-%m-%d %H:%M:%S")';
    }
    return [code, pythonGenerator.ORDER_ATOMIC];
  };

  pythonGenerator.forBlock['edit_message'] = function(block, generator) {
    var text = generator.valueToCode(block, 'TEXT', pythonGenerator.ORDER_ATOMIC);
    var code = 'await message.edit_text(' + text + ')\n';
    return code;
  };

  pythonGenerator.forBlock['delete_message'] = function(block, generator) {
    var code = 'await message.delete()\n';
    return code;
  };

  console.log('Telegram Python generators registered successfully');
  console.log('Registered on forBlock:', Object.keys(pythonGenerator.forBlock || {}).filter(k => ['on_message', 'send_message', 'text', 'if_contains'].includes(k)));
})();
