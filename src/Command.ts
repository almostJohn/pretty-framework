import type { CommandPayload } from "./types/ArgumentsOf.js";
import type { ArgsParam, InteractionParam, CommandMethod, Commands } from "./types/Interaction.js";

export abstract class Command<C extends CommandPayload = CommandPayload> implements Commands<C> {
	public constructor(public readonly name?: C["name"][]) {}

	public chatInput(
		interaction: InteractionParam<CommandMethod.ChatInput>,
		_args: ArgsParam<CommandMethod.ChatInput>,
	): Promise<void> | void {
		console.log(`Received chat input for ${interaction.commandName}, but the command does not handle chat input`);
	}

	public autocomplete(
		interaction: InteractionParam<CommandMethod.Autocomplete>,
		_args: ArgsParam<CommandMethod.Autocomplete>,
	): Promise<void> | void {
		console.log(`Received autocomplete for ${interaction.commandName}, but the command does not handle autocomplete`);
	}

	public messageContext(
		interaction: InteractionParam<CommandMethod.MessageContext>,
		_args: ArgsParam<CommandMethod.MessageContext>,
	): Promise<void> | void {
		console.log(
			`Received message context for ${interaction.commandName}, but the command does not handle message context`,
		);
	}

	public userContext(
		interaction: InteractionParam<CommandMethod.UserContext>,
		_args: ArgsParam<CommandMethod.UserContext>,
	): Promise<void> | void {
		console.log(`Received user context for ${interaction.commandName}, but the command does not handle user context`);
	}
}
