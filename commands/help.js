const helpMessage = `
This is the welcome bot!\n
Welcome to harshal's server\n
Some useful commands -\n 
    !bot - for a welcome message\n
    !gif - for a random discord gif\n 
    !gif query_term - for a specific query\n
    example - !gif cute kitten
`

module.exports = function(msg, args){
    msg.channel.send(helpMessage);
}
