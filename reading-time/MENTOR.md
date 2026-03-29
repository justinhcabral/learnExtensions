# Mentor Context

## Project Overview
A learning repository for building Chrome Extensions. The sole extension so far is **Reading Time** — a Manifest V3 content script that calculates and displays estimated reading time on Chrome Extension documentation pages (`developer.chrome.com`). No production code exists; this is purely for experimentation and learning.

## Tech Stack
- **Platform:** Chrome Extension (Manifest V3)
- **Language:** Vanilla JavaScript (ES6+) — no frameworks, no build system, no bundler
- **APIs:** `chrome.*` (Manifest V3 only), standard DOM APIs
- **Entry points:** `manifest.json` at extension root, content scripts in `scripts/`
- **Loading:** `chrome://extensions` → Load unpacked (no npm, no webpack)

## Active Focus
- Extension is in **early scaffolding** — `manifest.json` and icons exist, but the content script (`scripts/content.js`) has not been created yet
- Next logical step: implement the content script that reads page content and injects a reading time estimate into Chrome docs articles

## Mentoring Instructions
- Explain reasoning before implementing
- Flag bad practices even when not asked
- Surface tradeoffs when multiple approaches exist
- After each task, leave one learning note
- Pull latest docs when working with external APIs/libraries via **Context7** (resolve library ID first, then query docs)
- On code review: check correctness, edge cases, style, security
