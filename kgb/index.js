const fs = require("fs")
const Discord = require("discord.js")

class ScoreBook {
    constructor() {
        this.data = {}
    }

    addScore(id, value) {
        this.validateId(id)
        this.data[id] += value
    }

    getScore(id) {
        this.validateId(id)
        return this.data[id]
    }

    validateId(id) {
        if (!(id in this.data)) {
            this.data[id] = 60
        }
    }
}

const client = new Discord.Client()
const scoreBook = new ScoreBook()

client.once("ready", () => {
    console.log("KGB is up!")
});

client.on("message", msg => {
    if (msg.content.startsWith("-") && msg.channel.name !== "bot-cmd") {
        msg.channel.send("Uncool comrade, uncool. Bot commands are for \"bot-cmd\" channel only. Keep this going and you are off to the Gulag.")
        msg.channel.send("Remember, Big Brother is watching you.")
        const userId = msg.author.id
        scoreBook.addScore(userId, -1)
    }
})

client.on("message", msg => {
    const text = msg.content.toLocaleLowerCase()
    if (text.includes("asshole")) {
        const userId = msg.author.id
        scoreBook.addScore(userId, -10)
    }
})

client.on("message", msg => {
    if (msg.content === "!kgb:myscore") {
        const userId = msg.author.id
        const score = scoreBook.getScore(userId)
        msg.channel.send(`Your score is ${score}`)
        if (score >= 60) {
            msg.channel.send("Good job, citizen. Glory to the motherland.")
        } else {
            msg.channel.send("The Police is watching you. Behave better or face consequences.")
        }
    }
})

fs.readFile("./secret", (err, data) => {
    if (err) {
        console.log("failed to read the secret file!")
        console.log(err)
        return
    }
    const token = data.toString()
    client.login(token)
})