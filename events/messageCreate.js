import { 
    Client,
    MessageEmbed
} from 'discord.js-selfbot-v13';

export async function messageCreate(client, message) {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;

    message.reply(`hello world`);
}