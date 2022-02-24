const {
    Discord,
    Client,
    Intents,
    Collection,
    MessageFlags,
    MessageEmbed,
    MessageAttachment
} = require('discord.js');
const ultrax = require('ultrax')
const {
    registerFont
} = require('canvas')
const {
    token
} = require('./config.json');
const {
    readdirSync,
    read
} = require('fs');
const ms = require('ms');
const {
    join
} = require('path');
const {
    TIMEOUT
} = require('dns');
const {
    RandomPHUB
} = require('discord-phub');
const fetch = require('node-fetch')

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
    ws: {
        properties: {
            $browser: "Discord iOS"
        }
    }
});

//------------------------------------------------COLLECTION
bot.commands = new Collection();
const commandFolders = readdirSync('./commands');
const Timeout = new Collection();
bot.setMaxListeners(0)

//------------------------------------------------COMMAND HANDLER
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}

bot.on("error", console.error);

//------------------------------------------------BOT STATUS
bot.on('ready', () => {
    console.log('bebetkun is Online!');
    bot.user.setActivity('Bebetkun Server', {
        type: "WATCHING"
    })
})

//------------------------------------------------WELCOME
registerFont('Minecraft.ttf', {
    family: "Minecraft"
});

bot.on('guildMemberAdd', async member => {
    if (member.guild.id !== "750406340320428185") return;
    let bg = 'https://media.discordapp.net/attachments/926403596084445225/936584746815881266/iyah.png'
    let avatar = member.user.displayAvatarURL({
        format: "png"
    })

    let text1 = "WELCOME"
    let text2 = member.user.tag
    let text3 = `SELAMAT DATANG DI BEBETKUN!`
    let color = '#404040'

    const options = {
        font: "Minecraft",
        attachmentName: `welcome ${member.user.tag}`,
        text1_fontSize: 75,
        text2_fontSize: 50,
        text3_fontSize: 45
    }

    const image = await ultrax.welcomeImage(bg, avatar, text1, text2, text3, color, options)

    const cenel = bot.channels.cache.get("750406341109088288")

    cenel.send({
        content: `<:Bebetkun:793546438730448906> **WELCOME!** <:Bebetkun:793546438730448906> \n**Selamat datang di Bebetkun <@${member.user.id}>!** \n> jangan lupa baca <#750408823675551867>, \n> ambil role kamu  di <#798245633407320084>, \n> dan kamu bisa chat disini <#752203141226692618>`,
        files: [image]
    })
});

//------------------------------------------------GOODBYE
registerFont('Minecraft.ttf', {
    family: "Minecraft"
});

bot.on('guildMemberRemove', async member => {
    if (member.guild.id !== "750406340320428185") return;
    let bg = 'https://cdn.discordapp.com/attachments/926403596084445225/936883216189620234/images_6.png'
    let avatar = member.user.displayAvatarURL({
        format: "png"
    })

    let text1 = "GOODBYE"
    let text2 = member.user.tag
    let text3 = `SAMPAI JUMPA LAGI`
    let color = '#ffffff'
    const options = {
        font: "Minecraft",
        attachmentName: `sayonara ${member.user.tag}`,
        text1_fontSize: 75,
        text2_fontSize: 50,
        text3_fontSize: 45
    }

    const image = await ultrax.welcomeImage(bg, avatar, text1, text2, text3, color, options)

    const cenel = bot.channels.cache.get("801120631084679189")

    cenel.send({
        content: `sayonara ${member.user.tag}`,
        files: [image]
    })
});

//------------------------------------------------SALAM
bot.on("messageCreate", message => {

    //--------------------------------------------PERMISSION
    //if (message.author.id == "") return;
    if (message.author.bot) return;

    //--------------------------------------------KATAKANLAH
    if (message.content.toLowerCase() == "sepi") {
        message.channel.send('<a:sedih:927193727200542750>')
    } else if (message.content.toLowerCase() == "p") {
        message.channel.send("Islam: **Assalamualaikum** \nKristen: **Shalom** \nKatolik: **Salam Sejahtera bagi Kita Semua** \nHindu: **Om Swastiastu** \nBuddha: **Namo Buddhaya** \nKonghuchu: **Salam Kebajikan/Wei De Dong Tian/惟德動天** \nGa punya agama/Ateis: **P**")
    } else if (message.content.toLowerCase() == "assalamualaikum") {
        message.channel.send("Waalaikumsalam")
    } else if (message.content.toLowerCase() == "shalom") {
        message.channel.send("Shalom")
    } else if (message.content.toLowerCase() == "salam sejahtera bagi kita semua") {
        message.channel.send("Salam")
    } else if (message.content.toLowerCase() == "om swastiastu") {
        message.channel.send("Om shanti, shanti, shanti om")
    } else if (message.content.toLowerCase() == "namo buddhaya") {
        message.channel.send("Namaste")
    } else if (message.content.toLowerCase() == "salam kebajikan") {
        message.channel.send("Xian You Yi De (咸有一德)")
    } else if (message.content.toLowerCase() == "wei de dong tian") {
        message.channel.send("Xian You Yi De (咸有一德)")
    } else if (message.content.toLowerCase() == "惟德動天") {
        message.channel.send("Xian You Yi De (咸有一德)")
    }
})

