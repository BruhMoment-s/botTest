const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.substring(0,8) === '_update ') {
        let embedContent = message.content.substring(8);
        let embed = new Discord.MessageEmbed();
        embed.setDescription(embedContent);
        embed.setColor('#c9c9c9');
        embed.setTitle("Embed Made" );
        embed.setTimestamp();

        message.channel.send(embed);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
