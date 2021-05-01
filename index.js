const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const createEmbed = require("./HelperFunctions/createEmbed");
const logDeletedMessage = require("./LoggingFunctions/logDeletedMessage");
const logEditedMessage = require("./LoggingFunctions/logEditedMessage");
const logSentMessage = require("./LoggingFunctions/logSentMessage");
const logVcUpdates = require("./LoggingFunctions/logVcUpdates");
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
  logSentMessage(client, message, logChannelID);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  logEditedMessage(client, oldMessage, newMessage, logChannelID);
});
client.on("messageDelete", (message) => {
  // if (message.author.bot) return;
  logDeletedMessage(client, message, logChannelID);
});
client.on("voiceStateUpdate", (oldState, newState) => {
  logVcUpdates(client, oldState, newState, logChannelID);
});

client.login(config.BOT_TOKEN);
