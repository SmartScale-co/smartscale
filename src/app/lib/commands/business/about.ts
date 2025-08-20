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

SmartScale is a purpose-built command center office that partners directly with executive leadership to accelerate M&A decisions and deal execution. We combine operator experience with modern workflows to deliver rapid, enterprise-grade pre- and post-deal integrations and solutions.

See https://www.linkedin.com/in/lukewarnermizell/ for more info.

For a short briefing or a tailored scope for your deal, email neo@smartscale.co.`,
      data: null
    };
  }
}; 