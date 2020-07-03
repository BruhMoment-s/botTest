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
    if (message.content.substring(0,7) === '_clear ') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {
          let args1 = message.content.substring(7,message.length);
          message.channel.bulkDelete(args1)
          message.channel.send("Done clearing messages! Diagnostics: Cleared "+ args1 + " messages.");
          setTimeout(function(){ 
            message.delete();
           }, 10000);

      }


    }
    if (message.content.substring(0,5) === '_help'){
        const embed = {
  "title": "Xedved help",
  "description": "Here are known bug fixes to Xedved",
  "color": 12390624,
  "timestamp": "2020-07-03T14:14:39.138Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Xedved help alert"
  },
  "fields": [
    {
      "name": "I cant run Xedved. What do I do?",
      "value": "Try disabling your windows anti virus. And then reinstall Xedved. If that does not work please contact staff"
    },
    {
      "name": "How do I put scripts in Xedved?",
      "value": "Just put the file in the scripts folder."
    },
    {
      "name": "How do I put scripts in Xedved scripthub?",
      "value": "Put the file in the Scripthub folder. The contents of the file should look something like this\n```First line is the Title\nSecond line is the description\nThird line and bellow is the code```"
    }
  ]
};
channel.send({ embed });
        
        message.delete();
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
