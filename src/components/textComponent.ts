import { type APITextInputComponent, ComponentType, TextInputStyle } from "discord-api-types/v10";
import type { TextComponentOptions } from "../types/TextComponentOptions.js";

export function createTextComponent({
	customId,
	label,
	maxLength,
	minLength,
	placeholder,
	required,
	style,
	value,
}: TextComponentOptions): APITextInputComponent {
	return {
		type: ComponentType.TextInput,
		custom_id: customId,
		label,
		style: style ?? TextInputStyle.Paragraph,
		max_length: maxLength,
		min_length: minLength,
		placeholder,
		required: required ?? false,
		value,
	} as const;
}
