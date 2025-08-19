import Terminal from '@/app/components/terminal/Terminal';

export default function Home() {
  const welcomeMessage = `Welcome to SmartScale! 🚀

Executive-grade M&A support & territorial intelligence — faster, auditable decisions.

I’m a solopreneur operator building narrow M&A micro‑SaaS and consulting directly with CEOs to speed deals and reduce execution risk.

• Faster go/no‑go decisions for M&A and divestiture
• Turnkey, auditable reports and secure CLI workflows
• Post-M&A integration support

Working directly with owners and executive leaders, we engineer solutions from the ground up with enterprise-grade security and operational rigor.

Type $help to explore the CLI or email neo@smartscale.co to schedule a 10‑minute briefing.`;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Terminal initialMessage={welcomeMessage} />
    </div>
  );
}
