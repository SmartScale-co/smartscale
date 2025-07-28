// Updated for CommandOptions fix
/**
 * Command interfaces for the HealthBench CLI
 * Based on the CLI Command Registry Pattern
 */

/**
 * Command argument definition
 */
export interface CommandArg {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array';
  description: string;
  required: boolean;
  default?: any;
}

/**
 * Command response data structure
 */
export interface CommandResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Command execution options
 */
export interface CommandOptions {
  args?: string[];
}

/**
 * Command definition interface
 */
export interface Command {
  name: string;
  description: string;
  usage: string;
  category: string;
  execute: (options: CommandOptions) => Promise<CommandResponse>;
}

/**
 * Example usage:
 * 
 * const healthCommand: Command = {
 *   name: 'health',
 *   description: 'Check the health of the system',
 *   usage: 'health',
 *   category: 'system',
 *   execute: async () => {
 *     return {
 *       success: true,
 *       message: 'System is healthy',
 *       data: { status: 'ok', uptime: '10m' }
 *     };
 *   }
 * };
 */

export interface CommandRegistry {
  register(command: Command): void;
  execute: (command: string, args: Record<string, any>, options?: { onProgress?: (update: any) => void }) => Promise<CommandResponse>;
  getCategories: () => string[];
  listByCategory: (category: string) => Command[];
  listAll: () => Command[];
} 