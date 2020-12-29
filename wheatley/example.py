import discord
import asyncio


client = discord.Client()
with open("./secret") as f:
    token=f.read()

@client.event
async def on_ready():
    print("Helloooo?")

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if "moron" in message.content.lower():
        await message.channel.send("I am NOT! A MORON!")

    if "Wheatley" in [usr.name for usr in message.mentions]:
        await message.add_reaction("👀")

client.run(token)
