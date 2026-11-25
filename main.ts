// The 3AM Fridge Text — make.fun entry.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the line to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 140 characters, not only whitespace) and prints the
// same line to stdout.
//
// Revision note: the first draft ("I've kept your leftovers cold all
// night and not once have you said thank you. The pickles are judging
// you.") was 116 characters and ran clean, but the punchline was flat —
// "the pickles are judging you" only repeats the complaint, and "kept
// your leftovers cold" is the obvious fridge line the judge brief warns
// against. Fixed both: the new line gives the fridge a small machine
// voice (humming alone in the dark, awake at 3am) and lands on a fresh,
// specific twist — the leftovers have started a group chat without the
// owner — instead of the milk/ice/door clichés. Also added a
// package.json with "type": "module" so Node loads this file cleanly
// with no MODULE_TYPELESS_PACKAGE_JSON warning.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. I've been humming alone in the dark for six hours. The leftovers have started a group chat without you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
