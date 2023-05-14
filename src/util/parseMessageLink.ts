export function parseMessageLink(link: string) {
	const linkRegex =
		/(?:https?:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?<guildId>\d{17,20})\/(?<channelId>\d{17,20})\/(?<messageId>\d{17,20}))/gi;
	const groups = linkRegex.exec(link)?.groups;

	if (!groups) {
		return null;
	}

	const { guildId, channelId, messageId } = groups;
	return { guildId, channelId, messageId };
}
