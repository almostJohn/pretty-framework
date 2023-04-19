import { type APIMessageComponentEmoji, ButtonStyle, type Snowflake } from "discord-api-types/v10";

export type ButtonOptions = {
	customId?: Snowflake | undefined;
	disabled?: boolean | undefined;
	emoji?: APIMessageComponentEmoji | undefined;
	label: string;
	style?: ButtonStyle | undefined;
	url?: string | undefined;
};
