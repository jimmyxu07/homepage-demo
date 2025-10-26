# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 personal portfolio website for Jimmy AI (许泓楷), built with React 19, TypeScript, and Tailwind CSS 4. The site showcases his expertise as an AI Actionist & Tech Innovator with sections for hero, skills, achievements, vision, and contact information.

## Development Commands

All development commands are run from the root directory:

```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Project Structure
- `app/` - Next.js 16 App Router structure
  - `page.tsx` - Main portfolio page with all sections
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles with Tailwind and custom animations
- `public/` - Static assets (profile.jpg, wechat-qr.jpg)
- `next.config.ts` - Next.js configuration (minimal setup)

### Key Technologies
- **Next.js 16** with App Router
- **React 19** with TypeScript 5
- **Tailwind CSS 4** for styling
- **Lucide React** for icons
- **Geist font family** (sans and mono variants)

### Styling System
- Uses Tailwind CSS 4 with CSS variables for theming
- Dark/light mode support via `prefers-color-scheme`
- Custom animations (fade-in, smooth scrolling)
- Gradient backgrounds and hover effects throughout

### Page Structure
The single-page application includes:
1. **Hero Section** - Profile introduction with CTA buttons
2. **Skills Section** - Three core expertise areas
3. **Achievements Section** - Key accomplishments with trophy icons
4. **Vision Section** - Mission statement with gradient background
5. **Contact Section** - WeChat QR code and social media links

### TypeScript Configuration
- Strict mode enabled
- Path aliasing: `@/*` maps to `./*`
- Next.js plugin integration for optimal developer experience

### ESLint Setup
- Uses Next.js recommended configurations (core-web-vitals, typescript)
- Custom ignore patterns for build artifacts

## Assets Required
- `public/profile.jpg` - Profile photo (400x400px recommended)
- `public/wechat-qr.jpg` - WeChat QR code (200x200px recommended)