<div align="center">
  <img src="public/logo.svg" alt="Atelier Forge Logo" width="84" height="84" />
  <h1>Atelier — Software Forge & Ecosystem Hub</h1>
  <p><b>The centralized showcase and dynamic portfolio for @mrdarksidetm's software ecosystem.</b></p>
  <p>
    <a href="https://mrdarksidetm.github.io/"><strong>🚀 Visit Live Forge on GitHub Pages</strong></a>
  </p>
  <p>
    <a href="https://github.com/mrdarksidetm/mrdarksidetm.github.io/actions"><img src="https://github.com/mrdarksidetm/mrdarksidetm.github.io/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Pages Deployment" /></a>
    <img src="https://img.shields.io/badge/Design-Material_3_Expressive-0061A4?style=flat-square" alt="Material 3 Expressive" />
    <img src="https://img.shields.io/badge/Style-Vector_Drawable_Theme-269bff?style=flat-square" alt="Vector Drawable Theme" />
    <img src="https://img.shields.io/badge/Auto--Sync-GitHub_REST_API-success?style=flat-square" alt="GitHub API Auto-Sync" />
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" /></a>
  </p>
</div>

---

## 🌟 Overview

**Atelier** is the official central portal and software forge for all applications, utilities, and system toolkits engineered by **Abhijeet Yadav** ([@mrdarksidetm](https://github.com/mrdarksidetm)).

Built from the ground up to follow the sleek **Vector Drawable** dark Material 3 Expressive design language (`#121212` canvas, `#1e1e1e` surface containers, `#269bff` electric blue accents, and `DM Sans` + `JetBrains Mono` typography), the site features:
1. **Curated Showcase**: Detailed interactive presentation of all flagship mobile, web, and desktop products.
2. **Live GitHub Ecosystem Auto-Sync**: Queries the GitHub REST API (`https://api.github.com/users/mrdarksidetm/repos`) directly at runtime to automatically discover and list any new repositories created or updated by `@mrdarksidetm` without requiring manual code redeployments.
3. **Local-First Speed**: Integrated LocalStorage client caching ensures instant page loads with zero layout shifts or API rate limit bottlenecks.

---

## 🚀 Featured Software Suite

| Project | Platform | Design Language & Stack | Live Experience |
| :--- | :--- | :--- | :--- |
| **[VectorDrawable to SVG](https://github.com/mrdarksidetm/vector-drawable-nextjs)** | Web Utility | Next.js 13, React 18, CodeMirror 6 | [Live Web App](https://mrdarksidetm.github.io/vector-drawable-nextjs/) |
| **[Wallet (Native Compose)](https://github.com/mrdarksidetm/Wallet)** | Native Android | Jetpack Compose (BOM 2024.12.01), Room SQLite, Canvas Hero | [Explore Wallet](https://mrdarksidetm.github.io/Wallet/) |
| **[Wallet-Flutter](https://github.com/mrdarksidetm/Wallet-Flutter)** | Cross-Platform | Flutter 3.x, Isar Embedded NoSQL, Riverpod | [Explore Showcase](https://mrdarksidetm.github.io/Wallet-Flutter/) |
| **[Wasm](https://github.com/mrdarksidetm/wasm)** | Native Android | WhatsApp & Instagram Parsers, AudioPlayer, SAF | [Explore Wasm](https://mrdarksidetm.github.io/wasm/) |
| **[Battery Mode Checker](https://github.com/mrdarksidetm/Android-Battery-Unrestricted-Checker)** | Native Android | Shizuku Privileged Binder IPC, Compose Canvas | [Explore ABUC](https://mrdarksidetm.github.io/Android-Battery-Unrestricted-Checker/) |
| **[WinForge](https://github.com/mrdarksidetm/WinForge)** | Windows 11 | PowerShell, AI/Recall Purge, Game Mode, Winget | [Launch WinForge](https://mrdarksidetm.github.io/WinForge/) |
| **[June](https://github.com/mrdarksidetm/June)** | Native Android | Kotlin, Jetpack Compose, Multimedia Journaling | [GitHub Repository](https://github.com/mrdarksidetm/June) |

---

## ⚡ Dynamic Live GitHub Ecosystem

The master hub automatically syncs with GitHub's REST API at runtime:
- **Zero-Code Updates**: Whenever a new repository is created under the `@mrdarksidetm` account, it is dynamically detected, categorized, and rendered as a Vector-Drawable styled card.
- **Metadata Extraction**: Dynamically parses repository name, description, primary language badge, star count, updated date, and live deployment links.
- **Segmented Filter Controls**: Filter seamlessly between `All Products`, `Native Android`, `Flutter`, `Web & Converters`, and `System Toolkits` with live search debouncing.

---

## 🛠️ Design Tokens & Architecture

- **Canvas Background**: `#121212`
- **Surface Containers**: `#1e1e1e` (elevated: `#262626`)
- **Primary Accent**: `#269bff` (container: `rgba(38, 155, 255, 0.12)`)
- **Hairline Borders**: `rgba(255, 255, 255, 0.08)`
- **Typography**: Google Fonts [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Headlines & body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code, tags, indicators)
- **Border Radii**: Cards (`24px`), Badges & Buttons (`9999px` pills)
- **Deployment**: Automatic GitHub Pages hosting from `main` root `/`

---

## 👤 Developer & Philosophy

Built with ❤️ by **Abhijeet Yadav** ([@mrdarksidetm](https://github.com/mrdarksidetm)).

All software in this forge follows the **Local-First, Privacy-First Mandate**:
- Zero telemetry and zero cloud dependencies.
- Native performance with 60–120 FPS hardware acceleration.
- Bounded scope with uncompromising single-purpose utility precision.

---

## 📄 License

MIT — See [LICENSE](LICENSE) for details.
