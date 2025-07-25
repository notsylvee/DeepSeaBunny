const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "bunny",
        description: "Get a random Deep Sea Buddy Regretevator cat variant from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const catsJsonData = await fs.readFile("data/bunnies.json", {encoding: "utf8"});
      const catsMap = JSON.parse(catsJsonData);
      const cats = catsMap["cats"];
      const cat = cats[Math.floor(Math.random() * cats.length)];

      const embed = new EmbedBuilder()
      .setColor(`#5841cd`)
      .setTitle(`${cat.name}`)
      .setDescription(`${cat.description}`)
      .setImage(`https://cdn.sylvee.xyz/pressurecat${cat.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};