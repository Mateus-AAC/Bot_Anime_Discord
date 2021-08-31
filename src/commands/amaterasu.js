const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/923430b0425cc5bb64b3ada0def61acf/tenor.gif?itemid=14078067'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de atacar com amaterasu o usuario** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Amaterasu')
        .setColor('#000000')
        .setDescription(`o usuario ${message.author} acaba de atacar com amaterasu o usuario ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}