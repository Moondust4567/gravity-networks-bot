const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '^'
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		message.channel.sendMessage('pong');
		}
	}
	)

client.login(process.env.BOT_TOKEN);
