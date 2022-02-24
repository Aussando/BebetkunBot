const {
    MessageActionRow,
    MessageButton,
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'roblox',
    description: 'Bebetkun',
    cooldown: 1000 * 10,

    async run(bot, message, args) {
        const profile = new MessageEmbed()
            .setColor("FFA930")
            .setThumbnail("https://tr.rbxcdn.com/5e0f3c0de9cf7d4e4c0dbe2b0253eea9/352/352/Avatar/Png")
            .setTitle("babibubebet's Profile")
            .setURL("https://www.roblox.com/users/1749574986/profile")
            .setDescription("babibubebet is one of the millions creating and exploring the endless possibilities of Roblox. Join babibubebet on Roblox and explore together! Join Group Roblox & Subscribe YouTube ya.. :) \nhttps://www.youtube.com/c/babibubebet \nTerima kasih atas support-nya!")

        const group = new MessageEmbed()
            .setColor("FFA930")
            .setThumbnail("https://t6.rbxcdn.com/490c381e39ceebc9aae704f8a51a8401")
            .setTitle("Bebet Team")
            .setURL("https://www.roblox.com/groups/8687899/Bebet-Team")
            .setDescription("Bebet Team is a group on Roblox owned by babibubebet with 226 members. enjoy the group")

        const iyh = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('Profile')
                .setStyle('LINK')
                .setURL("https://www.roblox.com/users/1749574986/profile")
                .setEmoji("879136418847391776")
            );

        const iyah = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('Group')
                .setStyle('LINK')
                .setURL("https://www.roblox.com/groups/8687899/Bebet-Team")
                .setEmoji("879136418847391776")
            );

        message.channel.send({
            embeds: [profile],
            components: [iyh]
        })

        message.channel.send({
            embeds: [group],
            components: [iyah]
        })
    }
}