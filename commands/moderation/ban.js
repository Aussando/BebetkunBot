const discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban an user from server',
    cooldown: 1000 * 10,
    usage: "[@user] [reason]",

    async run(bot, message, args) {

        const premis = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription('Missing permission! \n\nkamu butuh permission `Ban Members` untuk menggunakan command ini!')

        const usage = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription("Invalid usage! \n\nCoba: `,ban [@user] [optional reason]` \nContoh: `,ban @Aussando#7447 spam`")

        const gakban = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription('Invalid usage! \n\nAku tidak bisa ban dia')

        const bandiri = new discord.MessageEmbed()
            .setColor('FFA930')
            .setDescription("Invalid usage! \n\nAku tidak bisa ban kamu, lol")

        if (!message.member.permissions.has('BAN_MEMBERS')) {

            return message.reply({
                embeds: [premis]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.tag === args[0]);

        if (!user) {

            return message.reply({
                embeds: [usage]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        if (!user.bannable) {

            return message.reply({
                embeds: [gakban]
            }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

        if (user.id === message.author.id) {

            return message.reply({
                embeds: [bandiri]
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
                name: `${user.user.username} berhasil di banned!`,
                iconURL: user.user.displayAvatarURL()
            })
            .addField('Alasan:', reason, true)
            .addField('Moderator:', message.author.tag, true)
            .setTimestamp();

        let userEmbed = new discord.MessageEmbed()
            .setColor('FFA930')
            .setAuthor({
                name: `Kamu telah di banned dari ${message.guild.name}!`
            })
            .addField('Alasan', reason, true)
            .addField('Moderator', message.author.tag, true);

        user.send({
            embeds: [userEmbed]
        }).catch(e => console.log(e));
        let msg = await message.channel.send({
            embeds: [embed]
        });

        await user.ban({
            reason: reason
        }).catch(e => console.log(e));

    }
}