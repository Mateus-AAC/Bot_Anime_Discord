const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://media.tenor.com/images/0f703efe3c353a7014dd0df05e94766e/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('sasuke')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} acabe de gritar sasuke `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('sasuke')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}