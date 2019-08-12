const { RichEmbed } = require("discord.js");

module.exports = {
    help: {
        name: "say",
        aliases: ["speak"]
    },

    run: (bot, message, args) => {
        let string = args.join(" ");
        if(!string) string = "bruh";

        message.channel.send(new RichEmbed().setColor("AQUA").setDescription(string));
    }
}