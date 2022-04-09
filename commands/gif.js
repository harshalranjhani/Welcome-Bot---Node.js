const fetch = require('node-fetch');

module.exports = async function (msg, args) {
    let keywords = 'discord';
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=off`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    let index = Math.floor(Math.random() * data.results.length);
    msg.channel.send(data.results[index].url);
    msg.channel.send(`GIF from Tenor: ${keywords}`);
}