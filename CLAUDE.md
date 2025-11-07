# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Shrewd Nuxt** is a minimal, opinionated Nuxt 4 starter that exclusively uses pnpm as the package manager. This project prioritizes simplicity, performance, and developer experience.

## Package Management

**CRITICAL**: Always use `pnpm` - never suggest npm, yarn, or bun alternatives.

```bash
pnpm add <package>          # Install runtime dependency
pnpm add -D <package>       # Install dev dependency
pnpm remove <package>       # Remove dependency
pnpm <script-name>          # Run script (e.g., pnpm dev)
```

## Common Commands

### Development
```bash
pnpm dev              # Start dev server on http://localhost:3000
pnpm build            # Create optimized production build
pnpm preview          # Preview production build locally
pnpm generate         # Generate static site
```

### Code Quality
```bash
pnpm lint             # Run ESLint
pnpm lint:fix         # Run ESLint with auto-fix
pnpm format           # Format code with Prettier
pnpm format:check     # Check formatting without changes
pnpm type-check       # Run TypeScript type checking
```

## Architecture

### Directory Structure
- `app/` - Main application directory (Nuxt 4 convention)
  - `app.vue` - Root application component
  - `pages/` - File-based routing (auto-imported)
  - `components/` - Vue components (auto-imported)
  - `layouts/` - Layout components
  - `composables/` - Composable functions (auto-imported)
- `services/` - Business logic and data providers (abstraction layer)
- `types/` - TypeScript type definitions
- `i18n/locales/` - Translation JSON files
- `public/` - Static assets
- `server/` - Server-side code

### Key Patterns

#### Internationalization (i18n)
The project uses a data provider abstraction pattern for locale management:

1. **Type definitions**: `types/locale.ts` defines core interfaces (`LocaleCode`, `LocaleConfig`, `TranslationContent`, `LocaleDataProvider`)
2. **Data provider**: `services/locale-data-provider.ts` implements the `LocaleDataProvider` interface, abstracting translation data access
3. **Composable**: `app/composables/useLocaleData.ts` provides components with methods to access locale data through the provider

This pattern allows switching between JSON files, APIs, or databases without changing component code.

**i18n Configuration**:
- Strategy: `prefix` (URLs prefixed with locale code)
- Default locale: `en`
- Supported locales: English (`en`), Turkish (`tr`)
- Translation files: `i18n/locales/*.json`

#### Component Patterns
- Use `<script setup lang="ts">` with TypeScript
- Prefer Composition API over Options API
- Leverage Nuxt auto-imports for composables and utilities
- Keep components focused and single-purpose

#### Service Layer
When adding business logic that fetches or transforms data:
1. Define types in `types/`
2. Create provider/service in `services/` with clear interfaces
3. Wrap in a composable in `app/composables/` for component usage

### Configuration Files
- `nuxt.config.ts` - Nuxt configuration (modules, i18n, vite, hooks)
- `app.config.ts` - Runtime app configuration (Nuxt UI theme, icons)
- `i18n.config.ts` - i18n runtime configuration
- `eslint.config.js` - ESLint flat config with Nuxt preset
- `tsconfig.json` - TypeScript configuration

### Installed Modules
- `@nuxt/ui` (v4.1.0) - UI component library with Tailwind CSS v4
- `@nuxtjs/i18n` (v10.2.0) - Internationalization module
- `@nuxt/devtools` - Development tools
- `@nuxt/eslint-config` - Official ESLint configuration

## Development Guidelines

### TypeScript
- Use TypeScript for all new files
- Leverage Nuxt's built-in TypeScript support
- Define clear interfaces for data structures
- Use explicit typing when it improves code clarity

### Code Style
- Keep code clean and minimal
- Write self-documenting code with clear names
- Only add comments for complex business logic or non-obvious decisions
- Follow Nuxt 4 conventions and best practices

### Vue Components
- Use PascalCase for component file names
- Components in `app/components/` are auto-imported globally
- Use `<script setup>` syntax exclusively

### Routing
- File-based routing in `app/pages/`
- Routes are auto-generated from file structure
- i18n prefix strategy adds locale to all routes (e.g., `/en/`, `/tr/`)

### Adding Dependencies
1. Verify Nuxt 4 compatibility before adding
2. Prefer official `@nuxt/` modules when available
3. Choose well-maintained packages with TypeScript support
4. Use Nuxt UI components when building UI elements

### When Adding New Features

**New Page**:
1. Create `.vue` file in `app/pages/`
2. Use `<script setup lang="ts">`
3. Follow Nuxt file-based routing conventions
4. Add translations to `i18n/locales/*.json` if needed

**New Component**:
1. Create `.vue` file in `app/components/` with PascalCase name
2. Component is auto-imported and available globally

**New Composable**:
1. Create `.ts` file in `app/composables/` starting with `use*`
2. Export composable function
3. Auto-imported throughout the app

**New Data Provider/Service**:
1. Define types in `types/`
2. Implement provider in `services/`
3. Create composable wrapper in `app/composables/`

## Troubleshooting

- Check TypeScript errors first if build fails
- Ensure dependencies are Nuxt 4 compatible
- Update lockfile with `pnpm install` if dependencies are mismatched
- Use Nuxt DevTools for runtime debugging
- Check build hooks output for i18n configuration issues
