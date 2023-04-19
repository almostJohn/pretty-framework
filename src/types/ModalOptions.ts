import type { APIModalActionRowComponent, APIActionRowComponent, Snowflake } from "discord-api-types/v10";

export type ModalOptions = {
	components: APIActionRowComponent<APIModalActionRowComponent>[];
	customId: Snowflake;
	title: string;
};
