/**
 * Command Index - SmartScale.co
 * This file imports all commands to ensure they're registered
 */

// Import the command registry
import registry from './registry';

// Import command types
export * from './types';

// SmartScale Business Commands
import './business/about';    // About SmartScale.co
import './business/invest';   // Investment model
import './business/contact';  // Contact information

// System Commands
import './system/help';       // Help command (following leading practice)

// Export the registry for use in the application
export default registry;
