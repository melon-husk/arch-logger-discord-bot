const logSentMessage = (message, MessageEmbed) => {
  if (message.attachments.array().length === 0) {
    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} sent`)
      .setColor(0x00ff00)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(
        `"${message.cleanContent}" in ${message.channel}\n[message link](${message.url})`
      );
    return embed;
  } else {
    const attachmentURL = message.attachments.map(
      (attachment) => attachment.proxyURL
    );
    const embed = new MessageEmbed()
      .setTitle(`${message.author.username} sent`)
      .setColor(0x00ff00)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(
        `"${message.cleanContent}" in ${message.channel}\n[message link](${message.url})`
      )
      .setImage(attachmentURL[0]);
    return embed;
  }
};
module.exports = logSentMessage;
