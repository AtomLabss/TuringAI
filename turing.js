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
import { messageCreate } from './events/messageCreate.js'
const token = "<your-token-here>";
const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => messageCreate(message));
client.login(token);