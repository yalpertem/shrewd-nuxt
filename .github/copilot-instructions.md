# GitHub Copilot Instructions

This file contains custom instructions for GitHub Copilot to understand and work effectively with this project.

## Project Overview

**Shrewd Nuxt** is a minimal, opinionated Nuxt 4 starter that exclusively uses pnpm as the package manager. This project prioritizes simplicity, performance, and developer experience.

## Package Management

- **ALWAYS use pnpm** - Never suggest npm, yarn, or bun alternatives
- Install packages with `pnpm add <package>`
- Remove packages with `pnpm remove <package>`
- Run scripts with `pnpm <script-name>` (e.g., `pnpm dev`, `pnpm build`)

## Building the Project

1. **Development**: `pnpm dev` - Starts the development server on http://localhost:3000
2. **Production Build**: `pnpm build` - Creates optimized production build
3. **Preview**: `pnpm preview` - Preview the production build locally

## Testing & Validation

- Before suggesting changes, ensure they are compatible with Nuxt 4
- Test commands locally before recommending them
- Validate that all pnpm scripts work correctly after changes

## Code Style & Architecture

### Vue Components

- Use `<script setup>` syntax with TypeScript
- Prefer Composition API over Options API
- Keep components focused and single-purpose
- Leverage Nuxt's auto-imports for composables and utilities

### File Organization

- **Components**: `components/` (auto-imported)
- **Pages**: `pages/` (file-based routing)
- **Composables**: `composables/` (auto-imported)
- **Utilities**: `utils/` (auto-imported)
- **Server**: `server/` (API routes and middleware)

### TypeScript

- Use TypeScript by default for all new files
- Leverage Nuxt's built-in TypeScript support
- Prefer explicit typing when it improves code clarity

### Code Quality

- Keep code clean and minimal - avoid unnecessary comments
- Write self-documenting code with clear variable and function names
- Only add comments when explaining complex business logic or non-obvious decisions

## Dependency Management

- Prefer official `@nuxt/` modules when available
- Choose well-maintained packages with good Nuxt 4 compatibility
- Always check for TypeScript support in new dependencies
- Use Nuxt UI components when building UI elements

## Development Guidelines

- Follow Nuxt 4 conventions and best practices
- Prefer server-side rendering (SSR) unless client-side is specifically needed
- Use Nuxt's built-in features (auto-imports, file-based routing, etc.)
- Keep the project minimal and focused

## Common Tasks

### Adding a New Page

1. Create a `.vue` file in the `pages/` directory
2. Use `<script setup lang="ts">` for TypeScript support
3. Follow Nuxt's file-based routing conventions

### Adding a Component

1. Create a `.vue` file in the `components/` directory
2. Use PascalCase naming convention
3. Component will be auto-imported and available globally

### Adding Dependencies

1. Use `pnpm add <package>` for runtime dependencies
2. Use `pnpm add -D <package>` for development dependencies
3. Verify compatibility with Nuxt 4 before adding

### Configuration Changes

- Modify `nuxt.config.ts` for Nuxt-specific configuration
- Update `package.json` for scripts and dependencies
- Use `.npmrc` for pnpm-specific settings

## Troubleshooting

- If build fails, check for TypeScript errors first
- Ensure all dependencies are compatible with Nuxt 4
- Verify pnpm lockfile is up to date with `pnpm install`
- Check Nuxt dev tools for runtime issues

---

**Note**: This project is opinionated and focused. When suggesting changes, prioritize simplicity and maintain consistency with the existing architecture.
