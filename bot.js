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

client.login('NDYxNDcxNTg1NzcwMDEyNjgx.DhT14w.InGtjZ9j_GWC_ya4xRpnWq3L9Ew');
