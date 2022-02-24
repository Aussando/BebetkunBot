const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'list',
    description: 'help command',
    cooldown: 1000 * 5,

    async run(bot, message, args) {

        if (message.guild.id == "750406340320428185") {
            if (message.channel.id !== "934703960529461288") return;
        }

        const embed = new MessageEmbed()
            .setColor("FFA930")
            .setDescription("`3d-porn` `aesthetic` `amateur` `anal` `asian` `asmr` `ass` `bath-shower` `bdsm` `boobs` `cock` `cosplay` `creampie` `cuckhold` `cumshots` `dilf` `double-penetration` `ebony` `feet` `femdom` `fisting` `food-play` `funny` `furry` `glory-hole` `goth` `hands` `hentai-no-loli` `hentai` `horror` `interracial` `joi` `lactation` `latin` `lgbt-lesbian` `lingerie` `massage` `mature` `milf` `naked-wrestling` `oral` `orgy` `pegging` `petite` `plus-size` `pornstar` `pov` `public` `pussy` `rimming` `rough` `solo` `squirting` `tattoos-piercings` `tease` `thighs` `threesomes` `toys` `uniform` `vintage` `watersports`")

        message.channel.send({
            embeds: [embed]
        })
    }
}