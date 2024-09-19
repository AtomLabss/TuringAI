import { 
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
} from 'discord.js-selfbot-v13';

export async function messageCreate(message) {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;

    message.reply(`hello world`);
}