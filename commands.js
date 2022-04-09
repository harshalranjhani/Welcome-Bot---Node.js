const bot = require('./commands/welcome.js')
const gif = require('./commands/gif.js');
const help = require('./commands/help.js');

const commands = { bot, gif, help };

module.exports = async function (msg) {
    // console.log(msg.content)
    if (msg.channel.id === '962242299226628097') {
        let tokens = msg.content.split(' ');
        let command = tokens.shift(); // removes the first element and shifts the array accordingly
        try {
            if (command.charAt(0) === '!') {
                command = command.substring(1);
                commands[command](msg, tokens); // here tokens is the argument
                // valid command
            }
        } catch (e) {
            console.log("Not a valid command!");
        }
    }
}