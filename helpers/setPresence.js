import { 
    Client,
    Intents,
    RichPresence,
    CustomStatus,
    SpotifyRPC,
    MessageEmbed
} from 'discord.js-selfbot-v13';

export async function setPresence(client, config, type) {
    const presenceNum = Math.floor(Math.random() * 4) + 1;
    const platformNum = Math.floor(Math.random() * 2) + 1;
    const onlineStatusNum = Math.floor(Math.random() * 3) + 1;
    let platform;
    let custom;
    let status;
    if (type) return;

    if (presenceNum === 1) {
        const partyMembers = Math.floor(Math.random() * 4) + 1;
        let gameMode = Math.floor(Math.random() * 4) + 1;

        const getExtendURL = await RichPresence.getExternal(
            client,
            '367827983903490050',
            'https://github.com/AtomLabss/TuringAI/blob/main/assets/images/presence/rainbowsixsiege_launch.webp?raw=true'
        );

        if (gameMode === 1) {
            gameMode = "Casual";
        } else if (gameMode === 2) {
            gameMode = "Ranked";
        } else if (gameMode === 3) {
            gameMode = "Hardcore";
        } else if (gameMode === 4) {
            gameMode = "Situation Mode";
        }

        status = new RichPresence(client)
            .setApplicationId('367827983903490050')
            .setType('PLAYING')
            .setState('Party')
            .setName('Rainbow Six Siege')
            .setDetails(`Playing ${gameMode}`)
            .setParty({
                max: 4,
                current: partyMembers,
            })
            .setStartTimestamp(0)
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText(`TuringAI ${config.verNum}`)
            .setPlatform(platform)
            .addButton('Join Party', 'https://github.com/AtomLabss/TuringAI');

        custom = new CustomStatus(client).setEmoji('🎉').setState('just hit emerald VI');
    } else if (presenceNum === 2) {
        const getExtendURL = await RichPresence.getExternal(
            client,
            '367827983903490050',
            'https://github.com/AtomLabss/TuringAI/blob/main/assets/images/presence/roblox.webp?raw=true'
        );

        status = new RichPresence(client)
            .setApplicationId('367827983903490050')
            .setType('PLAYING')
            .setName('Roblox')
            .setStartTimestamp(0)
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText(`TuringAI ${config.verNum}`)
            .setPlatform(platform)
            .addButton('Join Server', 'https://github.com/AtomLabss/TuringAI');

        custom = new CustomStatus(client).setState('Playing Roblox');
    } else if (presenceNum === 3) {
        const getExtendURL = await RichPresence.getExternal(
            client,
            '367827983903490050',
            'https://github.com/AtomLabss/TuringAI/blob/main/assets/images/presence/xbox_legacy.png?raw=true'
        );

        status = new RichPresence(client)
            .setApplicationId('367827983903490050')
            .setType('PLAYING')
            .setName('Forza Horizon 4')
            .setStartTimestamp(0)
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText(`TuringAI ${config.verNum}`)
            .setPlatform(platform)
            .addButton('Send Invite', 'https://github.com/AtomLabss/TuringAI');

        custom = new CustomStatus(client).setState('Playing Forza Horizon 4');
    } else if (presenceNum === 4) {
        const getExtendURL = await RichPresence.getExternal(
            client,
            '367827983903490050',
            'https://github.com/AtomLabss/TuringAI/blob/main/assets/images/presence/minecraft.png?raw=true'
        );

        status = new RichPresence(client)
            .setApplicationId('367827983903490050')
            .setType('PLAYING')
            .setName('Minecraft')
            .setStartTimestamp(0)
            .setAssetsLargeImage(getExtendURL[0].external_asset_path)
            .setAssetsLargeText(`TuringAI ${config.verNum}`)
            .setPlatform(platform)

        custom = new CustomStatus(client).setState('Playing Minecraft');
    }

    if (platformNum === 1) {
        platform = 'desktop';
    } else if (platformNum === 2) {
        platform = 'ios';
    }

    if (onlineStatusNum === 1) {
        client.user.setPresence({ status: 'online' });
    } else if (onlineStatusNum === 2) {
        client.user.setPresence({ status: 'idle' });
    } else if (onlineStatusNum === 3) {
        client.user.setPresence({ status: 'dnd' });
    }

    if (!custom) {
        client.user.setPresence({ activities: [status] });
    } else {
        client.user.setPresence({ activities: [status, custom] });
    }
}