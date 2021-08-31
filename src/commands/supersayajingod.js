const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://i.pinimg.com/originals/49/53/f3/4953f3916f3bd069129fcfb6577de92c.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-god')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-god `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}