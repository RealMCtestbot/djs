const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  aliases: [],
  description: "create an embed!",
  async execute(message, args, Discord, client) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Nie posiadasz uprawnień do tej komendy!')

    const embedChannel = message.mentions.channels.first();
    if (!embedChannel) {
      message.channel.send("Nie oznaczyłeś kanału!");
      return;
    }

    const content = args.slice(1).join(" ");


    let embedColor = content.split("/")[0];
    if (!embedColor) {
      message.channel.send("Nie podałeś koloru embeda.");
      return;
    }

    let embedTitle = content.split("/")[1];
    if (!embedTitle) {
      message.channel.send("Nie podałes tytułu embeda");
      return;
    }

    let embedDescription = content.split("/")[2];
    if (!embedDescription) {
      message.channel.send("Nie podałeś treści embeda.");
      return;
    }


    let embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setTimestamp()
      .setFooter("RealMC!");

    embedChannel.send(embed);
  },
};