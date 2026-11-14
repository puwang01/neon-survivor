# Neon Survivor

2.5D arena survivor built with **Godot 4.7** (Compatibility renderer, Web export).

**Play:** https://puwang01.github.io/neon-survivor/

## Controls

| Action | Desktop | Mobile |
| --- | --- | --- |
| Move | `WASD` / arrow keys | drag left half of the screen |
| Dash | `Space` | tap the lightning button (bottom right) |
| Fire | automatic | automatic |
| Level-up choice | `1` / `2` / `3` or click | tap a card |
| Reroll | `R` | tap REROLL |
| Back to title (game over) | `Esc` | — |

## What's in it

- **2.5D** gameplay on the XZ plane with a tilted narrow-FOV camera, code-built meshes (lofted hulls, extruded wings) merged per material.
- **Weapons:** blaster, scatter, laser lance, orbital blades (+ weapon-specific upgrade cards).
- **Progression:** 19 upgrade entries with wave-gated tiers, stack levels, rarity, 4 synergies (DEADEYE / JUGGERNAUT / OVERMIND / SWARM), rerolls.
- **Combat feel:** combo multiplier with temporary buffs, crits with floating damage numbers, hit-stop, screen shake, hurt-direction edge arcs.
- **Bosses** every 5 waves with 3 HP-gated phases (invulnerability window, faster rings, minion summons) and a guaranteed EPIC reward.
- **Elites**, daily challenge with 4 rotating rule sets, ascension difficulty tiers unlocked by best score.
- **Meta:** credits, permanent upgrades, leaderboard, run recap with build summary, share card export.
- **PWA:** installable, offline-capable after the first load (service worker precaches the engine).

Single-threaded export — no cross-origin isolation headers required, so it runs on plain GitHub Pages.
