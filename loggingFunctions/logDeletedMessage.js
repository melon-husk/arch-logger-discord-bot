const logDeletedMessage = (message, MessageEmbed) => {
  const embed = new MessageEmbed()
    .setTitle(`Someone deleted ${message.author.username}s' message`)
    .setColor(0xff0000)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`"${message.cleanContent}" in ${message.channel}`);
  return embed;
};
module.exports = logDeletedMessage;
