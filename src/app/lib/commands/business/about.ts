import { Command, CommandResponse, CommandOptions } from '../types';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about SmartScale',
  usage: 'about',
  category: 'business',
  execute: async (options: CommandOptions): Promise<CommandResponse> => {
    return {
      success: true,
      message: `🏢 **SmartScale**\n\nSmartScale is Luke Mizell's Solution Studio where his team engages selectively with client leadership to craft and deploy transformative, scaling-oriented projects. See https://www.linkedin.com/in/lukewarnermizell/ \n\nWe're reimagining scaling solutions for growing companies that transform hands-on insight into sharp B2B enablement (and products), powered by AI-assisted development that delivers practical solutions faster, leaner, and with less capital than ever before.\n\nContact neo@smartscale.co for more info.`,
      data: null
    };
  }
}; 