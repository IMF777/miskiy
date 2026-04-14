# Miskiy
# 🕌 Malé Mosque Directory - Frontend

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A beautiful, responsive frontend for the official Islamic Ministry of Maldives Mosque Directory**

[Live Demo](https://yourusername.github.io/male-mosque-directory) • [Backend Repository](https://github.com/yourusername/male-mosque-directory-backend) • [API Documentation](https://your-api.fly.dev/api)

</div>

---

## 📖 Overview

The Malé Mosque Directory frontend is a vanilla JavaScript application built with Tailwind CSS and Leaflet maps. It provides an intuitive interface for discovering, searching, and exploring mosques across all atolls of the Maldives. The application is fully static and can be hosted on any static hosting service like GitHub Pages, Netlify, or Vercel.

### ✨ Features

- **🏠 Home Page** - Hero section with prominent search, interactive map preview, and feature carousel
- **📋 Directory Page** - Browse all mosques with advanced filtering and sorting capabilities
- **🗺️ Interactive Map** - Full-screen Leaflet map with custom markers, clustering, and smooth animations
- **📚 Catalogue Page** - Explorer-style browsing by atoll with folder navigation
- **📖 API Documentation** - Clean documentation for developers wanting to use the API
- **ℹ️ About Page** - Project information and contact details
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **⚡ Fast & Lightweight** - No build tools, no frameworks, just vanilla JavaScript
- **💾 Offline Support** - Caches data locally with graceful fallback
- **🎨 Beautiful UI** - Islamic green theme with gold accents and smooth micro-interactions

---

## 🎯 Pages & Features

### Home Page (`/`)

The landing page features a prominent search bar that expands to reveal advanced filters. Below, a split view shows an interactive map on the left and an auto-rotating feature carousel on the right.

**Key Features:**
- Expandable advanced search filters
- Real-time mosque count display
- Quick actions to view in directory or on map
- Loading skeletons for better UX

### Directory Page (`/directory.html`)

A comprehensive list of all mosques with powerful filtering and sorting options.

**Key Features:**
- Grid and list view toggle
- Sort by name, island, atoll, or capacity
- Filter by name, atoll, island, Friday prayer, ladies' section
- Active filter chips with quick removal
- Filter state persistence across sessions
- Mosque detail modal with full information

### Map Page (`/map.html`)

A full-screen interactive map with custom mosque markers and smooth animations.

**Key Features:**
- Custom green-themed tile layer
- Beautiful mosque marker icons
- Marker clustering for performance
- Highlighted markers when selected
- Search with autocomplete suggestions
- Bottom sheet panel for mosque details (mobile)
- Fly-to animations with easing
- Geolocation support
- Map position persistence

### Catalogue Page (`/catalogue.html`)

Browse mosques organized by atoll in a file-explorer style interface.

**Key Features:**
- Left sidebar with atoll list and mosque counts
- Right content area with atoll details
- Static map placeholder for each atoll
- Scrollable list of mosques per atoll
- Mobile-optimized dropdown selector

### API Page (`/api.html`)

Clean documentation for developers who want to integrate with the backend API.

**Key Features:**
- Base URL display with copy button
- Endpoint documentation with method badges
- Code examples with syntax highlighting
- Sample response JSON
- Rate limit information

### About Page (`/about.html`)

Project information and credits.

**Key Features:**
- Compiled by and developed by information
- Contact details
- GitHub repository link
- Last updated timestamp

---

## 🚀 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure | - |
| **CSS3** | Styling | - |
| **JavaScript (ES6+)** | Interactivity | - |
| **Tailwind CSS** | Utility-first CSS framework | 3.x (CDN) |
| **Leaflet** | Interactive maps | 1.9.4 |
| **Leaflet.markercluster** | Marker clustering | 1.5.3 |
| **Heroicons** | Icons | - |

---

## 📦 Installation

### Prerequisites

- Any modern web browser
- A static web server (optional, for local development)

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/male-mosque-directory-frontend.git
cd male-mosque-directory-frontend
