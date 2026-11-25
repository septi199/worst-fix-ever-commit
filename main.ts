import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Fix Ever: Funniest Commit Message.
// One commit subject line for a fix that made everything worse: the
// login bug got "fixed" by removing every account that could hit it.
// The message is assembled from its three grammatical pieces so the
// joke's structure (prefix, claimed fix, catastrophic method) stays
// visible in the code.

const MAX_LENGTH = 100;

function buildCommitMessage(): string {
  const prefix = "fix:";
  const claimedFix = "fixed the login bug";
  const method = "by deleting all accounts";
  return `${prefix} ${claimedFix} ${method}`;
}

function assertWithinGate(text: string): void {
  if (text.length < 1 || text.length > MAX_LENGTH) {
    throw new Error(
      `entry length ${text.length} is outside the 1-100 character gate`,
    );
  }
}

function writeEntry(outDir: string, text: string): string {
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  return outPath;
}

function verifyBytes(outPath: string, expected: string): void {
  // Byte-level verification: read the file back as raw bytes and refuse
  // to finish unless every byte matches the commit message exactly.
  const roundTrip = readFileSync(outPath);
  if (!Buffer.from(expected, "utf8").equals(roundTrip)) {
    throw new Error(
      "entry.txt verification failed: written bytes do not match the commit message",
    );
  }
}

function main(): void {
  const text = buildCommitMessage();
  assertWithinGate(text);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = writeEntry(outDir, text);
  verifyBytes(outPath, text);
  console.log(`wrote ${outPath} (${text.length} characters)`);
}

main();
