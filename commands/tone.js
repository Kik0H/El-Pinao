const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tone')
		.setDescription('Replies with ze!'),
	async execute(interaction) {
		return interaction.reply('ZÉ!');
	},
};