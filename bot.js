const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.substring(0,8) === '_update ') {
      let staffrole = ['703677189941493812'];
        for(i=0;i<staffrole.length;i++) {
            if(msg.member.roles.filter((role) => role.id == staffrole[i]).size > 0) {
             
              

              let embedContent1 = message.content.substring(8,message.length);
              embedContent1 = "- " + embedContent1;
               let embedContent;
       
               let i = 0; 
               for (i = 0; i < embedContent1.length; i++) {
                  embedContent1 = embedContent1.replace("|","\n- ");
                 }
             
       
       
       
               const embed = {
                   "title": "Xedved update",
                   "color": 8359053,
                   "timestamp": new Date(),
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
                       "value": "```"+ "\n" + embedContent1 + "```"
                     }
                   ]
                 };
                 
                message.channel.send(message.guild.defaultRole.toString(),{ embed });
               
               }



                return;
            }
        }
     
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
