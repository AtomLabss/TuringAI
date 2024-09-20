<h1 align="center">
  <div align="center">
    <br />
    <p>
      <img width="250" src="https://raw.githubusercontent.com/AtomLabss/TuringAI/main/assets/images/turingai.png?s=100&v=4" />
    </p>
  </div>
</h1>

<h1 align="center">
    <p align="center">
        <img src="https://img.shields.io/static/v1?label=status&message=beta&color=blue">
    </p>
</h1>

# Overview
TuringAI is a Discord bot/self-bot that is designed to mimic an average human being on Discord as realistically as possible.
<br>
TuringAI utilizes `discord.js-selfbot-v13` to get this look, however support for `discord.js` is in the works too!
<br>
Stay tuned!

# Prerequisites
- Node.js installed on your machine
- A Discord account/bot with a valid token and clientID
- Environment variables set up in `.env`

<br>

> [!WARNING]
> **Using a Discord user account as a self-bot is against the Discord ToS and may lead to your account being banned.**
> **Continue at your risk.**

# Environment Variables
- **DISCORD_TOKEN**: The token for your Discord bot/user.
- **DISCORD_CLIENT_ID**: The clientID/userID for your Discord bot/user.
- **GROQ_SECRET**: The API key used to connect to GroqCloud.
- **PREFIX**: The prefix used for commands with TuringAI.
- **VERNUM**: The current version number of TuringAI being used. **do not change this!**

<br>

> [!TIP]
> **It is optional to add a clientID at this moment in time, but this may change with new releases.**

# Installation
- Clone TuringAI:
```
git clone https://github.com/AtomLabss/TuringAI
cd TuringAI
```

- Install the required dependancies:
```
npm install discord.js-selfbot-v13 groq-sdk dotenv
```

- Configure your .env file:
```
# TuringAI configuration
# This is the configuration file for TuringAI. You can change the values here to customize the bot to your liking.

DISCORD_TOKEN=<your-discord-token> # Your Discord bot/user token
DISCORD_CLIENT_ID=<your-discord-client-id> # Your Discord bot/user's clientID
GROQ_SECRET=<your-groqCloud-api-key-here> # Your API key from GroqCloud
VERNUM=v1.0.2b # TuringAI internal version number - don't change this!
PREFIX=turing! # TuringAI prefix
```

- Profit.

# Usage

- It's as easy as cake! (probably)

```
cd TuringAI
nodejs ./turing.js
```

# Contributing
Thank you for contributing to TuringAI! Your efforts help improve the project for everyone.
<br>
Contributing to TuringAI is as easy as forking this repository, making your changes, and presenting them in a pull request back on this repo.
<br>
We wish you all the best!

# License
TuringAI is licensed under the MIT License. Please see the LICENSE file for more details.