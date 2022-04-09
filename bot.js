const Discord = require('discord.js');
const client = new Discord.Client({
    presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: "!help",
            type: "PLAYING",
        }],
    }
});

require('dotenv').config();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log(':heart')
}


const commandHandler = require('./commands')
client.on('message', commandHandler);
client.on('ready',()=>{
    client.user.setActivity("!help",{type: "PLAYING"})
})
