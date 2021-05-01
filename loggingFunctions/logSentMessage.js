const createEmbed = require("../HelperFunctions/createEmbed");

const logSentMessage = (client, message, logChannelID) => {
  if (message.attachments.array().length === 0) {
    const title = `${message.author.username} sent`;
    const color = "green";
    const thumbnail = message.author.displayAvatarURL();
    const description = `"${message.cleanContent}" in ${message.channel}\n[message link](${message.url})`;
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  } else {
    const attachmentURL = message.attachments.map(
      (attachment) => attachment.proxyURL
    );
    const title = `${message.author.username} sent`;
    const color = "green";
    const thumbnail = message.author.displayAvatarURL();
    const description = `"${message.cleanContent}" in ${message.channel}\n[message link](${message.url})`;
    const embed = createEmbed(
      title,
      color,
      thumbnail,
      description,
      attachmentURL[0]
    );
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
};
module.exports = logSentMessage;
