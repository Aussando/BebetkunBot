const discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick an user from server',
    cooldown: 1000 * 10,
    usage: "[@user] [reason]",

    async run(bot, message, args) {

        const premis = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription('Missing permission! \n\nKamu perlu permission `Kick Members` untuk menggunakan command ini!')

        const usage = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription("Invalid usage! \n\nCoba: `,kick [@user] [optional reason]` \nContoh: `,kick @Fourandyzz.#7795 spam`")

        const gakkick = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription('Invalid usage! \n\nAku tidak bisa kick dia, maaf')

        const kickdiri = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription("Invalid usage! \n\nAku tidak bisa kick kamu")



        if (!message.member.permissions.has('KICK_MEMBERS')) {

            return message.reply({
                embeds: [premis]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        let orang = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.tag === args[0]);

        if (!orang) {

            return message.reply({
                embeds: [usage]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        if (!orang.kickable) {

            return message.reply({
                embeds: [gakkick]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        if (orang.id === message.author.id) {

            return message.reply({
                embeds: [kickdiri]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        let reason = args.slice(1).join(' ');

        if (!reason) {
            reason = 'Tidak ada alasan'
        }

        let embed = new discord.MessageEmbed()
            .setColor('FFA930')
            .setAuthor({
                name: `${orang.user.username} berhasil di kick!`,
                iconURL: orang.user.displayAvatarURL()
            })
            .addField('Alasan:', reason, true)
            .addField('Moderator:', message.author.tag, true)
            .setTimestamp();

        let userEmbed = new discord.MessageEmbed()
            .setColor('FFA930')
            .setAuthor({
                name: `Kamu telah di kick dari ${message.guild.name}!`
            })
            .addField('Alasan', reason, true)
            .addField('Moderator', message.author.tag, true);

        orang.send({
            embeds: [userEmbed]
        }).catch(e => console.log(e));
        let msg = await message.channel.send({
            embeds: [embed]
        });

        orang.kick(`By: ${message.author.tag} | Reason: ${reason}`).catch(e => {
            msg.edit('', {
                embeds: [errEmbed].setDescription(`Error: ${e}`)
            })
        });

    }
}