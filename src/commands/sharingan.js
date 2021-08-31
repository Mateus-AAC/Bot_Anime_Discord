const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://media.tenor.com/images/ca7115780db0aa62196693d6cc7f02fe/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('sharingan')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} dispertou o sharingan `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}