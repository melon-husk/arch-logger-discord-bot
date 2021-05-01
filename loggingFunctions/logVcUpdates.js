const createEmbed = require("../HelperFunctions/createEmbed");
const logVcUpdates = (client, oldState, newState, logChannelID) => {
  // User joined the channel
  if (oldState.channel?.name === undefined && newState.channel?.name) {
    const title = `${newState.member.displayName} joined`;
    const description = `"${newState.channel.name}"`;
    const thumbnail = newState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }

  // User Left the channel
  if (oldState.channel?.name && newState.channel?.name === undefined) {
    const title = `${oldState.member.displayName} left`;
    const description = `"${oldState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
  // User hopped channels
  if (
    oldState.channel?.name &&
    newState.channel?.name &&
    oldState.channel?.name !== newState.channel?.name // Ignore if the user is in same channel
  ) {
    const title = `${oldState.member.displayName} hopped`;
    const description = `from "${oldState.channel.name}"\nto "${newState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }

  if (oldState.mute === false && newState.mute === true) {
    const title = `${oldState.member.displayName} muted`;
    const description = `in "${oldState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
  if (oldState.mute === true && newState.mute === false) {
    const title = `${oldState.member.displayName} unmuted`;
    const description = `in "${oldState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
  if (oldState.deaf === false && newState.deaf === true) {
    const title = `${oldState.member.displayName} deafened`;
    const description = `in "${oldState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
  if (oldState.deaf === true && newState.deaf === false) {
    const title = `${oldState.member.displayName} undeafened`;
    const description = `in "${oldState.channel.name}"`;
    const thumbnail = oldState.member.user.displayAvatarURL();
    const color = "yellow";
    const embed = createEmbed(title, color, thumbnail, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
};

module.exports = logVcUpdates;
