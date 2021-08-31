const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [  
  'https://thumbs.gfycat.com/ChillySharpGalapagosalbatross-max-1mb.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('super-sayajin-blue-com-kaioken')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} se transformou em super-sayajin-blue-com-kaioken `)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}