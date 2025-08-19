import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

SmartScale is a SaaS Command Center for implementing tranformative projects/solutions.  For the past eight years we have leverged our hands-on exerience as SaaS operators to deliver M&A integrations, rev ops solutions, wiring CRM to scalable ERP and GAAP accounting solutions, usually in a PE context. We have evolved our backoffice tooling, and we tailor solutions inside client ecosystems that 'scale smart', towards maximizing exit valuation.  More recently we have perfected our capability for enterprise grade FIM and private LLM solutioning workflow, all developed in our purpose-built secure command center office.  Working directly with owners and exec decision makers, we assure clients their project are enginnered from ground up with highest quality code and security,in a command-driven envirenment. 

Type $help to see available commands.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
