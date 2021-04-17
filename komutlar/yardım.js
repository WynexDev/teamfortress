const Discord = require('discord.js')

    exports.run = (client, message) => {
        const wynex = new Discord.MessageEmbed()
        
        .setTimestamp()
        .setTitle("Team Fortress Wynex")
        .setThumbnail("https://i.redd.it/iuxp62q1v6h21.png")

        .setDescription(`
**!scout**
**!pyro** 
**!demoman** 
**!engineer**
**!heavy**
**!medic**
**!sniper** 
**!soldier**
**!spy** 
--------------------------------------------------------
`)
     
        message.channel.send(wynex)
    }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yardım","y","yrdm","h",  "help","muzik","sistem",""],
    permLevel:0
}

exports.help = {
    name:"yardım"
}