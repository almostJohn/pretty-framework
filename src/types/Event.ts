export type Event = {
	name: string;
	event: string;
	disabled?: boolean | undefined;
	execute(...args: any): Promise<void> | void;
};
