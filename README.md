# Pretty Framework

> Command Usage

```ts
import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "@almostJohn/pretty-framework";
import type { InteractionParam, ArgsParam } from "@almostJohn/pretty-framework";

const PingCommand = {
	name: "ping",
	description: "Replies with pong!",
	options: [
		{
			name: "hide",
			description: "Hides the output",
			type: ApplicationCommandOptionType.Boolean,
		},
	],
} as const;

export default class extends Command<typeof PingCommand> {
	public override async chatInput(interaction: InteractionParam, args: ArgsParam<typeof PingCommand>): Promise<void> {
		await interaction.deferReply({ ephemeral: args.hide ?? true });
		await interaction.editReply({ content: "Pong!" });
	}
}
```

> Event Usage

```ts
import { on } from "node:events";
import type { Event } from "@almostJohn/pretty-framework";
import { logger } from "@almostJohn/pretty-framework";
import { Client, Events } from "discord.js";

export default class implements Event {
	public name = "Client ready handling";

	public event = Events.ClientReady as const;

	public constructor(public readonly client: Client<true>) {}

	public async execute(): Promise<void> {
		for await (const _ of on(this.client, this.event)) {
			logger.info({ event: { name: this.name, event: this.event } }, `Logged in as ${this.client.user.tag}`);
		}
	}
}
```

## Author

**Pretty Framework** © [almostJohn](https://github.com/almostJohn).<br />
Authored and maintained by almostJohn.

> GitHub [@almostJohn](https://github.com/almostJohn)
