import { Command, CommandResponse, CommandOptions } from '../types';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about SmartScale',
  usage: 'about',
  category: 'business',
  execute: async (options: CommandOptions): Promise<CommandResponse> => {
    return {
      success: true,
      message: `🏢 **SmartScale**\n\nSmartScale is a studio dedicated to leading the growth of SaaS and tech enabled companies. In addition to supporting our clients with backoffice scaling solutions, we are also now a venture engine for entrepreneur+AI teams building and scaling the next wave of microSaaS.\n\nWe're reimagining software creation for domain experts—enabling solopreneurs to transform hands-on insight into sharp B2B products, powered by AI-assisted development that delivers MVPs faster, leaner, and with less capital than ever before.\n\nContact neo@smartscale.co for more info.`,
      data: null
    };
  }
}; 