import { Command, CommandResponse, CommandOptions } from '../types';
import registry from '../registry';

export const helpCommand: Command = {
  name: 'help',
  description: 'Display available commands',
  usage: 'help',
  category: 'system',
  execute: async (args: Record<string, any>, options: CommandOptions = {}): Promise<CommandResponse> => {
    const commands = registry.getAllCommands();
    
    const helpText = `📋 **Available Commands**\n\n` +
      commands.map(cmd => `**$${cmd.name}** - ${cmd.description}`).join('\n') +
      `\n\nType **$help** to see this list again.`;
    
    return {
      success: true,
      message: helpText,
      data: null
    };
  }
}; 