const createEmbed = require("../HelperFunctions/createEmbed");

const logDeletedMessage = (client, message, logChannelID) => {
  if (message.embeds.length === 0) {
    const title = `Someone deleted ${message.author.username}s' message`;
    const color = "red";
    const thumbnail = message.author.displayAvatarURL();
    const description = `"${message.cleanContent}" in ${message.channel}`;
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  } else {
    const newTitle = `Someone deleted ${message.embeds[0].title}`;
    client.channels
      .fetch(logChannelID)
      .then((channel) => channel.send(message.embeds[0].setTitle(newTitle)));
  }
};
module.exports = logDeletedMessage;
