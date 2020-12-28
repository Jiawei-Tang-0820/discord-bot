const fs = require("fs")
const Discord = require("discord.js")

const client = new Discord.Client()

client.once("ready", () => {
    console.log("KGB is up!")
});

client.on("message", msg => {
    if (msg.content.startsWith("-") && msg.channel.name !== "bot-cmd") {
        msg.channel.send("Uncool comrade, uncool.")
        msg.channel.send("Bot commands are for \"bot-cmd\" channel only. Keep this going and you are off to the Gulag.")
        msg.channel.send("Remember, Big Brother is watching you.")
    }
});

fs.readFile("./secret", (err, data) => {
    if (err) {
        console.log("failed to read the secret file!")
        console.log(err)
        return
    }
    const token = data.toString()
    client.login(token)
})