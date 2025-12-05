LoginUI (React + TS + Tailwind)

This is a basic login UI I made. Left side is the form, right side is just a benefits section. The form uses a debounce hook and Zod for validation. Nothing complicated. Mostly just me testing a layout and some patterns.

Stack
React
TypeScript
Tailwind
Zod
Vite
A small debounce hook

Install
npm install

Run
npm run dev
Vite starts a server. Open the link it prints.

How it works
There’s no form library. I’m just storing values in state. When the user types, the debounced value updates after a delay, and that triggers field-level validation. On submit, I run the whole Zod schema. That’s about it.

Files
components/
  LoginForm.tsx
  BenefitsPanel.tsx
hooks/
  useDebounce.ts
validation/
  login.schema.ts
types/
  login.types.ts
App.tsx

Features
Debounced input validation
Full-form validation with Zod
Simple layout using Tailwind
40/60 panel split
Fills most of the screen
Just local component state

Notes
I made this mostly to test out debounced validation and a two-panel layout. Not meant to be a finished auth system. Could add password strength, API calls, animations, whatever, but not needed for what I was doing.
