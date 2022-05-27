const { channel } = require('diagnostics_channel');
const { Client, Intents, Collection, MessageManager, Message } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const prefix = "!";
const fs = require("fs");
client.commands = new Collection();
//const config = require("./config.json");

//READY
client.once('ready', () => {
    console.log('O PINÃO TA PRONTO!');
})

//Comandos em folders diferentes
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);
}

//mensagens com prefix
client.on("messageCreate", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) 
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let c = client.commands.get(command);
    if (c) {
        c.execute(message, args);
    }
});

//random shit
client.on("messageCreate", message => {
    const word = message.content.toLowerCase()
    //if (message.mentions.has(client.user)) {
        //message.channel.send("CALA TE CARALHO");
    //}
    if (word.includes("dababy")) {
        message.channel.send({ content: "LETS GOOOOOOOOOOO", files: ["https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/1/6/e/c16e69aa75cc8b4ee5fdf4b3fa2812c7.jpg"] });
    }
    if (word.match("lanche|lanchar")) {
        message.channel.send({ files: ["reverse.mp4"] });
    }
    if (word.match("leite|água|cereais")) {
        message.channel.send({ files: ["olhos.mp4"] });
    }
    if (word.match("bitches|bitchless")) {
        message.channel.send({ files: ["huu2.mp4"] });
    }
    if (word.includes("chud")) {
        const idx = (len) => Math.floor(Math.random() * (len));
        const files = fs.readdirSync('./chad/');
        const Image = files[idx(files.length)];
        message.channel.send({ files: [`./chad/${Image}`] });
    }
    if (word.match("discord morto|dead discord")) {
        message.channel.send({ files: ["este discord.mov"] });
    } 
    if (word.match("cringe|cring")) {
        message.channel.send({ files: ["cringe.mov"] });
    }
    if (word.match("estas bolas")) {
        message.channel.send({ files: ["estas bolas.jpg"] });
    }
});




//FELIZ VIERNES
const CronJob = require('cron').CronJob;
const job = new CronJob('00 15 23 * * 5', function () {
    const d = new Date();
    console.log('Feliz Viernes Hermano');
    const guild = client.guilds.cache.get('331530120445689857');
    const channel = guild.channels.cache.get('541361310021976074');
    const idk = (len) => Math.floor(Math.random() * (len));
        const files = fs.readdirSync('./friday/');
        const Video = files[idk(files.length)];
        channel.send({ files: [`./friday/${Video}`] });
});

job.start();

client.login(process.env.DISCORD_TOKEN);
