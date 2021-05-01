const { MessageEmbed } = require("discord.js");

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFC300",
};

const createEmbed = (title, color, thumbnail, description, image) => {
  const embed = new MessageEmbed();
  embed.setTitle(title);
  embed.setColor(colors[color]);
  embed.setThumbnail(thumbnail);
  embed.setDescription(description);
  if (image) embed.setImage(image);
  return embed;
};

module.exports = createEmbed;