//------------------------------------------------TOXIC
bot.on("messageCreate", async message => {

    //--------------------------------------------LOGIC
    const logger = bot.guilds.cache.get("750406340320428185").channels.cache.get("933568968520794192")
    if (message.author.bot) return;
    if (message.guild.id !== "750406340320428185") return;
    const pengguna = message.author.id

    //--------------------------------------------WAKTU
    const milliseconds = ms('7d')
    const time2 = new Date(Date.now() + milliseconds).toISOString()

    const tanggal = new Date();
    const hasil = tanggal.valueOf() + 604800000;
    const output1 = new Date(hasil);

    const epoch = output1.getTime() / 1000;

    const final = Math.trunc(epoch);

    //--------------------------------------------DATABASE
    const serverrr = "750406340320428185"
    const admin = "752190517324021880"
    const baik = "828521425538908190"
    const warn1 = "796682083824697345"
    const warn2 = "796682380491489291"
    const warn3 = "796682198538911747"
    const muted = "796393673121071166"

    //--------------------------------------------EMBED
    const toxic = new MessageEmbed()
        .setColor("FFA930")
        .setAuthor({
            name: `Toxic Log`
        })
        .setDescription(`**Ping:** <@${message.author.id}> \n**Tag:** ${message.author.tag} \n**Id:** ${message.author.id} \n\n**Channel:** <#${message.channel.id}> \n**Id:** ${message.channel.id} \n\n**Message:** ${message.content}`)
        .setTimestamp()

    const timeout = new MessageEmbed()
        .setColor("FFA930")
        .setAuthor({
            name: `Timeout Log`
        })
        .setDescription(`<@${message.author.id}> terkena **TIMEOUT** seminggu kasihan, btw sampai <t:${final}:R>`)
        .setTimestamp()

    //--------------------------------------------PERMISSION
    //if (message.author.id == "") return;

    //--------------------------------------------DEFER
    if (message.content.toLowerCase().includes("kasur")) return;
    if (message.content.toLowerCase().includes("masuk")) return;
    if (message.content.toLowerCase().includes("sat")) return;

    //--------------------------------------------KATAKANLAH
    if (message.content.toLowerCase().includes("anjing")) {
        message.channel.send(`<@${message.author.id}> dih toxic`).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        logger.send({
            embeds: [toxic]
        })

        if (message.member.roles.cache.has(admin)) return;
        if (message.member.roles.cache.has(baik)) {
            message.member.roles.add(warn1)
            message.member.roles.remove(baik)
        }
        if (message.member.roles.cache.has(warn1)) {
            message.member.roles.add(warn2)
        }
        if (message.member.roles.cache.has(warn2)) {
            message.member.roles.add(warn3)
        }
        if (message.member.roles.cache.has(warn3)) {
            message.member.roles.add(muted)

            await fetch(`https://discord.com/api/guilds/${serverrr}/members/${pengguna}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    communication_disabled_until: time2
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${bot.token}`,
                },
            })

            logger.send({
                embeds: [timeout]
            })
        }
        message.delete()
    } if (message.content.toLowerCase().includes("kontol")) {
        message.channel.send(`<@${message.author.id}> dih toxic`).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        logger.send({
            embeds: [toxic]
        })

        if (message.member.roles.cache.has(admin)) return;
        if (message.member.roles.cache.has(baik)) {
            message.member.roles.add(warn1)
            message.member.roles.remove(baik)
        }
        if (message.member.roles.cache.has(warn1)) {
            message.member.roles.add(warn2)
        }
        if (message.member.roles.cache.has(warn2)) {
            message.member.roles.add(warn3)
        }
        if (message.member.roles.cache.has(warn3)) {
            message.member.roles.add(muted)

            await fetch(`https://discord.com/api/guilds/${serverrr}/members/${pengguna}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    communication_disabled_until: time2
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${bot.token}`,
                },
            })

            logger.send({
                embeds: [timeout]
            })
        }
        message.delete()
    }
})

//------------------------------------------------HANDLER
bot.on("messageCreate", message => {

    const prefix = "b.";

    if (message.content.toLowerCase().startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (command) {
            if (command.cooldown) {
                if (Timeout.has(`${command.name}${message.author.id}`)) return message.reply(`Please Wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true})}\` Before using this command again!`).then(msg => {
                    setTimeout(() => msg.delete(), 10000)
                });
                command.run(bot, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(bot, message, args);
        }
    }
})

bot.login(token);

//----------------------------https://github.com/Aussando/AstroPedia