const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');


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
                channelId: msg.member.voice.channelId,
                guildId: msg.guildId,
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


client.login(process.env.TOKEN);