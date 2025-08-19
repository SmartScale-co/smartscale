import { Command, CommandResponse, CommandOptions } from '../types';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about SmartScale',
  usage: 'about',
  category: 'business',
  execute: async (options: CommandOptions): Promise<CommandResponse> => {
    return {
      success: true,
      message: `🏢 **SmartScale**

SmartScale is a purpose-built command center that partners directly with executive leadership to accelerate M&A decisions and deal execution. We combine operator experience with auditable workflows to deliver rapid, enterprise-grade pre- and post-deal solutions.

For a short briefing or a tailored scope for your deal, email neo@smartscale.co.`,
      data: null
    };
  }
}; 