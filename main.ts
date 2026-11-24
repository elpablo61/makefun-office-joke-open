// Make the AI Judge Laugh: the Office Joke Open
// Writes the winning one-liner to /output/entry.txt (one line, under 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I blocked focus time on my calendar, so my boss booked over it to ask why I never have focus time.";

// Gate: the entry must be 1-200 characters. Fail loudly instead of
// submitting an invalid line.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} chars, outside the 1-200 cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE + "\n", "utf8");
