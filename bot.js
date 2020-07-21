const Discord = require('discord.js');
const client = new Discord.Client();
let lockdown = false;
let AntiSpam = true;


client.on('ready', () => {
    console.log('I am ready!');

});
const usersMap = new Map();
const LIMIT = 5;
const TIME = 12500;
const DIFF = 3500;
const TIMEOUT = "PERM";

client.on('message', message => {
    
  let linkDownload;
  let messagelower = message.content.toLowerCase();


  if (AntiSpam === true)
    {
      if (message.member.hasPermission("ADMINISTRATOR") === true)
      {
          if(message.author.bot === false) 

                {
            
            if(usersMap.has(message.author.id)) {
              const userData = usersMap.get(message.author.id);
              const { lastMessage, timer } = userData;
              const difference = message.createdTimestamp - lastMessage.createdTimestamp;
              let msgCount = userData.msgCount;
              console.log(difference);
              if(difference > DIFF) {
                clearTimeout(timer);
             
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() => {
                  usersMap.delete(message.author.id);
           
                }, TIME);
                usersMap.set(message.author.id, userData);
              }
              else {
                ++msgCount;
                if (parseInt(msgCount) === 4)
                {
                  message.reply("[🟢]  Please do not spam. ( if you spam 1 more message will get you muted!)");
                }
                if(parseInt(msgCount) === LIMIT) {
                    message.reply("[!]  You have been muted.");
                  const role = message.guild.roles.cache.get('735179522122711110');
                  message.member.roles.add(role);
                
               
                } if (parseInt(message) < LIMIT) {
                  userData.msgCount = msgCount;
                  usersMap.set(message.author.id, userData);
                }
              }
            }
            else {
              let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
              
              }, TIME);
              usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage: message,
                timer: fn
              });
            }
            
          }

        }
        
    }
  
    if (messagelower.substring(0,8) === '_update ') {
     
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
   
    if (messagelower.substring(0,6) === '_link ') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {
        
        let contentSub = message.content.substring(6,message.length);
        message.delete();
        linkDownload = contentSub;
        

      }


    }
    if (messagelower.substring(0,5) === '_lock') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {

          lockdown = true;
          message.channel.send("Discord guild Locked");
          message.channel.send("Lockdown value: " + lockdown)
        


      }


    }
    if (messagelower.substring(0,7) === '_unlock') {
      if (message.member.hasPermission("ADMINISTRATOR"))
      {

      
          lockdown = false;
          message.channel.send("Discord guild unlocked");
          message.channel.send("Lockdown value: " + lockdown)


      }


    }
      
    
    if (messagelower.substring(0,7) === '_clear ') {
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
    if (messagelower.substring(0,5) === '_help'){
        const embed = {
  "title": "Xedved help",
  "description": "Here are known bug fixes to Xedved",
  "color": 12390624,
  "timestamp": "2020-07-03T14:14:39.138Z",
  "footer": {
  "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
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
    },
    {
      "name": "_ _",
      "value": "If you cant open Xedved at all with windows antivirus off please use internal."
    }
  ]
};
message.channel.send({ embed });
        
        message.delete();
    }
    if (messagelower.substring(0,9) === '_download') {
 
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
