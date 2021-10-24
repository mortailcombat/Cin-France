module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Voici vos résultats de recherche pour ${query}` },
            footer: { text: 'Ce bot utilise un projet RP réalisé par AcaRm_aX (Clark Kent / NationV-bot)' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};