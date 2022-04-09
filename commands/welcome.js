const replies = [
    'Hey there!',
    'Welcome!',
    'I am a bot',
    'Discord is amazing!'
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index])
}