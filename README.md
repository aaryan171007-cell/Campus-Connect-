# CampusHub – Campus Events & Notices Dashboard

A modern, responsive campus information dashboard built with **React + Vite**, featuring a rich UI with dark mode, animations, and full search & filter functionality.

# Live Production URL : 

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js v18+ installed

### Installation

```bash
# Navigate to the project directory
cd campus-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🏗️ What I Built

**CampusHub** is a fully-featured campus information portal where students can browse and search notices and events. Here's what's included:

### Core Features
| Feature | Status |
|---|---|
| Notice feed (title, category, date) | ✅ |
| Event feed (title, venue, date) | ✅ |
| Detail view for notices & events | ✅ |
| Keyword search | ✅ |
| Category filtering | ✅ |
| Responsive layout (mobile + desktop) | ✅ |
| Loading states | ✅ |
| Error states with retry | ✅ |

### Bonus Features
| Bonus | Status |
|---|---|
| Both search AND category filter work simultaneously | ✅ |
| URL-based routing (`/notices/:id`, `/events/:id`) | ✅ |
| Dark mode (persisted in `localStorage`) | ✅ |
| Pagination on all feeds | ✅ |
| Framer Motion animations (page transitions, card entrances) | ✅ |
| Related notices/events on detail pages | ✅ |
| 404 Not Found page | ✅ |

---

## 🎨 Tech Stack

- **React 18** + **Vite** – fast build and HMR
- **React Router v6** – client-side routing with URL params
- **Framer Motion** – entrance animations, `AnimatePresence` transitions
- **Vanilla CSS** – custom design system with CSS variables for dark/light theming

---

## 📁 Project Structure

```
src/
├── data/
│   ├── notices.js         # 12 rich mock notices
│   └── events.js          # 12 rich mock events
├── hooks/
│   ├── useTheme.js        # Dark/light mode with localStorage
│   └── usePagination.js   # Generic pagination hook
├── components/
│   ├── Navbar.jsx         # Responsive nav with mobile menu
│   ├── NoticeCard.jsx     # Notice card with animation
│   ├── EventCard.jsx      # Event card with colored banner
│   ├── LoadingSpinner.jsx # Loading indicator
│   ├── ErrorMessage.jsx   # Error state with retry
│   └── Pagination.jsx     # Paginator with ellipsis
├── pages/
│   ├── Home.jsx           # Hero, stats, featured events, tabbed feed
│   ├── NoticesFeed.jsx    # Full notices list with search/filter/pagination
│   ├── EventsFeed.jsx     # Full events list with search/filter/pagination
│   ├── NoticeDetail.jsx   # Individual notice page
│   └── EventDetail.jsx    # Individual event page
└── utils/
    └── helpers.js         # Category colors, date formatting
```

---

## 🧩 Challenges & Solutions

### 1. Dark Mode with CSS Custom Properties
**Challenge**: Implementing a clean dark mode that persists across sessions without a CSS-in-JS library.  
**Solution**: Used CSS custom properties (`--bg-primary`, `--text-primary`, etc.) and toggled a `data-theme="dark"` attribute on `<html>`. The preference is saved to `localStorage` and read on init, with `prefers-color-scheme` as the fallback.

### 2. Combined Search + Filter
**Challenge**: Making keyword search and category filter work together in real-time without performance issues.  
**Solution**: Used `useMemo` to compute the filtered list only when `search` or `category` change. Pagination resets to page 1 whenever filters change via a `useEffect`.

### 3. Simulated Loading/Error States
**Challenge**: Demonstrating loading and error states with static mock data.  
**Solution**: Wrapped data access in a `setTimeout` inside `useEffect` to simulate a network fetch with a 700ms delay. The error state can be triggered by uncommenting a single line in the feed pages.

### 4. Responsive Navigation
**Challenge**: Fitting the full nav bar on small screens.  
**Solution**: The desktop nav links are hidden below 768px and replaced with a hamburger menu that opens a slide-down mobile nav panel.

---

## 📸 Pages

| Route | Description |
|---|---|
| `/` | Home – hero, stats, featured events, tabbed feed |
| `/notices` | All notices with search + filter + pagination |
| `/notices/:id` | Individual notice detail with related notices |
| `/events` | All events with search + filter + pagination |
| `/events/:id` | Individual event detail with register button |

---