const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.substring(0,8) === '_update ') {
        let embedContent1 = message.content.substring(8,message.length);
       
        let embedContent = embedContent1.replaceAll("|","\n");
        const embed = {
            "title": "Xedved update",
            "color": 8359053,
            "footer": {
              "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
              "text": "Xedved update alert"
            },
            "fields": [
              {
                "name": "_ _",
                "value": "Version 2.2",
                "inline": true
              },
              {
                "name": "_ _",
                "value": "Update logs:",
                "inline": true
              },
              {
                "name": "_ _",
                "value": "```"+ "\n" + embedContent + "```"
              }
            ]
          };
         message.channel.send(message.guild.defaultRole.toString(),{ embed });

     //   message.reply({embed});
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
