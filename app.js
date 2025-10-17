document.addEventListener('DOMContentLoaded', function() {
    // Notification helper function
    function showNotification(message, icon = '🔔') {
        const toast = document.getElementById('notification-toast');
        const iconEl = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        iconEl.textContent = icon;
        messageEl.textContent = message;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Token Modal Management
    const tokenModal = document.getElementById('token-modal');
    const tokenBtn = document.getElementById('token-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const saveTokenBtn = document.getElementById('save-token-btn');
    const clearTokenBtn = document.getElementById('clear-token-btn');
    const tokenInput = document.getElementById('bot-token');
    const tokenStatus = document.getElementById('token-status');
    
    // Load saved token from localStorage
    const savedToken = localStorage.getItem('telegram_bot_token');
    if (savedToken) {
        tokenInput.value = savedToken;
        updateTokenStatus();
    }
    
    // Open modal
    tokenBtn.addEventListener('click', () => {
        tokenModal.classList.add('show');
        tokenInput.focus();
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', () => {
        tokenModal.classList.remove('show');
    });
    
    // Close on overlay click
    tokenModal.querySelector('.modal-overlay').addEventListener('click', () => {
        tokenModal.classList.remove('show');
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tokenModal.classList.contains('show')) {
            tokenModal.classList.remove('show');
        }
    });
    
    // Save token
    saveTokenBtn.addEventListener('click', () => {
        const token = tokenInput.value.trim();
        if (token) {
            localStorage.setItem('telegram_bot_token', token);
            updateTokenStatus();
            showNotification('Bot token saved successfully!', '✅');
        } else {
            showNotification('Please enter a valid token', '⚠️');
            return;
        }
        tokenModal.classList.remove('show');
    });
    
    // Clear token
    clearTokenBtn.addEventListener('click', () => {
        tokenInput.value = '';
        localStorage.removeItem('telegram_bot_token');
        tokenStatus.textContent = '';
        showNotification('Token cleared', 'ℹ️');
    });
    
    // Update token status
    function updateTokenStatus() {
        const token = tokenInput.value.trim();
        if (token) {
            tokenStatus.textContent = '✓ Token configured';
            tokenStatus.style.color = '#10b981';
        } else {
            tokenStatus.textContent = '';
        }
    }
    
    // Update status on input
    tokenInput.addEventListener('input', updateTokenStatus);
    
    // Initialize Blockly workspace
    const toolbox = document.getElementById('toolbox');
    console.log('Toolbox element:', toolbox);
    console.log('Toolbox innerHTML length:', toolbox ? toolbox.innerHTML.length : 0);
    
    const workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        trashcan: true,
        grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    });

    // Listen for workspace changes to show code update badge
    workspace.addChangeListener(function(event) {
        // Show badge when blocks are modified
        if (event.type === Blockly.Events.BLOCK_CHANGE || 
            event.type === Blockly.Events.BLOCK_CREATE || 
            event.type === Blockly.Events.BLOCK_DELETE || 
            event.type === Blockly.Events.BLOCK_MOVE) {
            const badge = document.getElementById('code-badge');
            if (badge && !document.querySelector('[data-tab="code"]').classList.contains('active')) {
                badge.style.display = 'block';
            }
        }
    });

    // Apply glass effects to Blockly elements after injection
    setTimeout(() => {
        applyGlassEffects();
        addThunkableGradients();
        styleCategoryPanel();
    }, 500);

    function addThunkableGradients() {
        const svg = document.querySelector('.blocklyWorkspace');
        if (!svg) return;

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        // Define gradients for different block categories - Thunkable style
        const gradients = [
            { id: 'purpleGradient', colors: ['#667eea', '#764ba2'] },
            { id: 'greenGradient', colors: ['#11998e', '#38ef7d'] },
            { id: 'blueGradient', colors: ['#4facfe', '#00f2fe'] },
            { id: 'orangeGradient', colors: ['#f093fb', '#f5576c'] },
            { id: 'pinkGradient', colors: ['#fa709a', '#fee140'] },
            { id: 'tealGradient', colors: ['#13547a', '#80d0c7'] },
            { id: 'indigoGradient', colors: ['#6a11cb', '#2575fc'] },
            { id: 'redGradient', colors: ['#ff6b6b', '#feca57'] }
        ];

        gradients.forEach(grad => {
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', grad.id);
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '100%');
            gradient.setAttribute('y2', '100%');
            
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('style', `stop-color:${grad.colors[0]};stop-opacity:1`);
            
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('style', `stop-color:${grad.colors[1]};stop-opacity:1`);
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
        });

        svg.insertBefore(defs, svg.firstChild);
    }

    function styleCategoryPanel() {
        // Apply modern styling to category panel
        const categories = document.querySelectorAll('.blocklyTreeRow');
        categories.forEach(category => {
            category.style.cssText = `
                background: transparent !important;
                border-radius: 12px !important;
                margin: 6px 12px !important;
                padding: 0 !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                cursor: pointer !important;
            `;
            
            // Add hover effect
            category.addEventListener('mouseenter', function() {
                if (!this.classList.contains('blocklyTreeSelected')) {
                    this.style.background = 'rgba(255,255,255,0.5) !important';
                    this.style.transform = 'translateX(6px) scale(1.02)';
                    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }
            });
            
            category.addEventListener('mouseleave', function() {
                if (!this.classList.contains('blocklyTreeSelected')) {
                    this.style.background = 'transparent !important';
                    this.style.transform = 'none';
                    this.style.boxShadow = 'none';
                }
            });
        });
        
        // Style category labels
        const labels = document.querySelectorAll('.blocklyTreeLabel');
        labels.forEach(label => {
            label.style.cssText = `
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
                font-size: 14px !important;
                font-weight: 600 !important;
                padding: 10px 12px !important;
                border-radius: 8px !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            `;
        });
        
        // Add observer for selected state changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('blocklyTreeSelected')) {
                        target.style.cssText = `
                            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%) !important;
                            backdrop-filter: blur(20px) saturate(180%) !important;
                            box-shadow: 0 6px 20px rgba(102,126,234,0.25), inset 0 0 0 2px rgba(102,126,234,0.3) !important;
                            border-radius: 12px !important;
                            transform: translateX(8px) !important;
                            margin: 6px 12px !important;
                            padding: 0 !important;
                        `;
                        
                        const label = target.querySelector('.blocklyTreeLabel');
                        if (label) {
                            label.style.color = '#667eea !important';
                            label.style.fontWeight = '700 !important';
                        }
                    } else {
                        target.style.background = 'transparent !important';
                        target.style.transform = 'none';
                        target.style.boxShadow = 'none';
                        
                        const label = target.querySelector('.blocklyTreeLabel');
                        if (label) {
                            label.style.color = '#4a5568 !important';
                            label.style.fontWeight = '600 !important';
                        }
                    }
                }
            });
        });
        
        categories.forEach(category => {
            observer.observe(category, { attributes: true, attributeFilter: ['class'] });
        });
    }

    function applyGlassEffects() {
        // Style the toolbox
        const toolboxDiv = document.querySelector('.blocklyToolboxDiv');
        if (toolboxDiv) {
            toolboxDiv.style.cssText += `
                background: linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.06) 50%, rgba(240,147,251,0.04) 100%) !important;
                backdrop-filter: blur(60px) saturate(220%) !important;
                -webkit-backdrop-filter: blur(60px) saturate(220%) !important;
                box-shadow: 4px 0 24px rgba(102,126,234,0.12) !important;
                border-right: 1px solid rgba(102,126,234,0.2) !important;
                padding-right: 8px !important;
            `;
        }

        // Style the flyout
        const flyout = document.querySelector('.blocklyFlyout');
        if (flyout) {
            const flyoutBg = flyout.querySelector('.blocklyFlyoutBackground');
            if (flyoutBg) {
                flyoutBg.style.cssText = 'fill: rgba(255,255,255,0.9) !important; fill-opacity: 1 !important;';
            }
        }

        // Style the workspace
        const workspace = document.querySelector('.blocklyMainBackground');
        if (workspace) {
            workspace.style.fill = 'rgba(248,249,255,0.6)';
        }

        // Add glass effect to all blocks
        const observer = new MutationObserver(() => {
            document.querySelectorAll('.blocklyDraggable').forEach(block => {
                if (!block.hasAttribute('data-glass-styled')) {
                    block.setAttribute('data-glass-styled', 'true');
                    const paths = block.querySelectorAll('.blocklyPath');
                    paths.forEach(path => {
                        const currentFill = path.getAttribute('fill');
                        if (currentFill && !path.hasAttribute('data-original-fill')) {
                            path.setAttribute('data-original-fill', currentFill);
                            path.style.cssText += `
                                filter: drop-shadow(0 4px 12px rgba(0,0,0,0.12)) drop-shadow(0 0 1px rgba(255,255,255,0.8)) !important;
                                stroke-width: 1.5px !important;
                                stroke-opacity: 0.4 !important;
                            `;
                        }
                    });
                }
            });
        });

        observer.observe(document.querySelector('.blocklyWorkspace'), {
            childList: true,
            subtree: true
        });
    }

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
            
            // Auto-generate code when code tab is opened
            if (button.getAttribute('data-tab') === 'code') {
                generateAndDisplayCode();
                // Hide the update badge
                const badge = document.getElementById('code-badge');
                if (badge) {
                    badge.style.display = 'none';
                }
            }
        });
    });

    // Function to generate and display code
    function generateAndDisplayCode() {
        const codeElement = document.getElementById('generated-code');
        
        // Show loading state
        codeElement.textContent = '# Generating code...\n# Please wait...';
        codeElement.classList.add('loading');
        
        // Small delay to show loading animation
        setTimeout(() => {
            console.log('Generating code...');
            const botCode = Blockly.Python.workspaceToCode(workspace);
            console.log('Generated bot code:', botCode);
            
            // Get token from input or use placeholder
            const tokenInput = document.getElementById('bot-token');
            const apiToken = tokenInput.value.trim() || 'YOUR_TELEGRAM_BOT_TOKEN';
            
            const completeCode = `import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import Message

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize bot and dispatcher
API_TOKEN = '${apiToken}'
bot = Bot(token=API_TOKEN)
dp = Dispatcher()

${botCode}

async def main():
    # Start the bot
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())`;
        
            codeElement.textContent = completeCode;
            codeElement.classList.remove('loading');
            console.log('Code displayed in editor');
        }, 300);
    }

    // Run simulation
    document.getElementById('run-btn').addEventListener('click', function() {
        const code = Blockly.Python.workspaceToCode(workspace);
        console.log('Running simulation with code:', code);
        
        // Clear previous messages
        document.getElementById('chat-messages').innerHTML = '';
        
        // Initialize the bot behavior from blocks
        initializeBotBehavior();
        
        addBotMessage('Bot simulation started. Try sending a message!');
    });

    // Export code
    document.getElementById('export-btn').addEventListener('click', function() {
        // Check if workspace has blocks
        const allBlocks = workspace.getAllBlocks(false);
        if (allBlocks.length === 0) {
            showNotification('Please add some blocks to your workspace first!', '⚠️');
            return;
        }
        
        // Show notification
        showNotification('Creating your bot package...', '📦');
        
        // Generate the bot code
        const botCode = Blockly.Python.workspaceToCode(workspace);
        
        // Get token from input or use placeholder
        const tokenInput = document.getElementById('bot-token');
        const apiToken = tokenInput.value.trim() || 'YOUR_TELEGRAM_BOT_TOKEN';
        
        // Create the main bot.py file content
        const botPyContent = `import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import Message

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize bot and dispatcher
API_TOKEN = '${apiToken}'
bot = Bot(token=API_TOKEN)
dp = Dispatcher()

${botCode}

async def main():
    # Start the bot
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())`;
        
        // Create requirements.txt content
        const requirementsTxt = `# Telegram Bot Requirements
# Install using: pip install -r requirements.txt

# aiogram 3.x (latest version)
aiogram>=3.0.0
aiohttp>=3.9.0
pydantic>=2.0.0`;
        
        // Create README.md content
        const readmeMd = `# Telegram Bot - Setup Instructions

This bot was created using the **Telegram Bot Builder** visual tool.

## Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- A Telegram Bot Token from @BotFather

## Quick Start

### 1. Get Your Bot Token

1. Open Telegram and search for @BotFather
2. Send the command /newbot to create a new bot
3. Follow the instructions to choose a name and username
4. Copy the API token that BotFather gives you

### 2. Install Dependencies

Open a terminal in this directory and run:

pip install -r requirements.txt

Or if you're using Python 3 specifically:

pip3 install -r requirements.txt

### 3. Configure Your Bot

${apiToken === 'YOUR_TELEGRAM_BOT_TOKEN' ? 'Open bot.py and replace YOUR_TELEGRAM_BOT_TOKEN with your actual token' : 'Your bot token has been included in the code! You can start running your bot right away.'}

### 4. Run Your Bot

python bot.py

Or:

python3 bot.py

## Testing Your Bot

1. Open Telegram and search for your bot by username
2. Send /start to begin interacting with your bot
3. Try the commands and buttons you created!

## Stopping Your Bot

Press Ctrl + C in the terminal to stop the bot.

## Features

This bot includes:
- Custom commands and message handlers
- Interactive buttons (inline and reply keyboards)
- Conditional logic and text processing
- Variables and custom functions
- And more!

## Troubleshooting

### No module named aiogram
- Make sure you installed the requirements: pip install -r requirements.txt

### Unauthorized or Invalid token
- Check that you copied the correct token from BotFather
- Make sure there are no extra spaces in the token

### Bot doesn't respond
- Make sure the bot is running (check the terminal)
- Verify you sent /start to initialize the bot
- Check that your blocks are correctly connected in the builder

## Learn More

- aiogram Documentation: https://docs.aiogram.dev/
- Telegram Bot API: https://core.telegram.org/bots/api
- Python Documentation: https://docs.python.org/3/

## Next Steps

- Customize your bot's behavior by editing the code
- Add more features using the Bot Builder
- Deploy your bot to a server for 24/7 operation
- Share your bot with friends and users!

---

Created with Telegram Bot Builder
Visual bot creation, no coding required!
`;
        // Create .gitignore content
        const gitignore = `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# Virtual Environment
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Bot Configuration (IMPORTANT: Never commit your token!)
config.py
.env
*.log
`;
        
        // Create ZIP file using JSZip
        const zip = new JSZip();
        zip.file('bot.py', botPyContent);
        zip.file('requirements.txt', requirementsTxt);
        zip.file('README.md', readmeMd);
        zip.file('.gitignore', gitignore);
        
        // Show loading state on button
        const exportBtn = this;
        const originalHTML = exportBtn.innerHTML;
        exportBtn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Creating ZIP...</span>';
        exportBtn.disabled = true;
        
        // Generate and download ZIP
        zip.generateAsync({type: 'blob'})
            .then(function(content) {
                // Create download link
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = 'telegram-bot.zip';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Show success notification
                showNotification('Bot downloaded successfully! Check your downloads folder.', '✅');
                
                // Show success state
                exportBtn.innerHTML = '<span class="btn-icon">✅</span><span class="btn-text">Downloaded!</span>';
                
                setTimeout(() => {
                    exportBtn.innerHTML = originalHTML;
                    exportBtn.disabled = false;
                }, 2000);
            })
            .catch(function(err) {
                console.error('Error creating ZIP:', err);
                showNotification('Failed to create ZIP file. Please try again.', '❌');
                
                exportBtn.innerHTML = '<span class="btn-icon">❌</span><span class="btn-text">Error</span>';
                
                setTimeout(() => {
                    exportBtn.innerHTML = originalHTML;
                    exportBtn.disabled = false;
                }, 2000);
            });
    });

    // Copy code to clipboard
    document.getElementById('copy-code').addEventListener('click', function() {
        const code = document.getElementById('generated-code').textContent;
        const button = this;
        const originalHTML = button.innerHTML;
        
        navigator.clipboard.writeText(code).then(() => {
            button.innerHTML = '<span class="copy-icon">✓</span><span class="copy-text">Copied!</span>';
            button.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 1) 0%, rgba(69, 160, 73, 1) 100%)';
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.9) 0%, rgba(69, 160, 73, 0.9) 100%)';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            button.innerHTML = '<span class="copy-icon">✗</span><span class="copy-text">Failed</span>';
            setTimeout(() => {
                button.innerHTML = originalHTML;
            }, 2000);
        });
    });

    // Clear workspace
    document.getElementById('clear-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the workspace?')) {
            workspace.clear();
            document.getElementById('chat-messages').innerHTML = '';
        }
    });

    // Chat simulation
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    document.getElementById('user-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();
        
        if (message) {
            addUserMessage(message);
            
            // Show typing indicator
            showTypingIndicator();
            
            // Process the message through the bot logic
            setTimeout(() => {
                hideTypingIndicator();
                processBotResponse(message);
            }, 500);
            
            input.value = '';
        }
    }

    // Process bot response based on blocks
    function processBotResponse(userMessage) {
        // Get all top-level blocks (on_message handlers, commands, etc.)
        const topBlocks = workspace.getTopBlocks(false);
        let responseFound = false;
        
        for (let i = 0; i < topBlocks.length; i++) {
            const block = topBlocks[i];
            
            // Check for menu button handlers first (exact match)
            if (block.type === 'on_menu_button') {
                const buttonText = block.getFieldValue('TEXT');
                if (userMessage === buttonText) {
                    const response = executeMenuButtonHandler(block, userMessage);
                    if (response) {
                        responseFound = true;
                        break; // Stop after first exact match
                    }
                }
            }
        }
        
        // If no menu button handler found, check other handlers
        if (!responseFound) {
            for (let i = 0; i < topBlocks.length; i++) {
                const block = topBlocks[i];
                
                if (block.type === 'on_message') {
                    // Execute the message handler
                    const response = executeMessageHandler(block, userMessage);
                    if (response) {
                        responseFound = true;
                    }
                } else if (block.type === 'on_command') {
                    // Check if message is a command
                    const command = block.getFieldValue('COMMAND');
                    if (userMessage.startsWith(command)) {
                        const response = executeCommandHandler(block, userMessage);
                        if (response) {
                            responseFound = true;
                        }
                    }
                }
            }
        }
        
        if (!responseFound) {
            addBotMessage('(No response configured for this message)');
        }
    }
    
    // Execute a menu button handler block
    function executeMenuButtonHandler(block, userMessage) {
        const childBlock = block.getInputTargetBlock('HANDLER');
        if (childBlock) {
            return executeBlock(childBlock, userMessage);
        }
        return false;
    }
    
    // Execute a command handler block
    function executeCommandHandler(block, userMessage) {
        const childBlock = block.getInputTargetBlock('COMMAND_HANDLER');
        if (childBlock) {
            return executeBlock(childBlock, userMessage);
        }
        return false;
    }
    
    // Execute a message handler block
    function executeMessageHandler(block, userMessage) {
        const childBlock = block.getInputTargetBlock('MESSAGE_HANDLER');
        if (childBlock) {
            return executeBlock(childBlock, userMessage);
        }
        return false;
    }
    
    // Execute individual blocks
    function executeBlock(block, userMessage) {
        if (!block) return false;
        
        let executed = false;
        
        // Initialize variables storage if not exists
        if (!window.botVariables) window.botVariables = {};
        
        switch (block.type) {
            case 'send_message':
                const messageBlock = block.getInputTargetBlock('MESSAGE');
                if (messageBlock) {
                    const text = getTextValue(messageBlock, userMessage);
                    if (text) {
                        addBotMessage(text);
                        executed = true;
                    }
                }
                break;
                
            case 'send_message_with_keyboard':
                const msgBlock = block.getInputTargetBlock('MESSAGE');
                const keyboardBlock = block.getInputTargetBlock('KEYBOARD');
                if (msgBlock) {
                    const text = getTextValue(msgBlock, userMessage);
                    const buttons = getButtons(keyboardBlock);
                    if (text) {
                        addBotMessageWithButtons(text, buttons);
                        executed = true;
                    }
                }
                break;
                
            case 'send_message_with_menu':
                const menuMsgBlock = block.getInputTargetBlock('MESSAGE');
                const menuKeyboardBlock = block.getInputTargetBlock('KEYBOARD');
                if (menuMsgBlock) {
                    const text = getTextValue(menuMsgBlock, userMessage);
                    const menuButtons = getMenuButtons(menuKeyboardBlock);
                    if (text) {
                        addBotMessageWithMenu(text, menuButtons);
                        executed = true;
                    }
                }
                break;
                
            case 'remove_keyboard':
                const removeMsg = block.getInputTargetBlock('MESSAGE');
                if (removeMsg) {
                    const text = getTextValue(removeMsg, userMessage);
                    if (text) {
                        addBotMessage(text);
                        hideReplyKeyboard();
                        executed = true;
                    }
                }
                break;
                
            case 'send_photo':
                const urlBlock = block.getInputTargetBlock('URL');
                const captionBlock = block.getInputTargetBlock('CAPTION');
                if (urlBlock) {
                    const url = getTextValue(urlBlock, userMessage);
                    const caption = captionBlock ? getTextValue(captionBlock, userMessage) : '';
                    if (url) {
                        addBotPhoto(url, caption);
                        executed = true;
                    }
                }
                break;
                
            case 'if_contains':
                const textBlock = block.getInputTargetBlock('TEXT');
                if (textBlock) {
                    const searchText = getTextValue(textBlock, userMessage);
                    if (searchText && userMessage.toLowerCase().includes(searchText.toLowerCase())) {
                        const thenBlock = block.getInputTargetBlock('THEN');
                        if (thenBlock) {
                            executeBlock(thenBlock, userMessage);
                            executed = true;
                        }
                    }
                }
                break;
                
            case 'if_else':
                const ifElseTextBlock = block.getInputTargetBlock('TEXT');
                if (ifElseTextBlock) {
                    const searchText = getTextValue(ifElseTextBlock, userMessage);
                    if (searchText && userMessage.toLowerCase().includes(searchText.toLowerCase())) {
                        const thenBlock = block.getInputTargetBlock('THEN');
                        if (thenBlock) {
                            executeBlock(thenBlock, userMessage);
                            executed = true;
                        }
                    } else {
                        const elseBlock = block.getInputTargetBlock('ELSE');
                        if (elseBlock) {
                            executeBlock(elseBlock, userMessage);
                            executed = true;
                        }
                    }
                }
                break;
                
            case 'if_equals':
                const equalsTextBlock = block.getInputTargetBlock('TEXT');
                if (equalsTextBlock) {
                    const compareText = getTextValue(equalsTextBlock, userMessage);
                    if (compareText && userMessage === compareText) {
                        const thenBlock = block.getInputTargetBlock('THEN');
                        if (thenBlock) {
                            executeBlock(thenBlock, userMessage);
                            executed = true;
                        }
                    }
                }
                break;
                
            case 'if_starts_with':
                const startsTextBlock = block.getInputTargetBlock('TEXT');
                if (startsTextBlock) {
                    const prefixText = getTextValue(startsTextBlock, userMessage);
                    if (prefixText && userMessage.startsWith(prefixText)) {
                        const thenBlock = block.getInputTargetBlock('THEN');
                        if (thenBlock) {
                            executeBlock(thenBlock, userMessage);
                            executed = true;
                        }
                    }
                }
                break;
                
            case 'repeat_times':
                const timesBlock = block.getInputTargetBlock('TIMES');
                if (timesBlock && timesBlock.type === 'number') {
                    const times = parseInt(timesBlock.getFieldValue('NUM'));
                    const doBlock = block.getInputTargetBlock('DO');
                    if (doBlock && times > 0) {
                        for (let i = 0; i < times; i++) {
                            executeBlock(doBlock, userMessage);
                        }
                        executed = true;
                    }
                }
                break;
                
            case 'wait':
                const secondsBlock = block.getInputTargetBlock('SECONDS');
                if (secondsBlock && secondsBlock.type === 'number') {
                    const seconds = parseInt(secondsBlock.getFieldValue('NUM'));
                    // Simulate delay
                    console.log('Waiting ' + seconds + ' seconds...');
                    executed = true;
                }
                break;
                
            case 'compare_numbers':
                const aBlock = block.getInputTargetBlock('A');
                const bBlock = block.getInputTargetBlock('B');
                if (aBlock && bBlock && aBlock.type === 'number' && bBlock.type === 'number') {
                    const a = parseInt(aBlock.getFieldValue('NUM'));
                    const b = parseInt(bBlock.getFieldValue('NUM'));
                    const op = block.getFieldValue('OP');
                    let result = false;
                    
                    switch(op) {
                        case '==': result = a === b; break;
                        case '>': result = a > b; break;
                        case '<': result = a < b; break;
                        case '>=': result = a >= b; break;
                        case '<=': result = a <= b; break;
                        case '!=': result = a !== b; break;
                    }
                    
                    if (result) {
                        const thenBlock = block.getInputTargetBlock('THEN');
                        if (thenBlock) {
                            executeBlock(thenBlock, userMessage);
                            executed = true;
                        }
                    }
                }
                break;
                
            case 'variable_set':
                const varName = block.getFieldValue('VAR');
                const valueBlock = block.getInputTargetBlock('VALUE');
                if (valueBlock) {
                    const value = getTextValue(valueBlock, userMessage);
                    window.botVariables[varName] = value;
                    console.log('Variable set:', varName, '=', value);
                    executed = true;
                }
                break;
                
            case 'procedure_call':
                const procName = block.getFieldValue('NAME');
                if (window.botProcedures && window.botProcedures[procName]) {
                    console.log('Calling procedure:', procName);
                    executeBlock(window.botProcedures[procName], userMessage);
                    executed = true;
                } else {
                    console.warn('Procedure not found:', procName);
                }
                break;
        }
        
        // Execute next block in sequence
        const nextBlock = block.getNextBlock();
        if (nextBlock) {
            executeBlock(nextBlock, userMessage);
        }
        
        return executed;
    }
    
    // Get text value from a block (handles text, user_message, user_name, variable_get, text_join)
    function getTextValue(block, userMessage) {
        if (!block) return '';
        
        switch (block.type) {
            case 'text':
                return block.getFieldValue('TEXT');
            case 'user_message':
                return userMessage;
            case 'user_name':
                return 'User'; // Simulated user name
            case 'variable_get':
                const varName = block.getFieldValue('VAR');
                return window.botVariables[varName] || '';
            case 'text_join':
                const text1Block = block.getInputTargetBlock('TEXT1');
                const text2Block = block.getInputTargetBlock('TEXT2');
                const text1 = text1Block ? getTextValue(text1Block, userMessage) : '';
                const text2 = text2Block ? getTextValue(text2Block, userMessage) : '';
                return text1 + text2;
            default:
                return '';
        }
    }
    
    // Get buttons from keyboard block
    function getButtons(block) {
        if (!block) return [];
        
        const buttons = [];
        
        if (block.type === 'inline_button') {
            buttons.push({
                text: block.getFieldValue('TEXT'),
                callback: block.getFieldValue('CALLBACK')
            });
        } else if (block.type === 'button_row') {
            for (let i = 1; i <= 3; i++) {
                const btnBlock = block.getInputTargetBlock('BUTTON' + i);
                if (btnBlock && btnBlock.type === 'inline_button') {
                    buttons.push({
                        text: btnBlock.getFieldValue('TEXT'),
                        callback: btnBlock.getFieldValue('CALLBACK')
                    });
                }
            }
        }
        
        return buttons;
    }
    
    // Get menu buttons from keyboard block
    function getMenuButtons(block) {
        if (!block) return [];
        
        const buttons = [];
        
        if (block.type === 'keyboard_button' || block.type === 'request_contact_button' || block.type === 'request_location_button') {
            buttons.push({
                text: block.getFieldValue('TEXT'),
                type: block.type
            });
        } else if (block.type === 'keyboard_row') {
            for (let i = 1; i <= 3; i++) {
                const btnBlock = block.getInputTargetBlock('BUTTON' + i);
                if (btnBlock && (btnBlock.type === 'keyboard_button' || btnBlock.type === 'request_contact_button' || btnBlock.type === 'request_location_button')) {
                    buttons.push({
                        text: btnBlock.getFieldValue('TEXT'),
                        type: btnBlock.type
                    });
                }
            }
        }
        
        return buttons;
    }
    
    // Add bot message with buttons
    function addBotMessageWithButtons(text, buttons) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        
        const textDiv = document.createElement('div');
        textDiv.textContent = text;
        messageDiv.appendChild(textDiv);
        
        if (buttons.length > 0) {
            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = 'margin-top: 10px; display: flex; gap: 6px; flex-wrap: wrap;';
            
            buttons.forEach(btn => {
                const button = document.createElement('button');
                button.textContent = btn.text;
                button.style.cssText = `
                    padding: 8px 16px;
                    border: none;
                    background: linear-gradient(135deg, rgba(100,181,239,0.15) 0%, rgba(79,165,224,0.15) 100%);
                    color: #64b5ef;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.2s;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(100,181,239,0.3);
                `;
                button.onmouseover = () => {
                    button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.25) 0%, rgba(79,165,224,0.25) 100%)';
                    button.style.transform = 'translateY(-1px)';
                };
                button.onmouseout = () => {
                    button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.15) 0%, rgba(79,165,224,0.15) 100%)';
                    button.style.transform = 'translateY(0)';
                };
                button.onclick = () => handleButtonClick(btn.callback, btn.text);
                buttonContainer.appendChild(button);
            });
            
            messageDiv.appendChild(buttonContainer);
        }
        
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }
    
    // Handle button click in simulator
    function handleButtonClick(callback, buttonText) {
        console.log('Button clicked:', callback);
        
        // Find callback handler blocks
        const topBlocks = workspace.getTopBlocks(false);
        let handlerFound = false;
        
        for (let i = 0; i < topBlocks.length; i++) {
            const block = topBlocks[i];
            
            if (block.type === 'on_callback') {
                const callbackData = block.getFieldValue('CALLBACK');
                if (callbackData === callback) {
                    const childBlock = block.getInputTargetBlock('CALLBACK_HANDLER');
                    if (childBlock) {
                        executeCallbackBlock(childBlock, buttonText);
                        handlerFound = true;
                    }
                }
            }
        }
        
        if (!handlerFound) {
            addBotMessage('(No handler configured for this button)');
        }
    }
    
    // Execute callback handler blocks
    function executeCallbackBlock(block, buttonText) {
        if (!block) return;
        
        switch (block.type) {
            case 'answer_callback':
                const textBlock = block.getInputTargetBlock('TEXT');
                if (textBlock && textBlock.type === 'text') {
                    const text = textBlock.getFieldValue('TEXT');
                    addBotMessage('🔔 ' + text);
                }
                break;
            case 'send_message':
                const messageBlock = block.getInputTargetBlock('MESSAGE');
                if (messageBlock && messageBlock.type === 'text') {
                    const text = messageBlock.getFieldValue('TEXT');
                    addBotMessage(text);
                }
                break;
        }
        
        // Execute next block in sequence
        const nextBlock = block.getNextBlock();
        if (nextBlock) {
            executeCallbackBlock(nextBlock, buttonText);
        }
    }
    
    // Add bot photo message
    function addBotPhoto(url, caption) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        messageDiv.style.maxWidth = '300px';
        messageDiv.style.padding = '4px';
        
        const img = document.createElement('img');
        img.src = url;
        img.style.cssText = `
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: ${caption ? '6px' : '0'};
            display: block;
        `;
        img.onerror = function() {
            this.style.display = 'none';
            const errorText = document.createElement('div');
            errorText.textContent = '📷 [Photo: ' + url + ']';
            errorText.style.cssText = 'font-style: italic; color: #8b95a0; padding: 8px;';
            messageDiv.insertBefore(errorText, this);
        };
        messageDiv.appendChild(img);
        
        if (caption) {
            const captionDiv = document.createElement('div');
            captionDiv.textContent = caption;
            captionDiv.style.cssText = 'padding: 4px 8px; color: #e8e8e8; font-size: 14px;';
            messageDiv.appendChild(captionDiv);
        }
        
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }
    
    // Add bot message with menu (reply keyboard)
    function addBotMessageWithMenu(text, buttons) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        
        const textDiv = document.createElement('div');
        textDiv.textContent = text;
        messageDiv.appendChild(textDiv);
        
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
        
        // Show reply keyboard at bottom
        if (buttons.length > 0) {
            showReplyKeyboard(buttons);
        }
    }
    
    // Show reply keyboard
    function showReplyKeyboard(buttons) {
        let keyboard = document.getElementById('reply-keyboard');
        if (!keyboard) {
            keyboard = document.createElement('div');
            keyboard.id = 'reply-keyboard';
            keyboard.style.cssText = `
                position: absolute;
                bottom: 66px;
                left: 0;
                right: 0;
                padding: 12px;
                background: linear-gradient(to bottom, rgba(26,31,39,0.98) 0%, rgba(15,20,25,0.98) 100%);
                border-top: 1px solid rgba(255,255,255,0.08);
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                z-index: 100;
                backdrop-filter: blur(10px);
                box-shadow: 0 -4px 12px rgba(0,0,0,0.2);
            `;
            document.querySelector('.telegram-simulator').appendChild(keyboard);
        }
        
        keyboard.innerHTML = '';
        
        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.textContent = btn.text;
            button.style.cssText = `
                padding: 10px 18px;
                border: 1px solid rgba(100,181,239,0.3);
                background: linear-gradient(135deg, rgba(47,56,65,0.9) 0%, rgba(35,40,47,0.9) 100%);
                color: #e8e8e8;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                flex: 1;
                min-width: 100px;
                transition: all 0.2s;
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            `;
            
            if (btn.type === 'request_contact_button') {
                button.textContent = '📱 ' + btn.text;
                button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.15) 0%, rgba(79,165,224,0.15) 100%)';
            } else if (btn.type === 'request_location_button') {
                button.textContent = '📍 ' + btn.text;
                button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.15) 0%, rgba(79,165,224,0.15) 100%)';
            }
            
            button.onmouseover = () => {
                button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.25) 0%, rgba(79,165,224,0.25) 100%)';
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
            };
            button.onmouseout = () => {
                if (btn.type === 'request_contact_button' || btn.type === 'request_location_button') {
                    button.style.background = 'linear-gradient(135deg, rgba(100,181,239,0.15) 0%, rgba(79,165,224,0.15) 100%)';
                } else {
                    button.style.background = 'linear-gradient(135deg, rgba(47,56,65,0.9) 0%, rgba(35,40,47,0.9) 100%)';
                }
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
            };
            button.onclick = () => {
                const input = document.getElementById('user-input');
                input.value = btn.text;
                document.getElementById('send-btn').click();
            };
            
            keyboard.appendChild(button);
        });
        
        keyboard.style.display = 'flex';
    }
    
    // Hide reply keyboard
    function hideReplyKeyboard() {
        const keyboard = document.getElementById('reply-keyboard');
        if (keyboard) {
            keyboard.style.display = 'none';
        }
    }
    
    // Show typing indicator
    function showTypingIndicator() {
        const messages = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'message bot';
        typingDiv.style.cssText = 'padding: 12px 16px; max-width: 60px;';
        typingDiv.innerHTML = `
            <div style="display: flex; gap: 4px; align-items: center;">
                <div class="typing-dot" style="width: 8px; height: 8px; background: #64b5ef; border-radius: 50%; animation: typingBounce 1.4s infinite;"></div>
                <div class="typing-dot" style="width: 8px; height: 8px; background: #64b5ef; border-radius: 50%; animation: typingBounce 1.4s infinite 0.2s;"></div>
                <div class="typing-dot" style="width: 8px; height: 8px; background: #64b5ef; border-radius: 50%; animation: typingBounce 1.4s infinite 0.4s;"></div>
            </div>
        `;
        messages.appendChild(typingDiv);
        messages.scrollTop = messages.scrollHeight;
        
        // Add animation if not already in stylesheet
        if (!document.getElementById('typing-animation')) {
            const style = document.createElement('style');
            style.id = 'typing-animation';
            style.textContent = `
                @keyframes typingBounce {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
                    30% { transform: translateY(-8px); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Hide typing indicator
    function hideTypingIndicator() {
        const typingDiv = document.getElementById('typing-indicator');
        if (typingDiv) {
            typingDiv.remove();
        }
    }
    
    // Initialize bot behavior (called when Run Simulation is clicked)
    function initializeBotBehavior() {
        // Initialize global variables for simulator
        window.botVariables = {};
        window.botProcedures = {};
        
        // Extract and store all procedure definitions
        const topBlocks = workspace.getTopBlocks(false);
        for (let i = 0; i < topBlocks.length; i++) {
            const block = topBlocks[i];
            if (block.type === 'procedure_def') {
                const name = block.getFieldValue('NAME');
                const statements = block.getInputTargetBlock('STATEMENTS');
                window.botProcedures[name] = statements;
            }
        }
        
        console.log('Bot behavior initialized from blocks');
        console.log('Procedures defined:', Object.keys(window.botProcedures));
    }

    function addUserMessage(text) {
        addMessage(text, 'user');
    }

    function addBotMessage(text) {
        addMessage(text, 'bot');
    }

    function addMessage(text, sender) {
        const messages = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    // Add a welcome message
    setTimeout(() => {
        addBotMessage('👋 Welcome to Bot Simulator! Click "▶️ Run Simulation" to start testing your bot.');
    }, 300);
});
