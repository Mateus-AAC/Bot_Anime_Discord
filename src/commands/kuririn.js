const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://pa1.narvii.com/6507/e0d8d741b32e581c619604f9447c1fdd3f350d9a_hq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('kuririn')
        .setColor('#000000')
        .setDescription(`kuririn morreu de novo `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('morte do kuririn')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}