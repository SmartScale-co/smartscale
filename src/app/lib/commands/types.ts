export interface CommandResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface CommandOptions {
  args?: string[];
}

export interface Command {
  name: string;
  description: string;
  usage: string;
  category: string;
  execute: (options: CommandOptions) => Promise<CommandResponse>;
} 