const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');

                                                      // YO KUSHAL BRO 



require('dotenv').config();

const client = new Discord.Client({ intents: 32767 });


const prefix = '&';

const fs = require('fs');



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
let BotVersion = "VC Bot";
for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('daayan is here');

    //client.user.setActivity("BB |" + BotVersion);
    client.user.setActivity('BHOOT BANGLA', { type: 'WATCHING' });
});

client.on('messageCreate', message => {
    if (message.content === prefix + 'ping') {

        // msg.delete()
        const lil = new Discord.MessageEmbed()

            .setDescription("**STATUS**")
            .addField('Message Latency🎈', `${Date.now() - message.createdTimestamp}ms`)
            .addField('API Latency🎈', `${client.ws.ping}ms`)
            .setTimestamp()
        message.channel.send({ embeds: [lil] });

    }

});
client.on('messageCreate', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if (command === 'join') {
        client.commands.get('join').execute(message, args);
    }

    if (message.content === prefix + 'stats') {
        return message.reply(`Server count: ${client.guilds.cache.size}.`);
    }

    if (command === 'speak') {

        message.channel.send("**DAAYAN HUN MAI**", { tts: true })

    }

})
    client.on('messageCreate', message => {

        if (message.mentions.has(client.user.id)) {
            message.channel.send("**DAAYAN LOVES YOU!!!**");
        }
      
     /*   if (message.content === 'Hi') {

            message.channel.send("**TU CHUP SAALE <a:spookyghost:934414566845198356>**");
        }*/

        if (message.content === 'chup') {

            message.channel.send("**TU CHUP BEY <a:spookyghost:934414566845198356>**");
        }
        if (message.content === 'Chup') {

            message.channel.send("**TU CHUP SAALE <a:spookyghost:934414566845198356>**");
        }
        if (message.content === 'Uhhun') {

            message.channel.send("** UHHUN <a:spookyghost:934414566845198356>**");
        }
        if (message.content === 'uhhun') {

            message.channel.send("** UHHUN <a:spookyghost:934414566845198356>**");
        }

        if (message.content === 'Meri h') {

            message.channel.send("**Mai sirf `APPY` Ki hun <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'meri h') {

            message.channel.send("**Mai sirf `APPY` Ki hun <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'Appy') {

            message.channel.send("**I LOVE YOU appu <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'appy') {

            message.channel.send("**I LOVE YOU appu <a:ghostu:934414227026878496>**");
        }

        if (message.content === 'Kushal') {

            message.channel.send("**I MISS HIM TOO <a:ghostu:934414227026878496>**");
        } 
        if (message.content === 'kushal') {

            message.channel.send("**I MISS HIM TOO <a:ghostu:934414227026878496>**");
        } 

        if (message.content === 'ily') {

            message.channel.send("**I LOVE YOU TOO <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'Ily') {

            message.channel.send("**I LOVE YOU TOO <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'ansh') {

            message.channel.send("**Vo toh sexy hai <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'Ansh') {

            message.channel.send("**Vo toh sexy hai <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'Nandini') {

            message.channel.send("**NANDU SABKA BANDU <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'nandini') {

            message.channel.send("**NANDU SABKA BANDU <a:ghostu:934414227026878496>**");
        }


        if (message.content === 'Kirti') {

            message.channel.send("**CHAMELI HAI VO <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'kirti') {

            message.channel.send("**CHAMELI HAI VO <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'nikita') {

            message.channel.send("**BIG FAN MAM!!! <a:ghostu:934414227026878496>**");
        }
        if (message.content === 'Nikita') {

            message.channel.send("**BIG FAN MAM!!!  <a:ghostu:934414227026878496>**");
        }

        if (message.content.has('hi')) {

            message.channel.send("** hoi <a:spookyghost:934414566845198356>**");
        }





    /*    if (message.content === 'Rule 1') {

           message.channel.send(`**▸Use channels for the thing they are made for,  this includes (but not limited to) media channel for sending media, chat Channel for chatting, Bot commands for using Commands 
     Punishment: 3h Mute | 1d Hardmute | 7d kick | Ban**`);
        }  */


    })

/*
const discordTTS = require("discord-tts");

const { AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel } = require("@discordjs/voice");


let voiceConnection;
let audioPlayer = new AudioPlayer();

client.on("messageCreate", async (msg) => {
    if (msg.content === prefix + "tts") { 
        const stream = discordTTS.getVoiceStream("BHOOT HUN MAI");
        const audioResource = createAudioResource(stream, { inputType: StreamType.Arbitrary, inlineVolume: true });
        if (!voiceConnection || voiceConnection?.status === VoiceConnectionStatus.Disconnected) {
            voiceConnection = joinVoiceChannel({
                channelId: msg.member.voice.channel.id,
                guildId: msg.guild.id,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });
            voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }

        if (voiceConnection.status === VoiceConnectionStatus.Connected) {
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }
    }
});*/
client.on('messageDelete', message => {
    if (message.author.bot) return;
    if (message.mentions.users.bot) return;
    if (message.mentions.has(client.user.id)) return;

    if (message.mentions.users.first()) {


        const lol = new Discord.MessageEmbed()
            .setColor('#fb1239')
            .setDescription(`${message.author} ghost pinged ${message.mentions.users.first()}`)
            .addField('Message Content', message.content)
            .setFooter('ghost ping krna buri baat')

        // const channel = client.channels.cache.get(`925991578160492624`)
        // channel.send({ embeds: [lol] }) 
        return message.channel.send({ embeds: [lol] });

    }
});

client.login(process.env.TOKEN);