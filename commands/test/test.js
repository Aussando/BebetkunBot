const discord = require('discord.js')
const {unix} = require("to-unix-timestamp")

module.exports = {
    name: 'test',
    aliases: ['t'],
    description: 'eval command for developer only',
    cooldown: 1000 * 1,

    async run(bot, message, args) {
        const tanggal = new Date();
        const hasil = tanggal.valueOf() + 604800000;
        const output1 = new Date(hasil);
        
        const epoch = output1.getTime()/1000;

        const final = Math.trunc(epoch);

        message.channel.send(`output: ${final}`);
    }
}