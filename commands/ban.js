module.exports = {
    name: 'ban',
    aliases: [],
    description: 'Zablokowanie użytkownika.',
    execute(message, args, Discord, client) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Nie posiadasz uprawnień do tej komendy!')

        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Użytkownik został zbanowany!')
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz zbanować!');
        }
    }
}