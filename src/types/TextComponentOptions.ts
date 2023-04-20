import { TextInputStyle } from "discord-api-types/v10";

export type TextComponentOptions = {
	customId: string;
	label: string;
	maxLength?: number | undefined;
	minLength?: number | undefined;
	placeholder?: string | undefined;
	required?: boolean | undefined;
	style?: TextInputStyle | undefined;
	value?: string | undefined;
};
