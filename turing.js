const { 
    Client, 
    GatewayIntentBits, 
    Partials, 
    EmbedBuilder, 
    ButtonBuilder, 
    ButtonStyle, 
    ActionRowBuilder, 
    ModalBuilder, 
    TextInputBuilder, 
    TextInputStyle, 
    REST, 
    Routes, 
    Events, 
    DefaultWebSocketManagerOptions, 
    TextChannel, 
    CommandInteraction, 
    ActivityType, 
    PermissionsBitField,
    VoiceChannel,
    channelMention,
    channelLink,
    MessageEmbed
} = require('discord.js-selfbot-v13');
const token = "<your-token-here>";
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;

	message.reply(`hello world`);
});

client.login(token);