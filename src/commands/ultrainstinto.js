const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://i.pinimg.com/originals/8f/a2/f7/8fa2f754af6fbef13b82b7619a6cd29c.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ultra instinto')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} dispertou o ultra instinto `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}