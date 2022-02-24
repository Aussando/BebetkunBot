const discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'help command',
    cooldown: 1000 * 3,

    async run(bot, message, args) {
        const help = new discord.MessageEmbed()
            .setColor('FFA930')
            .setTitle('Bebetkun bot help')
            .addField('<:youtube:879125942289719296> Sosial Media', '`youtube` `instagram` `discord` `roblox`')
            .addField('💰 Donasi', '`saweria`')
            .addField('⚒️ moderation', '`kick` `ban`')
            .setFooter({
                text: 'prefix gw: b.'
            })
            .setTimestamp();

        message.channel.send({
            embeds: [help]
        })
    }
}