/**
 * Command Registry for HealthBench CLI
 * Based on the CLI Command Registry Pattern
 */

import { Command } from './types';

class CommandRegistry {
  private commands: Map<string, Command> = new Map();

  register(command: Command) {
    this.commands.set(command.name, command);
  }

  getCommand(name: string): Command | undefined {
    return this.commands.get(name);
  }

  getAllCommands(): Command[] {
    return Array.from(this.commands.values());
  }
}

const registry = new CommandRegistry();
export default registry; 