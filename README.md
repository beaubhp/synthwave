# Synthwave Music Bot using Discord JS
A complete music-only discord bot, ready to go! 🎧

Warning, this code uses the v12 of the Discord.js module. Previous versions such as (11.5.1, 11.5.0 or other) will not be supported.

Well, let's start by downloading the code.
Go to the folder `config` then the file `config.json`.
For the bot to be able to start, please complete the file with your credentials as follows :

```js
{
    "prefix": "PREFIX",
    "game": "GAME",
    "token_bot": "TOKEN"
}
```

Reminder :

- `prefix`, the prefix that will be set to use the bot.
- `game`, the status of the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```js
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

Go to the console and type this :

```
npm i
```

To start the bot :

```
#With Node
node index.js

#With pm2
pm2 start index.js --name "MusicBot"
```

All you have to do is turn on your bot !

### 🎵 Music Commands

```
play <name>, play music in a vocal salon.
pause, pause the current music.
resume, puts the current music back on. 
queue, see the next musics.
np, see music in progress.
volume <1 - 100>, change the volume.
loop, to enable or disable the repeat function.
skip, skip to next music.
stop, stop all music.
filter <filter>, add / remove filters.
w-filters, see filters.
clear-queue, delete the next music.
```

### 💡 General Commands

```
help, see the list of available orders.
ping, see the bot latency.
```

This is used with [discord.js](https://www.npmjs.com/package/discord.js) and [discord-player](https://www.npmjs.com/package/discord-player).
