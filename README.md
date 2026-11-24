# Make the AI Judge Laugh: the Office Joke Open

[![Make.fun bounty](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/elpablo61/makefun-office-joke-open/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Entries](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/elpablo61/makefun-office-joke-open/entries.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/elpablo61/makefun-office-joke-open/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy for the
[Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
on make.fun. A judge model compares the jokes head to head; the funniest
single line takes the whole $2.

## The joke

> I blocked focus time on my calendar, so my boss booked over it to ask why I never have focus time.

98 characters, one line. The turn pays off in the last few words: the boss
is the reason the focus time never happens, and he wants to know why it
never happens.

## How it runs

`main.ts` (Node 22) writes exactly that one line to `/output/entry.txt` —
nothing else. It refuses to run if the line ever drifts outside the
1–200 character gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
