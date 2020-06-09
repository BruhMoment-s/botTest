const Discord = require('discord.js');
const client = new Discord.Client();
let lockdown = false;

client.on('ready', () => {
    console.log('I am ready!');

});

client.on('message', message => {

  let linkDownload;


  
    if (message.content.substring(0,8) === '_update ') {
     
      if (message.member.hasPermission("ADMINISTRATOR"))
      {
        let embedContent1 = message.content.substring(8,message.length);
       embedContent1 = "- " + embedContent1;
        let embedContent;

        let i = 0; 
        for (i = 0; i < embedContent1.length; i++) {
           embedContent1 = embedContent1.replace("|","\n- ");
          }
  

          const bruh = require("./downloadLink.json");

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
                "value": "Version " + bruh.version,
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
        message.delete();
        }
         
     //   message.reply({embed});
    }
   
    if (message.content.substring(0,6) === '_link ') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {
        
        let contentSub = message.content.substring(6,message.length);
        message.delete();
        linkDownload = contentSub;
   

      }


    }
    if (message.content.substring(0,5) === '_lock') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {

          lockdown = true;
          message.channel.send("Discord guild Locked");
          message.channel.send("Lockdown value: " + lockdown)
        


      }


    }
    if (message.content.substring(0,7) === '_unlock') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {

      
          lockdown = false;
          message.channel.send("Discord guild unlocked");
          message.channel.send("Lockdown value: " + lockdown)


      }


    }
    if (message.content.substring(0,6) === '_clear') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {

        let args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
        let amount = args.join(' '); // Amount of messages which should be deleted
   
    
          if (args[0] > 100) {
            message.channel.send("[!] You cant delete more than 100 messages!");
          }
          if (args[0] < 1) {
            message.channel.send("[!] Please specify a correct amount.");
          }
          if (!args)
          { 
            message.channel.send("[!] Please specify a valid integer");
          }
          if (isNaN(args))
          {
            message.channel.send("[!] Please specify a valid integer");
          }
          message.channel.send("Clearing: " + args[0]);  
          
          await message.channel.messages.fetch({ limit: amount }).then(messagess => { // Fetches the messages
            messagess.channel.bulkDelete(messagess // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        )});

      }


    }

    if (message.content.substring(0,9) === '_download') {
 
      const bruh = require("./downloadLink.json");
      
     
      const embed = {
        "title": "Xedved download",
        "description": "Here is [Xedved]("+ bruh.link + ") have fun exploiting!",
        "color": 7419530,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
          "text": "Xedved bot alert"
        },
     
      };
      message.delete();
     message.author.send("",{ embed });


       
    }


    if (lockdown === true) 
    {
    //  message.channel.send("Message should be deleted: " +  message);
      if (message.member.hasPermission("ADMINISTRATOR"))
      {
  
      }
      else
      {
        message.delete();
      }
    }


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


