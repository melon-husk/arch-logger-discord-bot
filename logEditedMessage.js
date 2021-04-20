const logEditedMessage = (oldMessage, newMessage, MessageEmbed) => {
  const embed = new MessageEmbed()
    .setTitle(`${oldMessage.author.username} edited`)
    .setColor(0x0000ff)
    .setThumbnail(oldMessage.author.displayAvatarURL())
    .setDescription(
      `"${oldMessage.cleanContent}" to "${newMessage.cleanContent}" in ${oldMessage.channel}\n[message link](${newMessage.url})`
    );
  return embed;
};
module.exports = logEditedMessage;
