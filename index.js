const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const logDeletedMessage = require("./logDeletedMessage");
const logEditedMessage = require("./logEditedMessage");
const logSentMessage = require("./logSentMessage");
const logVcConnection = require("./logVcConnection");
const client = new Client();
const logChannelID = "833702559445155870";

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
  client.channels
    .fetch(logChannelID)
    .then((channel) =>
      channel.send(logVcConnection(oldState, newState, MessageEmbed))
    );
});

client.login(config.BOT_TOKEN);
