const discord = require('discord.js')

module.exports = {
    name: 'discord',
    description: 'discord command',
    cooldown: 1000 * 10,

    async run (bot, message, args) {
        message.channel.send('ID: `bebet#3893` \nServer: https://discord.gg/PBdqDtv')
    }
}