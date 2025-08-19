import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

SmartScale is a SaaS command center for implementing transformative projects and solutions.

For over eight years we've leveraged hands-on experience as SaaS operators to deliver M&A integrations, revenue-operations solutions, CRM-to-scalable-ERP integrations, and GAAP accounting implementations—often in a private equity context.

We've evolved our back-office tooling and tailor solutions within client ecosystems that "scale smart" to maximize exit valuation.

More recently we've perfected enterprise-grade FIM and private LLM solution workflows, all developed in our purpose-built, secure command-center private office.

Working directly with owners and executive leaders, we ensure projects are engineered from the ground up with the highest quality code and security standards in a command-driven environment.

Type $help to see available commands.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
