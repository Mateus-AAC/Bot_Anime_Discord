const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://i.pinimg.com/originals/bd/26/d5/bd26d562584ec017829e49febc1d8a7d.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-3')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-3 `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}