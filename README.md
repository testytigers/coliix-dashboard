# Coliix Backoffice Dashboard

Rebuilt using the **UX Design System MCP** (`@ux/mcp-design-system`).

## What this is

A complete Coliix backoffice parcel management dashboard — originally built with AG Grid and Next.js. This version uses the UX Design System's token-based components (`DashboardTemplate`, `Sidebar`, `Header`, `StatsRow`, `PageHeader`) for clean, consistent styling.

## Files

- `ColiixDashboard.tsx` — Main dashboard page component
  - Uses `@ux/react` DashboardTemplate
  - AppShell with Header (brand + user menu) and Sidebar (6 sections, 32 items)
  - 4 KPI stat cards: Total colis, Nouveau colis, Colis ramassage, Colis livrés
  - French language throughout (matching original)

## Brand (from @ux/react)

| Property | Value |
|---|---|
| Brand Color | `#9333ea` (purple) |
| Headings Font | Roboto Mono |
| Body Font | Open Sans |
| Default Radius | 8px |
| Density | 16px base, 4px grid |

## Components used

- **DashboardTemplate** — App-shell with PageHeader, StatsRow, content slot
- **AppShell** — Top-level frame (header + sidebar + main)
- **Header** — Brand + nav + user menu
- **Sidebar** — Grouped left-rail nav with icons
- **StatsRow** — 4-column KPI cards

## How to use

```bash
# Requires: @ux/react, lucide-react, next.js, tailwind
# This file goes in: app/coliix-dashboard/page.tsx
# The @ux/react package must be installed:
npm install @ux/react lucide-react
```

## Generated with

```bash
# MCP call to compose_page template=dashboard
# Source: ~/Desktop/ux-design-system-snapshot.zip
# MCP path: ~/MCP/
```
