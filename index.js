const Discord = require("discord.js");
const client = new Discord.Client();

const generator = require("generate-password");
const config = require("./config.js");

        const embed12 = new Discord.RichEmbed()
  .setTitle("Nitro")
  .setColor(0x7289DA)
  .setDescription("Nitro code envoyé en mp !")
  .setFooter("Nitro Gen par LZz")
  .setImage("https://repository-images.githubusercontent.com/336227331/08ca6fc4-80b3-482e-ba9d-0e13b1fc3288")

client.login(config.token);

client.on('ready', () => {
  client.user.setActivity("Générer des nitros");
  console.log(`${client.user.username} démare...`);
  console.log(`Présent sur ${client.guilds.size} serveurs.`);
  console.log(`Pour un total de ${client.users.size} utilisateurs`);
});

      //  ping le bot

client.on("messageCreate", message => {
  if (message.author.bot) return;

if(message.content === "<@" + "985176017935147010" + ">"){
  const embed1 = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setTitle("**Prefix du bot**")
    .setAuthor("LZz💙#0001", "https://cdn.discordapp.com/avatars/955902157335429180/a3c5e85169544b836a3b51ad6fc1066c.png?size=4096", "https://www.tiktok.com/@lzz377")
    .setDescription("Voila le prefix du bot")
    .setThumbnail("https://i.ibb.co/mHdHLcY/panda.jpg")
    .addField("Le prefix du bot :", "```+```")
    .setTimestamp()
    .setFooter("Gogotus#5515", "https://cdn.discordapp.com/avatars/576504417919172618/7c0e95a90e27cbcde1a8b04a51849fd8.png?size=1024")

message.channel.send({ embeds: [embed1]});
}
});

  //  +nitro
const getFake = () => {
    let nitrocode = generator.generate({ length: 16, numbers: true });
    return `https://discord.gift/${nitrocode}`;
};

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));
      return message.channel.send(embed12)

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.on("message", (message) => {

  if(message.author.bot || !message.guild) return;

      if(!message.content.startsWith(`${config.prefix}nitro`)) return message.edit();
      message.author.createDM().then((channel) => channel.send(getFake()));

});

client.login(config.token);
