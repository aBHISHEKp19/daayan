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

client.once('ready', () => { console.log('daayan is here'); 

client.user.setActivity("BB |" + BotVersion);

});

client.on('messageCreate', message => {


if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);

const command = args.shift().toLowerCase();


if (command === 'join') {
    client.commands.get('join').execute(message, args);


}
})


client.login(process.env.TOKEN);