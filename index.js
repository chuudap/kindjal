const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI4MzkzMDg1NjUyNzEzNTMy.YdYHcA.5GQJN5qCtLCr08p6zhPPcETYDRQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})



client.login(process.env.TOKEN)