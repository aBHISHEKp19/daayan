const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');


require('dotenv').config();

const client = new Discord.Client({intents: 32767 });

const Id = "910239243371163698"


const prefix = '&';

const fs = require('fs');
const { getMaxListeners } = require('process');

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
        return message.reply(`Server count: ${client.guilds.cache.size}.\nUser count: ${client.users.cache.size} users\nChannels: ${client.channels.cache.size} channels`);
    }

    if (command === 'speak') {

        message.channel.send("**DAAYAN HUN MAI**", { tts: true })

    }

})
client.on('messageCreate', message => {

    if (message.mentions.has(client.user.id)) {
        message.channel.send("**KHOON CHOOS LUNGI TERA <a:yyghost:926936421208580096>**");
    }



    /*   if (message.content === 'Hi') {

           message.channel.send("**TU CHUP SAALE <a:yyghost:926936421208580096>**");
       }*/

    /* if (message.content === 'chup') {

         message.channel.send("**TU CHUP BEY <a:yyghost:926936421208580096>**");
     }
     if (message.content === 'Chup') {

         message.channel.send("**TU CHUP SAALE <a:yyghost:926936421208580096>**"); 
     } */

    if (message.content === 'Uhhun') {

        message.channel.send("** UHHUN <a:yyghost:926936421208580096>**");
    }
    if (message.content === 'uhhun') {

        message.channel.send("** UHHUN <a:yyghost:926936421208580096>**");
    }

    if (message.content.startsWith('Meri h')) {

        message.channel.send("**Mai sirf `APPY` Ki hun <a:Heart:926930770629648524>**");
    }
    if (message.content.startsWith('meri h')) {

        message.channel.send("**Mai sirf `APPY` Ki hun <a:Heart:926930770629648524>**");
    }
    if (message.content === 'Appy') {

        message.channel.send("**I LOVE YOU appu <a:Heart:926930770629648524>**");
    }
    if (message.content === 'appy') {

        message.channel.send("**I LOVE YOU appu <a:Heart:926930770629648524>**");
    }

    /* if (message.content === 'Kushal') {

         message.channel.send("**Voh toh marr gaya...<a:PI_HeartScribble:927198819869949962>**");
     } 
     if (message.content === 'kushal') {

         message.channel.send("**Voh toh marr gaya...<a:PI_HeartScribble:927198819869949962>**");
     } */

    if (message.content.startsWith('ily')) {

        message.channel.send("**I LOVE YOU TOO <a:Heart:926930770629648524>**");
    }
    if (message.content.startsWith('Ily')) {

        message.channel.send("**I LOVE YOU TOO <a:Heart:926930770629648524>**");
    }
    if (message.content === 'ansh') {

        message.channel.send("**Vo toh sexy hai <a:Heart:926930770629648524>**");
    }
    if (message.content === 'Ansh') {

        message.channel.send("**Vo toh sexy hai <a:Heart:926930770629648524>**");
    }

    /* if (message.content === 'Nandini') {

          message.channel.send("**NANDU CHIRKUNDI HAI <a:Heart:926930770629648524>**");
      }
      if (message.content === 'nandini') {

          message.channel.send("**NANDU CHIRKUNDI HAI <a:Heart:926930770629648524>**");
      } */


    if (message.content === 'Kirti') {

        message.channel.send("**CUTIE HAI VO <a:Heart:926930770629648524>**");
    }
    if (message.content === 'kirti') {

        message.channel.send("**CUTIE HAI VO <a:Heart:926930770629648524>**");
    }
    if (message.content.startsWith('niki')) {

        message.channel.send("**MAALKIN KI JAI HO!!! <a:Heart:926930770629648524>**");
    }
    if (message.content.startsWith('Niki')) {

        message.channel.send("**MAALKIN KI JAI HO!!!  <a:Heart:926930770629648524>**");
    }

    if (message.content === 'hi') {

        message.channel.send("** hoi <a:yyghost:926936421208580096>**");
    }

    if (message.content === 'Hi') {

        message.channel.send("** hoi <a:yyghost:926936421208580096>**");
    }

    if (message.content.startsWith('jiya')) {

        message.channel.send("**CHARAS PHUK RHI VO!!! <a:Heart:926930770629648524>**");
    }
    if (message.content.startsWith('Jiya')) {

        message.channel.send("**CHARAS PHUK RHI VO!!! <a:Heart:926930770629648524>**");
    }

    /*    if (message.content === 'Rule 1') {

           message.channel.send(`**▸Use channels for the thing they are made for,  this includes (but not limited to) media channel for sending media, chat Channel for chatting, Bot commands for using Commands 
     Punishment: 3h Mute | 1d Hardmute | 7d kick | Ban**`);
        }  */


})/*
client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + 'dm')) {
      if (message.author.id != Id) {
        return message.reply('Only Owner is Allowed to Use this Command')
      }
      else {
        message.delete
        args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
  
        message.guild.members.cache.forEach(member => {
          member.send(argresult).then(message.channel.send(`DMING${member.user.username}#${member.user.discriminator}`))
          .catch(err => message.channel.send(`-----[DM's Disabled]----- \n${member.user.username}#${member.user.discriminator}`));
          message.channel.send(`.....DONE....`)
        })
        message.channel.send(`**DONE**`).then(message.delete({ timeout: 1000 }));
      }
    }
  })*/

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
/*client.on('messageDelete', message => {
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
});*/

client.login(process.env.TOKEN);