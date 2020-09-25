const config = require ("../config/bot.json");
const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //New embed
    const help = new Discord.MessageEmbed()
    .setDescription("Find the list of available commands on this panel.")
    .addField("**Music - (11)**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Filters - (18)**", "`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`")
    .addField("**Informations - (1)**", "`ping`")
    .setFooter("Created by @Bahburs on Twitter.")
    .setColor("PINK")

    //Message
    message.channel.send(help)

}
