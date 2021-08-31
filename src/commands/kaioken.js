const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://media.tenor.com/images/98816e4a41c4d636c2f790a05e38a456/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('kaioken')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} esta usando o kaioken`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}