import { TextInputStyle, type Snowflake } from "discord-api-types/v10";

export type TextComponentOptions = {
	customId: Snowflake;
	label: string;
	maxLength?: number | undefined;
	minLength?: number | undefined;
	placeholder?: string | undefined;
	required?: boolean | undefined;
	style?: TextInputStyle | undefined;
	value?: string | undefined;
};
