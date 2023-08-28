const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { TOKEN } = require('./auth.json');
const HolaCommand = require('./commands/hola.js');

const client = new Discord.Client(
    {
        intents:
            [
                Discord.GatewayIntentBits.Guilds,
                Discord.GatewayIntentBits.GuildMessages,
                Discord.GatewayIntentBits.GuildMessageReactions,
                Discord.GatewayIntentBits.GuildVoiceStates,
                Discord.GatewayIntentBits.MessageContent,
            ],
    }
);

// Event handlers
client.once(Discord.Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Discord.Events.MessageCreate, msg => {
    // Ignore messages from bots
    if (msg.author.bot) return;

    // Ignore messages that don't start with the prefix
    if (msg.content.startsWith(prefix)) {
        // Remove the prefix and split the message into an array of words
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        // Get the command name
        const commandName = args.shift().toLowerCase();
        
        if (commandName === 'hola') {
            HolaCommand.execute(msg, args);
        } else {
            //msg.reply('uWu');
            msg.channel.send('uwu');
            msg.react('🤠');
        }
    }
});

client.login(TOKEN);



