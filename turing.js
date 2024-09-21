import { 
    Client,
    Intents,
    RichPresence,
    CustomStatus,
    SpotifyRPC,
    MessageEmbed
} from 'discord.js-selfbot-v13';
import dotenv from 'dotenv';

import { messageCreate } from './events/messageCreate.js';
import { setPresence } from './helpers/setPresence.js';

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES
    ] 
});

console.log("Re-assigning system metadata, please wait...");
dotenv.config();

const config = {
    token: process.env.TOKEN,
    clientID: process.env.CLIENTID,
    groqSecret: process.env.GROQ_SECRET,
    //
    ownerID: process.env.OWNERID,
    prefix: process.env.PREFIX,
    //
    verNum: process.env.VERNUM,
}

console.log("Successfully re-assigned system metadata.");

async function loadEvents() {
    client.on('messageCreate', async message => messageCreate(client, config, message));
}

client.on('ready', async () => {
    console.log(`Launching TuringAI with @${client.user.username}...`);
    await setPresence(client, config);
    await loadEvents();
    console.log(`TuringAI ${config.verNum} is now connected to @${client.user.username}!`);
})

client.login(config.token);