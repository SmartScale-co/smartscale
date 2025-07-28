import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

SmartScale is a studio dedicated to leading the growth of SaaS and tech enabled companies. In addition to supporting our clients with backoffice scaling solutions, we are also now a venture engine for entrepreneur+AI teams building and scaling the next wave of microSaaS.

Type $help to see available commands.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
