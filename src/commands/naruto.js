const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/4087513f30d6ed8f371a0f11c705a359/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('naruto')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} acabe de gritar naruto `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('naruto')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}