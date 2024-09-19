import { 
    Client,
    MessageEmbed
} from 'discord.js-selfbot-v13';
import { messageCreate } from './events/messageCreate.js'
const token = "<your-token-here>";
const client = new Client();

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => messageCreate(client, message));
client.login(token);