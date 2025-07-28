/**
 * Command Index - SmartScale.co
 * This file imports all commands to ensure they're registered
 */

// Import the command registry
import registry from './registry';

// Import command types
export * from './types';

// Import and register business commands
import { aboutCommand } from './business/about';
import { investCommand } from './business/invest';
import { contactCommand } from './business/contact';

// Import and register system commands
import { helpCommand } from './system/help';

// Register all commands
registry.register(aboutCommand);
registry.register(investCommand);
registry.register(contactCommand);
registry.register(helpCommand);

// Export the registry for use in the application
export default registry;
