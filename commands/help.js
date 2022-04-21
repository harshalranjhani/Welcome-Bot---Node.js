const { MessageEmbed } = require("discord.js");

module.exports = async function (msg, args) {
  const embed = new MessageEmbed()
    .setDescription(
      "Welcome to harshal's server. Here are some commands that might be of help - "
    )
    .addFields([
      { name: "!help", value: "To know more about this bot" },
      { name: "!bot", value: "to get a welcome message from the bot" },
      { name: "!gif", value: "to get a random discord gif" },
      {
        name: "!gif query_term",
        value: "for a specific query gif\nexample - !gif cute kitten",
      },
    ])
    .setTitle("Help")
    .setColor("GREEN")
    .setImage(
      "https://i.pinimg.com/564x/7c/71/01/7c71017e5cf258c5d6e9409a2a8f5900.jpg"
    );
  msg.channel.send(embed);
};
