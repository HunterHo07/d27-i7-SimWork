# SimWork Development Guide

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.2+ (App Router)
- **Styling**: Tailwind CSS with custom components
- **Animation Libraries**:
  - **GSAP**: Primary animation library for HomePage transitions and UI interactions
  - **Three.js**: 3D environment for the Demo page simulation
  - **Lottie**: Loading animations and micro-interactions
  - **Framer Motion**: Component transitions and UI animations

### State Management
- **Local Storage**: For persisting user progress and settings
- **React Context**: For global state management
- **Zustand**: For complex state management in the simulation

### Assets
- **Kenney Assets**: Pre-made characters, objects, and environment elements for the simulation
- **Custom SVG**: For UI elements and icons
- **Local Images**: All assets stored locally for performance and reliability

## Animation & Visual Effects Strategy

### HomePage
- **GSAP**: Used for:
  - Hero section parallax and scroll-triggered animations
  - Feature highlight transitions
  - Testimonial carousel animations
  - Value proposition reveal animations
  - Pricing plan hover effects

- **Lottie**: Used for:
  - Loading indicators
  - Success/error state animations
  - Micro-interactions on buttons and form elements

- **Framer Motion**: Used for:
  - Navbar and menu transitions
  - Page transitions between sections
  - Component mount/unmount animations
  - Hover state animations

### Demo Page
- **Three.js**: Used for:
  - 3D office environment rendering
  - Character movement and interaction
  - Camera controls and perspective
  - Environmental effects (lighting, shadows)

- **GSAP**: Used for:
  - UI overlay animations
  - Task completion celebrations
  - Progress indicators
  - Tutorial sequences

- **Kenney Assets**: Used for:
  - Character models and animations
  - Office furniture and equipment
  - Environmental props and decorations
  - UI elements and icons

## Project Structure

```
simwork/
├── src/
│   ├── app/
│   │   ├── page.js                 # HomePage
│   │   ├── demo/
│   │   │   └── page.js             # Demo Page
│   │   ├── pitch-deck/
│   │   │   └── page.js             # Pitch Deck Page
│   │   ├── why-us/
│   │   │   └── page.js             # Why Us Page
│   │   ├── roadmap/
│   │   │   └── page.js             # Roadmap Page
│   │   └── layout.js               # Root layout
│   ├── components/
│   │   ├── common/                 # Shared components
│   │   ├── home/                   # HomePage-specific components
│   │   └── demo/                   # Demo-specific components
│   ├── lib/
│   │   ├── animations.js           # Animation utilities
│   │   ├── three-scene.js          # Three.js setup and utilities
│   │   └── storage.js              # LocalStorage utilities
│   ├── hooks/
│   │   └── useSimulation.js        # Custom hooks for simulation
│   ├── data/
│   │   ├── tasks.json              # Simulation tasks data
│   │   ├── testimonials.json       # Testimonial data
│   │   └── pricing.json            # Pricing data
│   └── assets/
│       ├── images/                 # Static images
│       ├── models/                 # 3D models
│       ├── lottie/                 # Lottie animations
│       └── kenney/                 # Kenney assets
└── public/
    ├── favicon.ico
    └── logo.svg
```

## Implementation Roadmap

### Phase 1: Setup & Core Structure
1. Initialize Next.js project with Tailwind CSS
2. Set up project structure and routing
3. Create basic layouts and navigation
4. Implement responsive design foundation

### Phase 2: HomePage Development
1. Hero section with GSAP animations
2. Problem/Solution section
3. Feature highlights with interactive elements
4. Testimonials carousel
5. Pricing section
6. Call-to-action components

### Phase 3: Demo Page Development
1. Three.js environment setup
2. Character controls and interaction
3. Task system implementation
4. Progress tracking and feedback
5. UI overlays and instructions
6. Performance optimization

### Phase 4: Polish & Optimization
1. Animation refinement
2. Responsive testing and fixes
3. Performance optimization
4. Cross-browser compatibility
5. Accessibility improvements

## Visual Effects Implementation Guide

### Glassmorphism
```css
/* Tailwind CSS example */
.glassmorphic {
  @apply bg-white/10 backdrop-blur-md border border-white/20 shadow-lg;
}
```

### Aurora Lights
- Implement using GSAP and SVG filters
- Create gradient overlays with animation
- Use `mix-blend-mode` for color interactions

### Particle Field
- Implement using Three.js particles
- Create interactive particle system
- Respond to mouse movement and scroll

### Liquid Mesh
- Use Three.js ShaderMaterial
- Implement vertex displacement with noise
- Animate using time-based parameters

### Parallax Scroll
- Implement using GSAP ScrollTrigger
- Create multi-layer depth effects
- Tie animation progress to scroll position

## Performance Considerations

1. **Asset Optimization**:
   - Compress images using WebP format
   - Use SVG for icons and simple illustrations
   - Implement lazy loading for off-screen content

2. **Code Splitting**:
   - Leverage Next.js automatic code splitting
   - Dynamically import heavy components
   - Separate Three.js code from main bundle

3. **Animation Performance**:
   - Use `will-change` for elements with complex animations
   - Prefer GPU-accelerated properties (transform, opacity)
   - Debounce scroll and resize event handlers

4. **Three.js Optimization**:
   - Implement level-of-detail (LOD) for complex models
   - Use instance mesh for repeated objects
   - Implement frustum culling for off-screen objects
   - Optimize lighting and shadow calculations

## Browser Compatibility

Ensure support for:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

Mobile support:
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Accessibility Guidelines

1. Maintain proper contrast ratios (minimum 4.5:1)
2. Provide keyboard navigation for all interactive elements
3. Include proper ARIA labels for custom components
4. Ensure animations can be disabled (prefers-reduced-motion)
5. Maintain semantic HTML structure
