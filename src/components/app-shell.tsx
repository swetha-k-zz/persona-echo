import { Link, useRouterState } from "@tanstack/react-router";
import { BrainCircuit, Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const routes = [
  ["Dashboard", "/dashboard"], ["Profile", "/persona-profile"], ["Chat", "/ai-chat"],
  ["Simulate", "/decision-simulator"], ["Memories", "/memory-management"], ["Settings", "/settings"],
] as const;

export function Brand() {
  return <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground"><span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-[0_0_24px_var(--glow)]"><BrainCircuit className="size-5" /></span>PersonaTwin</Link>;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  const publicPage = path === "/" || path === "/auth";
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"><Brand />
        <nav className="hidden items-center gap-1 lg:flex">{!publicPage && routes.map(([label, to]) => <Link key={to} to={to} className={cn("rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground", path === to && "bg-muted text-foreground")}>{label}</Link>)}</nav>
        <div className="hidden items-center gap-3 lg:flex">{publicPage ? <><Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link><Button asChild><Link to="/create-persona">Create your twin</Link></Button></> : <Link to="/persona-profile" className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm"><span className="grid size-7 place-items-center rounded-md bg-accent font-bold text-accent-foreground">AS</span>Arun</Link>}</div>
        <Button className="lg:hidden" size="icon" variant="ghost" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background p-4 lg:hidden">{(publicPage ? [["Home", "/"], ["Sign in", "/auth"], ["Create twin", "/create-persona"]] as const : routes).map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{label}</Link>)}</nav>}
    </header>
    {children}
    <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between"><div><Brand /><p className="mt-3 max-w-md">Consent-first AI personas. Every response identifies itself as synthetic and explains the memories behind it.</p></div><div className="flex items-center gap-2 text-success"><ShieldCheck className="size-4" /> Owner-controlled · Revocable · Explainable</div></div></footer>
  </div>;
}