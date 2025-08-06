import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

SmartScale is a Solution Studio dedicated to crafting transformative solutions for SaaS and tech-enabled companies. In addition to supporting our clients with Revenue Scaling (including M&A advisory), we are experts at wiring revenue ops to backoffice ERP, automated GAAP acccounting, and corporate finance motions in a PE context. We have evolved our 'smart_stack' backoffice tooling as ai_enabled_playbook, and also we tailor solutions inside client ecosystem that 'scale_smart', towards maximizing exit valuation.

Type $help to see available commands.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
