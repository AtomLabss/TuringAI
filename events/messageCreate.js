import { 
    Client,
    MessageEmbed
} from 'discord.js-selfbot-v13';
const prefix = "!";

export async function messageCreate(client, message) {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;

    if (message.content === `${prefix}ping`) {
        return message.reply('pong');
    }

    return message.reply(`hello world`);
}