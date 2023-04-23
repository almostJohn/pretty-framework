import type { CommandPayload } from "./types/ArgumentsOf.js";
import type { ArgsParam, InteractionParam, CommandMethod, Commands } from "./types/Interaction.js";
import { logger } from "./logger.js";

export abstract class Command<C extends CommandPayload = CommandPayload> implements Commands<C> {
	public constructor(public readonly name?: C["name"][]) {}

	public chatInput(interaction: InteractionParam<CommandMethod.ChatInput>, _args: ArgsParam<C>): Promise<void> | void {
		logger.info(
			{ command: { name: interaction.commandName, type: interaction.type }, userId: interaction.user.id },
			`Received chat input for ${interaction.commandName}, but the command does not handle chat input`,
		);
	}

	public autocomplete(
		interaction: InteractionParam<CommandMethod.Autocomplete>,
		_args: ArgsParam<C>,
	): Promise<void> | void {
		logger.info(
			{ command: { name: interaction.commandName, type: interaction.type }, userId: interaction.user.id },
			`Received autocomplete for ${interaction.commandName}, but the command does not handle autocomplete`,
		);
	}

	public messageContext(
		interaction: InteractionParam<CommandMethod.MessageContext>,
		_args: ArgsParam<C>,
	): Promise<void> | void {
		logger.info(
			{ command: { name: interaction.commandName, type: interaction.type }, userId: interaction.user.id },
			`Received message context for ${interaction.commandName}, but the command does not handle message context`,
		);
	}

	public userContext(
		interaction: InteractionParam<CommandMethod.UserContext>,
		_args: ArgsParam<C>,
	): Promise<void> | void {
		logger.info(
			{ command: { name: interaction.commandName, type: interaction.type }, userId: interaction.user.id },
			`Received user context for ${interaction.commandName}, but the command does not handle user context`,
		);
	}
}
