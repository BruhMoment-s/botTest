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
      if (message.member.hasPermission("ADMINISTRATOR") === false)
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
      
    if (messagelower.substring(0,6) === '_warn ') {
      if (message.member.hasPermission("ADMINISTRATOR"))
    {
       // let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
                let args1 = message.content.substring(6,message.length);
        let wUser = message.guild.member(message.mentions.users.first()) 
        if(!wUser) return message.reply("Operation failed. Reason: Member not found.");
        if (wUser.hasPermission("ADMINISTRATOR")) return message.reply("Operation failed. Reason: User is a admin.");
      let hasWarning1 = false
      let hasWarning2 = false
      let hasWarning3 = false
      let warning1ID = 740141690316259369
      let warning2ID = 740141725095559198
      let warning3ID = 740141739863572500
      let warns = 0
      if (wUser.roles.has(warning1ID) )
      {
        hasWarning1 = true
        warns = 1
      }
      if (wUser.roles.has(warning2ID) )
      {
        hasWarning2 = true
        warns = 2
      }
      if (wUser.roles.has(warning3ID) )
      {
        hasWarning3 = true
        warns = 3
      }
   
      warns++;
      
      if ( warns == 1)
      {
        const role1 = message.guild.roles.find("name", "warning 1");

      
        wUser.member.addRole(role1);
      }
      if ( warns == 2)
      {
        const role2 = message.guild.roles.find("name", "warning 2");
        wUser.member.addRole(role2);
      }
      if ( warns == 3)
      {
        const role3 = message.guild.roles.find("name", "warning 3");
        wUser.member.addRole(role3);
      }
        const warnEmbed = {
          "title": "Warning",
          "description": wUser.tag + " has been warned (" + warns +"/3)",
          "color": 11413984,
        "timestamp": new Date(),
          "footer": {
            "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
            "text": "Xedved warning alert"
          }
        };
        channel.send({ warnEmbed });

        const thirdembed = {
          "title": "Warnings.",
          "description": "It seems like you have been kicked from Xedved discord.",
          "color": 11413984,
          "timestamp": "2020-08-04T08:27:14.837Z",
          "footer": {
            "icon_url": "https://media.discordapp.net/attachments/703857786496483359/704681488402219038/xedved_thing33.png",
            "text": "Xedved warning alert"
          },
          "fields": [
            {
              "name": "_ _",
              "value": "You have broken the rules 3 times."
            },
            {
              "name": "_ _",
              "value": "Next time you will be warned will be a ban."
            },
            {
              "name": "_ _",
              "value": "We do not tolerate people who break our rules."
            },
            {
              "name": "_ _",
              "value": "If you wish to rejoin [click here](https://discord.gg/37TysQr)"
            }
          ]
        };
        if (warns == 1)
        {

        }

        if(warns == 3)
        {
        wUser.send({ thirdembed });
        wUser.kick();

        }
        if(warns == 4)
        {
        wUser.send({ thirdembed });
        wUser.ban();
        }


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
