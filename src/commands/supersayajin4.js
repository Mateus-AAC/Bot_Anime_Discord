const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://i.pinimg.com/originals/7f/3e/c0/7f3ec08a7ee6a0b94c3d0e0dc33147e3.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-4')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-4 `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}