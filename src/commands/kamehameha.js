const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://thumbs.gfycat.com/ApprehensiveUncomfortableKronosaurus-size_restricted.gif',
  'https://giffiles.alphacoders.com/105/105473.gif',
  'https://i.pinimg.com/originals/b1/af/03/b1af03c034b78b20c10eed38891ba274.gif',
  'https://media1.tenor.com/images/5c28cf0e3bd2b3d5e1aea84b4b0cf399/tenor.gif?itemid=8144823'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('selecione seu inimigo!');
}
/*
message.channel.send(`${message.author.username} **mandou um kamehamehar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dragon ball')
        .setColor('#000000')
        .setDescription(`${message.author} lançou um kamehameha para cima do ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}