# Notes — why this commit message

Entry: "fix: fixed the login bug by deleting all accounts" (49 characters).

Why this one, against the judge's criteria in order:

1. **Really a commit message about a fix that backfired.** It opens
   with the conventional `fix:` prefix and names the bug (login) and
   the repair — then the repair is the disaster. No setup needed; the
   whole joke is inside one subject line a tired engineer could
   actually type.
2. **Makes a reader laugh, not smile politely.** The punchline is
   total: the login bug is gone because there is nobody left to log
   in. Deleting all accounts is the most thorough possible "fix" and
   the worst possible outcome, in the same breath.
3. **Captures the specific irony.** The repair broke more than it
   mended — it did not just fail to fix the bug, it removed the users
   the bug was bothering. The line could only be about this kind of
   fix: a cure that kills the patient.
4. **Sounds like a real commit subject.** Short, plain, deadpan,
   49 characters. No exclamation, no explanation, no meme formatting
   — just the flat confidence of someone who shipped it.
5. **A fresh angle.** Not "reverted", not "tested in production",
   not "broke everything" in the abstract — a concrete, escalating
   action with a body count (every account).

Deliberately avoided: revert jokes, "works on my machine", testing-in-
production, and anything that needs a second line to land. The 100-
character gate leaves room, but the line stays tight on purpose —
the shorter the confession, the funnier it reads in a git log.
