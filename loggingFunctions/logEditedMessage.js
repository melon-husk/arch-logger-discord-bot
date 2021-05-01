const createEmbed = require("../HelperFunctions/createEmbed");

const logEditedMessage = (client, oldMessage, newMessage, logChannelID) => {
  const title = `${oldMessage.author.username} edited`;
  const color = "blue";
  const thumbnail = oldMessage.author.displayAvatarURL();
  const description = `"${oldMessage.cleanContent}" to "${newMessage.cleanContent}" in ${oldMessage.channel}\n[message link](${newMessage.url})`;
  const embed = createEmbed(title, color, thumbnail, description);
  client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
};
module.exports = logEditedMessage;
