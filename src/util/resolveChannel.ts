import type { Guild, TextChannel, ForumChannel, VoiceChannel, StageChannel, Snowflake } from "discord.js";

export function resolveTextChannel(guild: Guild, channelId: Snowflake) {
	return guild.client.channels.resolve(channelId) as TextChannel | null;
}

export function resolveVoiceChannel(guild: Guild, channelId: Snowflake) {
	return guild.client.channels.resolve(channelId) as VoiceChannel | null;
}

export function resolveForumChannel(guild: Guild, channelId: Snowflake) {
	return guild.client.channels.resolve(channelId) as ForumChannel | null;
}

export function resolveStageChannel(guild: Guild, channelId: Snowflake) {
	return guild.client.channels.resolve(channelId) as StageChannel | null;
}
