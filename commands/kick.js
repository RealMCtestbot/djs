module.exports = {
    name: 'kick',
    aliases: [],
    description: 'Wyrzucenie użytkownika.',
    execute(message, args) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Nie posiadasz uprawnień do tej komendy!')

        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('Użytkownik został wyrzucony!')
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz wyrzucić!');
        }
    }
}