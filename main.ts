// One Word for Your Wi-Fi — entry program.
// Final: the word is "gaslighting".
// My Wi-Fi shows full bars, loads nothing, and acts like the
// problem is me. One word, eleven characters, no spaces, no
// explanation needed: every home Wi-Fi owner has lived it.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "gaslighting";

// Guard the gate: exactly one word, 1-20 characters, no whitespace.
if (!/^\S{1,20}$/.test(word)) {
  throw new Error("entry must be a single word of 1-20 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
