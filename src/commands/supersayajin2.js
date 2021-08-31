const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://pa1.narvii.com/6656/0c8525763ba0a0c79aefb4d4f9e6c1bc881bbff7_00.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-2')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-2 `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}