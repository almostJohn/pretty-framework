import { type APIMessageComponentEmoji, ButtonStyle } from "discord-api-types/v10";

export type ButtonOptions = {
	customId?: string | undefined;
	disabled?: boolean | undefined;
	emoji?: APIMessageComponentEmoji | undefined;
	label: string;
	style?: ButtonStyle | undefined;
	url?: string | undefined;
};
