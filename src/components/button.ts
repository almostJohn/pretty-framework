import {
	type APIButtonComponent,
	ButtonStyle,
	ComponentType,
	type APIButtonComponentBase,
} from "discord-api-types/v10";
import type { ButtonOptions } from "../types/ButtonOptions.js";

export function createButton({ customId, disabled, emoji, label, style, url }: ButtonOptions): APIButtonComponent {
	const button: APIButtonComponentBase<any> = {
		type: ComponentType.Button,
		label,
		style: style ?? ButtonStyle.Primary,
		disabled,
		emoji,
	};

	if (style === ButtonStyle.Link && url) {
		return {
			...button,
			url,
		};
	}

	return {
		...button,
		custom_id: customId!,
	};
}
