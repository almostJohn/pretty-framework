import type { APIModalActionRowComponent, APIActionRowComponent } from "discord-api-types/v10";

export type ModalOptions = {
	components: APIActionRowComponent<APIModalActionRowComponent>[];
	customId: string;
	title: string;
};
