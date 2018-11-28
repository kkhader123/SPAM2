const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === 'يومي'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'مصاري'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'مصاري'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'يومي'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === 'مصاري'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'مصاري'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam 2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The Killer  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam 2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The Killer **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
