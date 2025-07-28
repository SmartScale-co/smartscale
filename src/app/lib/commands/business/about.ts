import { Command, CommandResponse, CommandOptions } from '../types';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about SmartScale.co',
  usage: 'about',
  category: 'business',
  execute: async (args: Record<string, any>, options: CommandOptions = {}): Promise<CommandResponse> => {
    return {
      success: true,
      message: `🏢 **SmartScale.co**\n\nSmartScale is a venture engine for entrepreneur+AI teams building and scaling the next wave of microSaaS.\n\nWe're reimagining software creation for domain experts—enabling solopreneurs to transform hands-on insight into sharp B2B products, powered by AI-assisted development that delivers MVPs faster, leaner, and with less capital than ever before.\n\nContact neo@smartscale.co for more info.`,
      data: null
    };
  }
}; 