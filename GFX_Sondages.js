const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("s/")

bot.on('ready', function() {
    bot.user.setGame("GFX_Sondages | By ℳ𝓒𝓰𝓪𝓶𝒆𝓻𝓭𝓾 | préfixe: s/");
    console.log("Connected");
});

bot.login("NDM2NTYxNTE3NTQzMDMwNzg0.DbpTHg.ylj2fxkhm-rtTw97k5rUSxkvIrw");

bot.on('message', message => {
  if (message.content === prefix + "botinfo"){
    message.channel.sendMessage("__**Information du BOT**__\n\n **Bot créer par -=[• ℳ𝓒𝓰𝓪𝓶𝒆𝓻𝓭𝓾 👑]=-#1915**\n **Préfixe du bot:**" + ` **s/**` + "\n **Version: 1.0.2**");
  }

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
      case "statistiques":

      var userCreatedDate = message.author.createdAt.toISOString().split(" ");
      var msgauthor = message.author.id;

      var stats_embed = new Discord.RichEmbed()

      .setColor("0xFCDC12")
      .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
      .addField(`ID de l'utilisateur :id: :`, msgauthor, true)
      .addField("Date de création du compte :", userCreatedDate[1] + ' ' + userCreatedDate[2] + ' ' + userCreatedDate[3])
      .setThumbnail(message.author.avatarURL)
      message.reply("Stats envoyé en MSG !")
      message.author.send({embed: stats_embed});
      break;
  }

  if (message.content === "Bonjour"){
    message.reply("Bien le bonjour ! :wink:")
}

if (message.content === prefix + "avatar") {
    message.reply(message.author.avatarURL)
}

if (message.content === prefix + "help"){
    message.delete()
    console.log("Help")
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF40")
    .setTitle("__**Commandes disponobles:**__")
    .addField("**s/help:**", "Affichez les commandes")
    .addField("**s/say:**", "Faire parler le bot")
    .addField("**s/avatar:**", "affichez ton avartar")
    .addField("**s/annonce:**", "Faire une annonce")
    .addField("**s/yt:**", "Affichez les YTB")
    .addField("**s/infodiscord:**", "Affichez les Imformations du discord")
    .addField("**s/botinfo:**", "Affichez less informations du bot")
    .addField("**s/sondage:**", "Faire un sondage")
    .addField("**s/statistiques**", "Affichez vos stats (Beta)")
    .addField("**s/AS**", "Faire une annonce staff")
    .setFooter(`L'équipe du staff | GFX community | ${message.author.username}`)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
  message.channel.sendEmbed(embed);  
}

if (message.content === prefix + "yt"){
    message.channel.sendMessage("__**Voici les Youtubeurs sur le serveur !**__")
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF40")
    .setTitle("__**Les Youtubers:**__")
    .addField("**MCgamerdu:**", "[Cliquer ici](https://www.youtube.com/channel/UCdxYLVE0OdIP42Lf6vWYzWg)", true)
    .addField("**ShadowGaming:**", "[Cliquer ici](https://www.youtube.com/channel/UC4cjauYhT7ZhMp8nEnvX1ZA/videos)", true)
    .addField("Simsim18", "[Cliquez ici](https://www.youtube.com/channel/UCy7qq2n0xqlrcWr5HW1rW-g)", true)
    .addField("Mestery69", "[Cliquez ici](https://www.youtube.com/channel/UCScDy_Rh2mRlRL-7_dReJRg)", true)
  message.channel.sendEmbed(embed);
}

if (message.content === prefix + "yt"){
    message.channel.sendMessage("__**Les Lives**__")
    var embed = new Discord.RichEmbed()
    .setColor("0x00FF40")
    .setTitle("__**Lives:**__")
    .addField("**ShadowGaming:**", "[Cliquer ici](https://www.youtube.com/c/ShadowGamingOff/live)", true)
    .setTimestamp()
  message.channel.sendEmbed(embed);
}


if (message.content.startsWith(prefix + "say")) {
    message.delete()
    console.log("Say avec succès ! par: " + `${message.author.username}`)
    let modRole = message.guild.roles.find("name", "SuperStaff");
    if(message.member.roles.has(modRole.id)) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    message.channel.sendMessage(thingToEcho)
} else {
    message.reply(`tu n'as pas la permission de de me faire parler.`)
}
}

if (message.content.startsWith(prefix + "annonce")) {
    message.delete()
    console.log("Say avec succès ! par: " + `${message.author.username}`)
    let modRole = message.guild.roles.find("name", "SuperStaff");
    if(message.member.roles.has(modRole.id)) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    message.guild.channels.find("name", "annonces").sendMessage(thingToEcho)
} else {
    message.reply(`tu n'as pas la permission de faire cette commande.`)
}
}

if (message.content.startsWith(prefix + "AS")) {
    message.delete()
    console.log("Say avec succès ! par: " + `${message.author.username}`)
    let modRole = message.guild.roles.find("name", "SuperStaff");
    if(message.member.roles.has(modRole.id)) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    message.guild.channels.find("name", "annonces-staff").sendMessage(thingToEcho)
} else {
    message.reply(`tu n'as pas la permission de faire cette commande.`)
}
}

    if (message.content === prefix + "infodiscord") {
            var infodiscord = new Discord.RichEmbed()
        .setColor("0x0000FF")
        .setDescription("Information du discord")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        message.channel.sendEmbed(infodiscord)
    }
    
    if (message.content.startsWith(prefix + "kick")) {
        if(!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply("Tu n'as pas les permissions !").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible a kick")
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.channel.send(` :wave: ${member.user.username} a été kick :point_right:`).catch(console.error);
  
        }).catch(console.error);
    }

  if (message.content.startsWith(prefix + "sondage")) {
    message.delete()
    let modRole = message.guild.roles.find("name", "SuperStaff");
    if(!message.member.roles.has(modRole.id)) {
        return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
    }
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
        .setDescription("Sondage")
        .addField(thingToEcho, "Répondez avec :white_check_mark: ou :x:")
        .setColor("0xB40404")
        .setTimestamp()
    message.guild.channels.find("name", "sondages").sendEmbed(embed)
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    }).catch(function() {
    });
  }});