const vscode = require('vscode')
const messages = require('../config/messages')
const config = require('../config/settings.js')

let lastMessage = Date.now()

function showMessage(message, mode) {
    if (config.hideNotifications == false) {
        message = messages[message]

        if (message.toLowerCase().includes('argon') == false) {
            message = 'Argon: ' + message
        }
    
        switch (mode){
            case 1:
                vscode.window.showWarningMessage(message)
                break
            case 2:
                if (Date.now() - lastMessage < 1000) {
                    return
                }
                lastMessage = Date.now()

                vscode.window.showErrorMessage(message)
                break
            default:
                vscode.window.showInformationMessage(message)
                break
        }
    }
}

module.exports = {
    showMessage
}