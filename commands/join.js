const { joinVoiceChannel } = require('@discordjs/voice');


module.exports = {
    name: 'join',
    description: 'Joins ',
    async execute(message, args) {
 

        if (!joinVoiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        if (!args[0]) return message.channel.send("lol");



        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

       // const connection = await channel.join();


    }
}


