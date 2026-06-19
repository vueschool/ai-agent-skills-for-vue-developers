---
name: hello-world
description: Greet a user. Use when the user asks for a hello world skill example or when the user says "Hello".
---

## Instructions

When this skill is invoked:

1. Run `npx tsx scripts/time-of-day.ts`
2. Read the image related to the greeting from the script
3. Greet the user using the script's output and a brief description of the image.
4. Display the image

## Greeting assets

| `greeting`     | Asset                       |
| -------------- | --------------------------- |
| Good morning   | `assets/good-morning.png`   |
| Good afternoon | `assets/good-afternoon.png` |
| Good evening   | `assets/good-evening.png`   |

## Response format

Use this template:

```markdown
[Greeting from script]! 👋

It's [period] where you are ([localTime]).

[Brief description of the image]
```
