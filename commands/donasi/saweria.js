const {
    MessageActionRow,
    MessageButton,
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'saweria',
    description: 'Bebetkun',
    cooldown: 1000 * 10,

    async run(bot, message, args) {
        const embed = new MessageEmbed()
        .setColor("FFA930")
        .setTitle("Dukung bebet via saweria")
        .setURL("https://saweria.co/bebet")
        .setImage("https://saweria.co/twitter_card.png")

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('saweria')
                .setStyle('LINK')
                .setURL("https://saweria.co/bebet")
                .setEmoji("879138952064409600")
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}