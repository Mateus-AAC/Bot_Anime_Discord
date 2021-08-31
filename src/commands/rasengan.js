const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media2.giphy.com/media/OU6tgBi0YJ4HK/200.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('selecione seu inimigo!');
}
/*
message.channel.send(`${message.author.username} **atacou mandou um rasengan** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Naruto')
        .setColor('#000000')
        .setDescription(`${message.author} atacou o usuario ${user} com o rasengan`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}