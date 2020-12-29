import discord

client = discord.Client()
with open("./secret") as f:
    token=f.read()

@client.event
async def on_ready():
    print("Helloooo?")
    print("Are you going to open the door? At any time?")

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if "moron" in message.content.lower():
        await message.channel.send("I am NOT! A MORON!")

client.run(token)
