import type { APIModalInteractionResponseCallbackData } from "discord-api-types/v10";
import type { ModalOptions } from "../types/ModalOptions.js";

export function createModal({ components, customId, title }: ModalOptions): APIModalInteractionResponseCallbackData {
	return {
		custom_id: customId,
		title,
		components,
	} as const;
}
