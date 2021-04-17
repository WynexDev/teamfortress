const Discord = require('discord.js'); 


exports.run = (client, message) => {
    let teamfortresskarakter =  require("teamfortresskarakter");

    function  karakterbul(karakter) {
        return karakter.id  ===  'heavy'; 
        };
        
        let bilgiler = teamfortresskarakter.find(karakterbul)
        
    let embed = new Discord.MessageEmbed()
    .setThumbnail(bilgiler.resim)
    .setTitle(bilgiler.name)
        .addField("Adı: ", bilgiler.name)
        .addField("Hikayesi: ", bilgiler.hikaye)
        .addField("Hızı: ", bilgiler.hız)
        .addField("Canı: ", bilgiler.can)
        .addField("Ubercharge: ", bilgiler.ubercharge)
        .addField("Boyu: ", bilgiler.boy)
        .addField("Kilosu: ", bilgiler.kilo)
        message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["heavy"],
  permLevel: 0 
};

exports.help = {
  name: 'heavy', 
  description: 'heavy', 
  usage: 'heavy'
};




