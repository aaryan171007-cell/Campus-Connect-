# CampusConnect – Campus News, Notices & Events Dashboard

A modern, responsive campus information dashboard built with **React + Vite**, featuring a rich UI with dark mode and full search & filter functionality.

**Live Production URL** : https://campus-connect-teal-nine.vercel.app/

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js v18+ installed

### Installation

# Navigate to the project directory
```bash
cd campus-dashboard
```

# Install dependencies
```bash
npm install
```

# Start the development server
```bash
npm run dev
```

The app will be available at **http://localhost:5173**

## What I Built

**CampusConnect** is a fully-featured campus information portal where students can browse and search notices and events. Here's what's included:

### Core Features
| Feature 
|---|
| Notice feed (title, category, date) 
| Event feed (title, venue, date) 
| Detail view for notices & events 
| Keyword search 
| Category filtering 
| Responsive layout (mobile + desktop)
| Loading states 
| Error states with retry 

### Bonus or Additional Features
| Feature 
|---|
| Added a campus news section too along with notices and events
| Both search AND category filter work simultaneously 
| URL-based routing (`/notices/:id`, `/events/:id`) 
| Dark mode (persisted in `localStorage`) 
| Pagination on all feeds 
| Framer Motion animations (page transitions, card entrances) 
| Deployed the website using Vercel

---

## Tech Stack

- **React 18** + **Vite** – fast build and HMR
- **React Router v6** – client-side routing with URL params
- **Framer Motion** – entrance animations, `AnimatePresence` transitions
- **Vanilla CSS** – custom design system with CSS variables for dark/light theming

---

## 📁 Project Structure

```
src/
├── data/
│   ├── notices.js         # 4 recent campus notices
│   └── events.js          # 3 campus events
├── hooks/
│   ├── useTheme.js        # Dark/light mode with localStorage
│   └── usePagination.js   # Generic pagination hook
├── components/
│   ├── Navbar.jsx         # Responsive nav with mobile menu
│   ├── NoticeCard.jsx     
│   ├── EventCard.jsx      
│   ├── LoadingSpinner.jsx # Loading indicator
│   ├── ErrorMessage.jsx   # Error state with retry
│   └── Pagination.jsx     
├── pages/
│   ├── Home.jsx           
│   ├── NoticesFeed.jsx    # Full notices list with search/filter/pagination
│   ├── EventsFeed.jsx     # Full events list with search/filter/pagination
│   ├── NoticeDetail.jsx   # Individual notice page
│   └── EventDetail.jsx    # Individual event page
└── utils/
    └── helpers.js         # Category colors, date formatting
```

---

## 🧩 Challenges & Solutions

### 1. Responsive Navigation
**Challenge**: Fitting the full navbar on small screens was a challenge
**Solution**: In mobile view I have changed the navbar with hidden nav links which pops up when the hamburger icon present on the top right corner of navbar is activated

### 2. Responsive layout of the events timeline
**Challenge**: Maintaining the same style and design of the events timeline was difficult and was crashing in different viewports  
**Solution**: I have changed the mobile view design into a vertical cards column displaying the evnts card one after the another while the desktop design remains the same

---
