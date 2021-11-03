const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "komendy",
    aliases: [],
    description: "Otwórz komendy",
    async execute(message, args, Discord, client) {

        const embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('RealMC - Komendy.')
            .setTimestamp()
            .setFooter("RealMC!")
            .setDescription(`Wszystkie komendy:
            .info
            .clear - ilość
            .ban @nick
            .kick @nick
            .embed #kanał #kolor /TYTUŁ/OPIS`);

        message.channel.send(embed);
    }
}