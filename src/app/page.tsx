import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

SmartScale is a Consultancy Studio dedicated to crafting transformative solutions for SaaS (tech-enabled) companies. In addition to supporting our clients with Revenue Scaling Solutions (including M&A advisory), we are experts at wiring revenue operations to backoffice ERP and corporate finance motions in a PE context. We tailor solutions that 'scale smart', maximizing exit valuation.

Type $help to see available commands.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
