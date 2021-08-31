const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://thumbs.gfycat.com/CrispWateryAndeancat-size_restricted.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('sharingan')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} acabe de dispertar o Mangekyo sharingan `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}