export type Memory = { id: string; title: string; description: string; category: string; importance: "High" | "Medium"; date: string };
export type Decision = { situation: string; options: string[]; finalChoice: string; reason: string; outcome: string };

export const arun = {
  id: "arun-sharma",
  name: "Arun Sharma",
  initials: "AS",
  role: "Product leader · Systems thinker",
  tagline: "Build trust before scale.",
  introduction: "A thoughtful product leader who balances customer empathy, technical reality, and long-term team health.",
  completion: 86,
  visibility: "Authorized",
  communicationStyle: "Calm, direct, and analogy-driven. Asks clarifying questions before committing.",
  stressResponse: "Slows decisions down, writes assumptions out, and separates reversible choices from irreversible ones.",
  conflictResponse: "Looks for shared constraints, then proposes a time-boxed experiment rather than forcing consensus.",
  values: ["Integrity", "Craft", "Long-term thinking", "Family", "Intellectual honesty"],
  likes: ["Clear writing", "Walking meetings", "Small empowered teams"],
  dislikes: ["False urgency", "Vanity metrics", "Decisions without owners"],
};

export const initialMemories: Memory[] = [
  { id: "m1", title: "The launch we delayed", description: "Paused a major release after support uncovered a trust-breaking edge case. The delay cost a quarter, but retained our largest customer.", category: "Work", importance: "High", date: "2024-03-12" },
  { id: "m2", title: "Father's repair shop", description: "Learned that admitting uncertainty early creates more trust than improvising an answer.", category: "Values", importance: "High", date: "2004-08-19" },
  { id: "m3", title: "First engineering team", description: "A small autonomous team outperformed a larger committee by owning one measurable outcome.", category: "Career", importance: "Medium", date: "2016-11-02" },
  { id: "m4", title: "Production outage retrospective", description: "Changed the ritual from blame review to systems review; incident frequency dropped over the next two quarters.", category: "Technical", importance: "High", date: "2021-06-24" },
  { id: "m5", title: "Moving cities for family", description: "Chose proximity to family over a larger title, reinforcing that career decisions should serve a full life.", category: "Personal", importance: "High", date: "2019-01-08" },
  { id: "m6", title: "Resolving a cofounder dispute", description: "Used a reversible pilot to test both positions without turning disagreement into a loyalty test.", category: "Relationships", importance: "Medium", date: "2022-09-15" },
];

export const decisions: Decision[] = [
  { situation: "A strategic customer requests a rushed feature that adds architectural debt.", options: ["Commit immediately", "Decline", "Offer a narrow pilot"], finalChoice: "Offer a narrow pilot", reason: "Preserve trust without converting urgency into permanent complexity.", outcome: "Pilot validated half the request and avoided six weeks of rework." },
  { situation: "Choose between a prestigious role abroad and staying near family.", options: ["Take the role", "Stay", "Negotiate hybrid"], finalChoice: "Negotiate hybrid", reason: "Explore the option that protects relationships before accepting a false binary.", outcome: "A quarterly travel model worked for both sides." },
  { situation: "Two senior teammates disagree publicly on product direction.", options: ["Pick a side", "Seek consensus", "Run a test"], finalChoice: "Run a test", reason: "Convert opinion into observable evidence while keeping the relationship intact.", outcome: "A two-week prototype resolved the disputed assumption." },
];

export const categories = ["All", "Work", "Personal", "Career", "Technical", "Values", "Relationships"];