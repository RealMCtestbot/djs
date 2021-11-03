const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "info",
    aliases: [],
    description: "Zdobądź informacje!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first() || message.author;
        const memberTarget = message.guild.members.cache.get(userTarget.id);

        let isBot;
        if (userTarget.bot) isBot = 'tak';
        else isBot = 'nie';

        const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setAuthor(`Informacje o użytkowniku ${userTarget.username}`, userTarget.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter("RealMC!")
            .addFields(
                { name: "Tag oraz ID: ", value: `${userTarget.tag} | ${userTarget.id}` },
                { name: "Czy jest botem: ", value: isBot },
                { name: 'Pseudonim użytkownika: ', value: memberTarget.nickname || "Nie istnieje." },
                { name: "Dołączył do serwera: ", value: new Date(memberTarget.joinedTimestamp).toLocaleDateString() },
                { name: "Data założenia konta: ", value: new Date(userTarget.createdTimestamp).toLocaleDateString() }
            );

        message.channel.send(embed);
    }
}