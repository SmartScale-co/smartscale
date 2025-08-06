import { Command, CommandResponse, CommandOptions } from '../types';

export const contactCommand: Command = {
  name: 'contact',
  description: 'Get in touch with SmartScale',
  usage: 'contact',
  category: 'business',
  execute: async (options: CommandOptions): Promise<CommandResponse> => {
    return {
      success: true,
      message: `📧 **Contact SmartScale**\n\nIf you're ready to 'scale smart', let's talk.\n\n**Email:** neo@smartscale.co \n**Website:** smartscale.co`,
      data: null
    };
  }
}; 