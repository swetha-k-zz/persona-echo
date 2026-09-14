# PersonaTwin frontend rebuild

## Goal
Recreate the complete consent-first AI persona product as a polished, responsive dark interface while preserving all nine pages and the documented user flow.

## Experience
- Build a shared responsive navigation and footer for public and product pages.
- Use a distinctive dark navy command-center aesthetic with electric blue and violet accents, glass surfaces, restrained glow, and clear consent/status language.
- Keep layouts dense enough for an AI product while maintaining readable hierarchy and touch-friendly mobile behavior.

## Pages and interactions
- Landing: interactive twin preview, four capability cards, five-step blueprint, and clear calls to action.
- Authentication: login, signup, forgot-password modes, validation, and demo autofill.
- Dashboard: completion, memory and decision metrics, persona status, and shortcuts.
- Create Persona: functional five-step wizard, dynamic memory/decision inputs, sample Arun Sharma autofill, validation, and completion state.
- Persona Profile: overview, memories, decisions, values tabs, stats, and downloadable JSON export.
- AI Chat: suggested prompts, optimistic messages, typing state, voice toggle, AI disclosure, and expandable evidence citations using realistic local demo responses.
- Decision Simulator: scenario/options editor, simulated forecast, confidence, rationale, uncertainty, and evidence.
- Memory Management: searchable/filterable memory cards plus working add, edit, and delete interactions.
- Settings: visibility choices, owner-consent control, consent audit log, and guarded revocation confirmation.

## Technical approach
- Use TanStack file routes for each documented page and typed links between them.
- Centralize demo schemas and Arun Sharma data so future database and AI adapters can replace local services cleanly.
- Create reusable shell, cards, controls, badges, progress, dialogs, and disclosure patterns.
- Keep all visual values in semantic Tailwind v4 tokens and global design styles.
- Add unique metadata to every content route.
- Verify key flows and desktop/mobile rendering in the running preview.

## Scope boundary
This pass builds a complete frontend with realistic local behavior. Authentication, persistence, model inference, voice capture, cryptographic signing, and permanent deletion remain simulated until backend services are connected.
