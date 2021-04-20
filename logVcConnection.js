const logVcConnection = (oldState, newState, MessageEmbed) => {
  if (oldState.channel === null) {
    const embed = new MessageEmbed()
      .setTitle(
        `${newState.member.displayName} joined ${newState.channel.name}`
      )
      .setColor(0xffffff)
      .setThumbnail(newState.member.user.displayAvatarURL());
    return embed;
  } else if (oldState.channel !== null && newState.channel !== null) {
    const embed = new MessageEmbed()
      .setTitle(
        `${newState.member.displayName} moved from \n${oldState.channel.name} to \n${newState.channel.name}`
      )
      .setColor(0xffffff)
      .setThumbnail(newState.member.user.displayAvatarURL());
    return embed;
  } else {
    const embed = new MessageEmbed()
      .setTitle(`${oldState.member.displayName} left ${oldState.channel.name}`)
      .setColor(0xffffff)
      .setThumbnail(oldState.member.user.displayAvatarURL());
    console.log(oldState.member.user.displayAvatarURL());
    return embed;
  }
};
module.exports = logVcConnection;
