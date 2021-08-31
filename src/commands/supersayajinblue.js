const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://i.pinimg.com/originals/16/82/14/168214f193f35d0ddc59e33760e32bc3.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-blue')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-blue `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}