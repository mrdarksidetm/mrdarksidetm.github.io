# Version & Changelog — MrDarksideTM GitHub Pages Portfolio Hub

The absolute source of truth for the project's evolution and changelog history.
Strict Append Pattern: All updates are permanently appended to the bottom.

---

## Libraries & Tools
- HTML5 / CSS3 (Material 3 Expressive Design System)
- Typography: DM Sans & JetBrains Mono
- GitHub REST API (Dynamic Repository & Ecosystem Auto-Sync)
- Vite / React / TypeScript (Source Foundation)

---

## Log Entries

### [2026-09-20 11:05:00 IST] - Master Hub Overhaul to Vector Drawable Design Language & Live Auto-Sync
- **Author**: mrdarksidetm
- **Status**: Completed complete redesign and deployment of the master portfolio hub.
- **Architectural & Design Enhancements**:
  - Transitioned the entire master GitHub Pages site (`mrdarksidetm.github.io`) to the **Vector Drawable** dark Material 3 Expressive design language.
  - Implemented standard color tokens: `--vd-color-bg: #121212`, `--vd-color-surface: #1e1e1e`, `--vd-color-primary: #269bff`, `--vd-color-stroke: rgba(255, 255, 255, 0.08)`.
  - Implemented dual-font typography with Google Fonts `DM Sans` for headlines/body and `JetBrains Mono` for tags, badges, and terminal snippets.
  - Built comprehensive featured showcase cards for all flagship products:
    - **VectorDrawable to SVG** (Next.js web utility)
    - **Wallet (Native Jetpack Compose)** (Android, Room SQLite, 8 Financial Hubs, Canvas Hero)
    - **Wallet-Flutter** (Flutter, Isar DB, Riverpod)
    - **Wasm** (WhatsApp & Instagram chat archive manager, in-app audio player)
    - **Battery Mode Checker (ABUC)** (Doze auditor, Shizuku rootless privilege bridge)
    - **WinForge** (Windows 11 Recall purge & gaming optimization toolkit)
  - Built real-time **Dynamic Live GitHub Ecosystem** section:
    - Automatically fetches all public repositories via GitHub REST API (`https://api.github.com/users/mrdarksidetm/repos`).
    - Dynamically renders any newly created or updated repositories with star counts, language tags, and direct links without requiring manual site re-deployments.
    - Added LocalStorage caching with background re-fetch to protect against GitHub API rate limits.
  - Added interactive segmented category filter buttons (`All Products`, `Native Android`, `Flutter`, `Web & Converters`, `System Toolkits`) and real-time search input.
  - Added 1-tap clipboard copy terminal snippet for `npx vector-drawable-svg` with animated checkmark feedback.
  - Redesigned `about.html` with matching Vector Drawable aesthetic and developer specs.
- **Files Created / Modified**:
  - `index.html`
  - `about.html`
  - `public/wasm-logo.png`
  - `public/battery-logo.svg`
  - `public/vectordrawable-logo.png`
  - `Version.md`
- **Verification**: Verified syntax and local file integrity.

### [2026-09-20 12:55:00 IST] - Standardized SVG Brand Asset Matrix & GitHub Identity Integration
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Overhauled `README.md` with complete product matrix, design architecture tokens, and automated GitHub REST API auto-sync documentation.
  - Standardized crisp vector SVG logos across all flagship showcase cards (`battery-logo.svg`, `winforge-logo.svg`, `wallet-logo.svg`, `wallet-flutter-logo.svg`, `wasm-logo.svg`).
  - Calibrated SVG viewBoxes and contrast ratios to ensure uniform visual density and dark-theme legibility across cards.
  - Integrated official GitHub SVG logos beside all GitHub text occurrences across navbar, product cards, dynamic live repository listings, profile links, and footer.
- **Files Created / Modified**:
  - `README.md`
  - `index.html`
  - `about.html`
  - `public/battery-logo.svg`
  - `public/winforge-logo.svg`
  - `public/wallet-logo.svg`
  - `public/wallet-flutter-logo.svg`
  - `public/wasm-logo.svg`
  - `Version.md`
- **Verification**: Verified syntax and local file integrity.

### [2026-09-20 13:25:00 IST] - Streamline Live Ecosystem Tiles & Terminal Quick-Start Retirement
- **Author**: mrdarksidetm
- **Status**: Completed & Deployed
- **Architectural & Design Enhancements**:
  - Removed the standalone Developer Terminal Quick-Start command card (`vd-cli-card`) and associated clipboard copy script.
  - Redesigned the **Live GitHub Ecosystem** section with compact, streamlined cards (`.vd-eco-card`, `.vd-ecosystem-grid`):
    - Replaced the large flagship product grid with a dense auto-filling responsive grid (`minmax(260px, 1fr)`).
    - Reduced padding, typography scale, and iconography to compact squircle tiles.
    - Removed the secondary "View Project" button from dynamic cards, standardizing on a clean, single-action GitHub repository button spanning full width with official SVG GitHub branding.
    - Updated dynamic card search filter queries to target `.vd-eco-card` elements seamlessly.
- **Files Created / Modified**:
  - `index.html`
  - `Version.md`
- **Verification**: Verified syntax, responsive layout, search filter bindings, and local file integrity.
