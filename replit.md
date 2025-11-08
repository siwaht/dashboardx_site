# Overview

AgentX is a marketing website for an AI agent services platform that showcases various AI automation solutions including chat agents, voice calling agents, AI avatars, and workflow automation. The site features interactive visualizations demonstrating RAG (Retrieval-Augmented Generation) data retrieval and multi-agent workflow orchestration.

**Migration Status:** Successfully migrated from Bolt to Replit fullstack template (November 8, 2025)

# Recent Changes

**November 8, 2025 - Bolt to Replit Migration:**
- Migrated from Bolt single-page frontend to Replit fullstack template architecture
- Set up Express.js backend server with Vite middleware for development
- Implemented API routes for form submissions (`/api/demo-requests`, `/api/consultation-requests`)
- Created Drizzle ORM schemas for PostgreSQL database readiness
- Configured fullstack development workflow with tsx and hot module replacement
- Updated all import paths and component structure for new directory layout

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Project Structure

This is a fullstack JavaScript application using the Replit template structure:

```
/client/              # Frontend React application
  /src/
    /components/      # All React components including ThemeContext
    App.tsx          # Main application component
    main.tsx         # React entry point
    index.css        # Global styles and Tailwind configuration
  index.html         # HTML template

/server/             # Backend Express server
  index.ts           # Server entry point with Express setup
  routes.ts          # API route definitions
  storage.ts         # In-memory storage implementation
  vite.ts            # Vite middleware configuration

/shared/             # Shared types and schemas
  schema.ts          # Drizzle ORM schemas and Zod validators

/supabase/           # Legacy Supabase migrations (for reference)
  /migrations/       # SQL migration files from original Bolt project
```

## Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR
- TailwindCSS for utility-first styling with custom design tokens
- Lucide React for consistent iconography

**Design Patterns:**
- Single-page application (SPA) architecture with component-based structure
- Context API for global theme management (light/dark mode) in `ThemeContext.tsx`
- Custom hooks for intersection observer-based scroll animations
- Responsive-first design approach with mobile, tablet, and desktop breakpoints

**Component Organization:**
- All components located in `client/src/components/`
- ThemeContext provider wraps the entire application
- Form submissions now use fetch API to backend instead of Supabase
- Accessibility features including ARIA labels, semantic HTML, and keyboard navigation

**Styling Strategy:**
- Custom color palette with branded gradients (blue, teal, emerald, coral, amber)
- Dark mode support with theme-specific color tokens
- Smooth transitions and animations for enhanced UX
- Custom scroll-reveal animations triggered by intersection observer

## Backend Architecture

**Server Setup:**
- Express.js v4 server handling API routes and Vite middleware
- Development: tsx watch for TypeScript execution with hot reload
- Vite middleware integration for seamless frontend development
- Server binds to `0.0.0.0:5000` for Replit webview compatibility

**API Design:**
- RESTful endpoints for form submissions
- `POST /api/demo-requests` - Handles demo request submissions
- `POST /api/consultation-requests` - Handles consultation form submissions with service interest
- Zod schema validation ensures type-safe request handling
- All responses return JSON with appropriate status codes

**Data Layer:**
- In-memory storage implementation (`MemStorage`) for development
- Storage interface (`IStorage`) designed for easy database integration
- Drizzle ORM schemas defined in `shared/schema.ts` for PostgreSQL
- Schema includes proper TypeScript types and Zod validators

**Development Workflow:**
- Run `npm run dev` to start the development server
- Express server starts with Vite middleware
- Frontend accessible at port 5000 with hot module replacement
- Backend API routes available at `/api/*`

## Data Storage Design

**Schema Architecture:**
- `demo_requests` table: name, email, company, jobTitle, status, timestamps
- `consultation_requests` table: extends demo_requests with serviceInterest field
- UUID primary keys with automatic generation
- Status tracking (default: "pending")
- Timestamp fields for createdAt/updatedAt tracking

**Validation Strategy:**
- Drizzle-zod integration for automatic schema validation
- Type-safe insert schemas with omitted system fields (id, status, timestamps)
- Shared type definitions exported for both client and server use
- Frontend forms validated against same schemas used in backend

**Current Implementation:**
- Development uses in-memory storage with crypto.randomUUID()
- PostgreSQL database available but not connected (ready for migration)
- Drizzle ORM configuration supports easy database connection setup
- Legacy Supabase migrations preserved for reference in `supabase/migrations/`

## External Dependencies

**Database:**
- PostgreSQL available via Replit environment variables
- Drizzle ORM with PostgreSQL adapter configured
- Schema definitions ready for database connection
- Migration path: Update storage.ts to use database instead of in-memory

**Build Tools:**
- Vite for bundling and development server (configured for fullstack)
- ESLint for code quality with React-specific rules
- TypeScript for type checking across client and server
- PostCSS with Autoprefixer for CSS processing
- tsx for TypeScript execution in Node.js

**Development Dependencies:**
- tsx watch for hot reload during development
- Express.js v4 for backend server
- Vite middleware for frontend development
- React hot refresh for component-level HMR

**Path Aliases:**
- `@/` - Resolves to `client/src/`
- `@shared/` - Resolves to `shared/`  
- `@assets/` - Resolves to `attached_assets/`

## Running the Application

**Development:**
```bash
npm run dev
```
Starts Express server with Vite middleware on port 5000

**Production Build:**
```bash
npm run build
npm run start
```

**Environment:**
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Workflow configured as "webview" output type
- PostgreSQL database credentials available in environment
