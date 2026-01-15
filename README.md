# The R2M Protocol Website

## Overview

This is a modern React + TypeScript application for the R2M Protocol (Restore. Reshape. Rebuild.) - a nutritional wellness program. The application has been migrated from static HTML to a dynamic React-based architecture.

## Features

- **React Components**: All dynamic elements are now React components with proper state management
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox
- **Interactive Forms**: Contact form with validation, ready for Resend service integration
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Accessibility**: Proper ARIA labels and semantic HTML

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Comparison.tsx  # Traditional vs R2M Protocol comparison
│   ├── Story.tsx       # Transformation story
│   ├── HowItWorks.tsx  # Protocol explanation
│   ├── Video.tsx       # Video showcase
│   ├── Pricing.tsx     # Pricing cards with interactive buttons
│   ├── Experts.tsx     # Expert testimonials
│   ├── ContactForm.tsx # Contact form (Resend-ready)
│   └── Footer.tsx      # Footer with disclaimer
├── types/              # TypeScript type definitions
│   └── contact.ts      # Contact form types
├── styles/             # CSS stylesheets
│   └── global.css      # Global styles
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Contact Form Integration

The contact form is prepared for Resend email service integration. See [RESEND_INTEGRATION.md](./RESEND_INTEGRATION.md) for detailed setup instructions.

### Form Features

- Client-side validation
- TypeScript type safety
- Loading states
- Success/error feedback
- Accessible form controls

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with animations and transitions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a private project. For questions or issues, contact the repository owner.

## License

All rights reserved © 2026 R2M Protocol
