import { Command, CommandResponse, CommandOptions } from '../types';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about SmartScale',
  usage: 'about',
  category: 'business',
  execute: async (options: CommandOptions): Promise<CommandResponse> => {
    return {
      success: true,
      message: `🏢 **SmartScale**\n\nSmartScale is a purpose-built comamnd center engaging selectively with client leadership to craft and deploy transformative, scaling-oriented projects. See leadership profile at https://www.linkedin.com/in/lukewarnermizell/ \n\nWe're reimagining scaling solutions for growing companies that transform hands-on insight into sharp B2B enablement (and products), powered by private, modern dev tools that deliver practical solutions faster, leaner, and with less capital than ever before.\n\nContact neo@smartscale.co for more info.`,
      data: null
    };
  }
}; 