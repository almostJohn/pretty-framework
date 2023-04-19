import { container } from "tsyringe";
import type { Webhook } from "discord.js";
import { kWebhooks } from "./tokens.js";

export function createWebhooks() {
	const webhooks = new Map<string, Webhook>();
	container.register(kWebhooks, { useValue: webhooks });

	return webhooks;
}
