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
      <img src="https://img.shields.io/static/v1?label=version&message=v1.0.3b&color=lightgreen">
        <img src="https://img.shields.io/discord/1252393773468745852?color=7489d5&logo=discord&logoColor=ffffff" />
        <img src="https://img.shields.io/static/v1?label=status&message=beta&color=blue">
    </p>
</h1>

<br>

# Overview
TuringAI is a Discord bot/self-bot that is designed to mimic your normal Discord user as realistically as possible.
<br>
TuringAI utilizes `discord.js-selfbot-v13` to achieve this, however `discord.js` compatibility is in the works too!
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
- `TOKEN` - The token for your Discord bot/user.
- `CLIENTID` - The clientID/userID for your Discord bot/user.
- `GROQ_SECRET` - The API key used to connect to GroqCloud.
- `OWNERID` - The Discord userID which controls your TuringAI instance.
- `PREFIX` - The prefix used for commands with TuringAI.
- `VERNUM` - The current version number of TuringAI being used. **do not change this!**

<br>

> [!TIP]
> **It is optional to add a clientID currently, but this may change with new releases.**

# Installation
- Clone TuringAI:
```shell
git clone https://github.com/AtomLabss/TuringAI
cd TuringAI
```

- Install the required dependancies:
```shell
npm install discord.js-selfbot-v13 groq-sdk dotenv
```

- Configure your .env file:
```env
# TuringAI configuration file
# You can change the values here to customize your TuringAI instance to your liking.

# Required values for TuringAI
TOKEN="<your-discord-token>" # Your Discord bot/user token
CLIENTID="<your-discord-client-id>" # Your Discord bot/user's clientID
GROQ_SECRET="<your-groqCloud-api-key-here>" # Your API key from GroqCloud

# Configuration values
OWNERID="1234567890123456789" # The Discord userID which controls your TuringAI instance
PREFIX="turing!" # TuringAI prefix

# System values
VERNUM="v1.0.3b" # TuringAI internal version number - don't change this!
```

- Profit.

# Usage

- It's as easy as cake! (probably)

```shell
cd TuringAI
nodejs ./turing.js
```

# Contributing
Thank you for contributing to TuringAI! Your efforts help improve the project for everyone.
<br>
<br>
Contributing to TuringAI is as easy as forking this repository, making your changes, and presenting them in a pull request back on this repo.
<br>
We wish you all the best!

# License
TuringAI is licensed under the MIT License. Please see the LICENSE file for more details.
