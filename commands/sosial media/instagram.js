const {
    MessageActionRow,
    MessageButton,
    MessageAttachment
} = require('discord.js')

module.exports = {
    name: 'instagram',
    description: 'Bebetkun',
    cooldown: 1000 * 10,

    async run(bot, message, args) {
        const file = new MessageAttachment("https://media.discordapp.net/attachments/879083774611177562/932042272080556122/1642175448019.png?width=540&height=396")

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('Instagram')
                .setStyle('LINK')
                .setURL("https://www.instagram.com/albert_wijayaa/")
                .setEmoji("879130956982788138")
            );
        message.channel.send({
            files: [file],
            components: [row]
        })
    }
}