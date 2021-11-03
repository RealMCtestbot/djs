const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL,', 'REACTION'] });
const prefix = '.';
const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));



client.once('ready', () => {
    console.log('Code First - Bot jest online');
    client.user.setActivity('RealMC', { type: 'LISTENING' });
});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'embed') {
        client.commands.get('embed').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'komendy') {
        client.commands.get('komendy').execute(message, args, Discord, client);
    } else if (command === '2137') {
        client.commands.get('2137').execute(message, args, Discord, client);
    }
});

client.on('guildMemberAdd', guildMember => {
    const channel = guildMember.guild.channels.cache.get('772856232527790091');

    const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle("RealMC - Witamy!")
        .setTimestamp()
        .setFooter("RealMC!")
        .setDescription(`<@${guildMember.user.id}> dołączył do serwera!`);

    channel.send(embed);
})

client.on('guildMemberRemove', guildMember => {
    const channel = guildMember.guild.channels.cache.get('772856370793283626');

    const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle("RealMC - Żegnamy!")
        .setTimestamp()
        .setFooter("RealMC!")
        .setDescription(`<@${guildMember.user.id}> opuścił nas.`);

    channel.send(embed);
})

client.login('OTA1MTQ3MTc4NzE5MjgxMTcy.YYF2AA.T05IJG-sppfXfml4M9MgXLeq_EA');