
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
    console.log("bot is up!");
});

client.on("message", msg => {
    if (msg.content.startsWith("-") && msg.channel.name !== "bot-cmd") {
        msg.channel.send("Uncool comrade, uncool.");
        msg.channel.send("Bot command are for \"bot-cmd\" channel only. Keep this going then you are off to the Gulag.");
        msg.channel.send("Remember, Big Brother is watching you.");
    }
});

client.login("NzkzMjA3NTU2MTgwNTQxNDgw.X-o6Gg.WDgwYDa-yIl71IUwXDHUpv4JNTs");