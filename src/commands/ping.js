const { RichEmbed } = require("discord.js"); // only getting the RichEmbed class from the module

module.exports = {
    help: {
        name: "ping", // command name
        aliases: [] // command aliases, if any
    },

    run: (bot, message, args) => {
        message.channel.send(new RichEmbed().setColor("AQUA").setDescription(`Pong! Average websocket ping is **${Math.round(bot.ping)}ms!**`));
    }
}