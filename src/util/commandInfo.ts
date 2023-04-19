import { basename, extname } from "node:path";
import type { CommandInfo } from "../types/CommandInfo.js";

export function commandInfo(path: string): CommandInfo | null {
	if (extname(path) !== ".js") {
		return null;
	}

	return { name: basename(path, ".js") } as const;
}
