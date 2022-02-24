const discord = require('discord.js')
const { inspect } = require('util')

module.exports = {
    name: 'eval',
    aliases: ['e'],
    description: 'eval command for developer only',
    cooldown: 1000 * 1,

    async run(bot, message, args) {
        if (message.author.id !== "503451211870240778") return;
        const code = args.join(" ")
        if (!code) return message.lineReplyNoMention("heh masukin code")

        try {
            const result = await eval(code)
            let output = result
            if (typeof result !== 'string') {
                output = inspect(result)
            }
            message.channel.send(output, { code: 'js' })
        } catch (err) {
            message.channel.send(`error bang/kepanjangan code lu anj \n**Error:** ${err}`)
        }
    }
}