# CLAUDE.md - Dev Guidelines

## Commands
- `npm run dev`: Start dev server with Turbopack
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Code Style
- Use TypeScript strict mode with proper types
- Imports order: React/Next.js → third-party → local
- Path aliases: Use `@/*` for paths from src/
- Naming: PascalCase for components, camelCase for variables/functions
- Use Tailwind for styling with semantic class organization
- Components should use implicit returns when possible
- React props must use Readonly interfaces or type declarations
- Fonts: Geist and Geist_Mono for typography
- Prefer arrow functions for component definitions
- Use semantic HTML elements for accessibility
- Image components must include width, height, and alt attributes
- Use Next.js built-in components (Image, Link) for optimized performance

## Error Handling
- Use try/catch for async operations
- Add proper error boundaries in component tree
- Provide descriptive error messages