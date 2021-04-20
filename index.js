const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const logDeletedMessage = require("./loggingFunctions/logDeletedMessage");
const logEditedMessage = require("./loggingFunctions/logEditedMessage");
const logSentMessage = require("./loggingFunctions/logSentMessage");
// const logVcConnection = require("./loggingFunctions/logVcConnection");
const client = new Client();
const logChannelID = "833702559445155870";

// TODO: [BUG] logVcConnection is triggered when user mutes or deafens, possible fix would be to pass client as well so we only send text when needed not always on event

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Making 🧆🥙", {
    type: "PLAYING",
  });
});

client.on("message", (message) => {
  if (message.author.bot) return;
  client.channels
    .fetch(logChannelID)
    .then((channel) => channel.send(logSentMessage(message, MessageEmbed)));
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  client.channels
    .fetch(logChannelID)
    .then((channel) =>
      channel.send(logEditedMessage(oldMessage, newMessage, MessageEmbed))
    );
});
client.on("messageDelete", (message) => {
  if (message.author.bot) return;
  client.channels
    .fetch(logChannelID)
    .then((channel) => channel.send(logDeletedMessage(message, MessageEmbed)));
});
client.on("voiceStateUpdate", (oldState, newState) => {
  logVcConnection(client, oldState, newState, MessageEmbed);
});

client.login(config.BOT_TOKEN);

const logVcConnection = (client, oldState, newState, MessageEmbed) => {
  if (oldState.channel === null) {
    const embed = new MessageEmbed()
      .setTitle(
        `${newState.member.displayName} joined ${newState.channel.name}`
      )
      .setColor(0xffffff)
      .setThumbnail(newState.member.user.displayAvatarURL());
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  } else if (oldState.channel !== null && newState.channel !== null) {
    const embed = new MessageEmbed()
      .setTitle(
        `${newState.member.displayName} moved from \n${oldState.channel.name} to \n${newState.channel.name}`
      )
      .setColor(0xffffff)
      .setThumbnail(newState.member.user.displayAvatarURL());
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  } else {
    const embed = new MessageEmbed()
      .setTitle(`${oldState.member.displayName} left ${oldState.channel.name}`)
      .setColor(0xffffff)
      .setThumbnail(oldState.member.user.displayAvatarURL());
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
};
