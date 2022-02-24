const {
    MessageActionRow,
    MessageButton,
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'youtube',
    description: 'Bebetkun',
    cooldown: 1000 * 10,

    async run(bot, message, args) {
        const embed = new MessageEmbed()
        .setColor("FFA930")
        .setTitle("Bebetkun")
        .setURL("https://www.youtube.com/c/babibubebet")
        .setThumbnail("https://yt3.ggpht.com/ytc/AKedOLSrCZlpQNo7Mex1u8GrbKfygRzPqFLI4U3LXYcp1g=s900-c-k-c0x00ffffff-no-rj")
        .setDescription("Tujuan channel ini dibuat hanya untuk bernostalgia dengan game-game jadul seperti ps1 ps 2.\nKita akan mencoba untuk menamatkan game yang ada, bohong kalau kalian ga kangen game jaman dulu ! saya bukan pro player tapi saya berusaha untuk menamatkan game yang ada.\nDan mungkin ada beberapa vlog agar tidak bosan dengan isi konten game terus xD")

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('YouTube')
                .setStyle('LINK')
                .setURL("https://www.youtube.com/c/babibubebet")
                .setEmoji("879125942289719296")
            );
        message.channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}