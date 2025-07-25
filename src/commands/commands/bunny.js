const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "bunny",
        description: "Get a random Deep Sea Buddy variant from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const bunniesJsonData = await fs.readFile("data/bunnies.json", {encoding: "utf8"});
      const bunniesMap = JSON.parse(bunniesJsonData);
      const bunnies = bunniesMap["bunnies"];
      const bunny = bunnies[Math.floor(Math.random() * bunnies.length)];

      const embed = new EmbedBuilder()
      .setColor(`#5841cd`)
      .setTitle(`${bunny.name}`)
      .setDescription(`${bunny.description}`)
      .setImage(`https://cdn.sylvee.xyz/pressurebunny${bunny.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};