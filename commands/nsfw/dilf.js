const {MessageAttachment, MessageEmbed} = require('discord.js')
const {RandomPHUB} = require('discord-phub')

module.exports = {
    name: 'dilf',
    description: 'help command',
    cooldown: 1000 * 5,

    async run (bot, message, args) {

        if (message.guild.id == "750406340320428185") {
            if (message.channel.id !== "934703960529461288") return;
        }

        const nsfw = new RandomPHUB()

        const type = nsfw.getRandomType()

        const memek = nsfw.getRandomInCategory('dilf', type)

        const hasil = memek.url

        message.channel.send({content: hasil})
    }
}