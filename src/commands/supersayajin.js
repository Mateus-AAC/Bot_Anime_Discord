const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://media1.giphy.com/media/ul1omlrGG6kpO/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}