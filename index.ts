import { Client, Message } from 'discord.js'
import keepAlive from './server'

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`)
  client.user?.setPresence({
    activities: [{
      name: 'Sexo 2'
    }],
    status: 'online'
  })
})

client.on('message', async (msg: Message)  => {
  if (!msg.content.startsWith('!') || msg.author.bot) return

  const text = msg.content.replace('!', '')
  
  if (text === "teste") {
    msg.reply(`Salve ${msg.author}`)
  }
})

keepAlive()
client.login(process.env.TOKEN)