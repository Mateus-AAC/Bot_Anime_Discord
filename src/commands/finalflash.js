const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 'https://i.pinimg.com/originals/2c/f5/2e/2cf52eb487758697ddb8f4c082d520da.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('selecione seu inimigo!');
}
/*
message.channel.send(`${message.author.username} **mandou um final flashr** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dragon ball')
        .setColor('#000000')
        .setDescription(`${message.author} lançou um final flash para cima do ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}