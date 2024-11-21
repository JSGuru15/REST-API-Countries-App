# REST Countries API App

This project is a Vue 3 application built using Vite. It integrates with the [REST Countries API](https://restcountries.com/#api-endpoints-v2) to display country data, with features like search, filtering, sorting, and theming.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Deployment](#deployment)
7. [Details of Implementation](#details-of-implementation)
8. [Future Improvements](#future-improvements)

---

## Overview

The **REST Countries API App** fetches data from the [REST Countries API](https://restcountries.com/#api-endpoints-v2) and displays it in a user-friendly interface. It allows users to explore country data with the following key functionalities:

- View all countries with their flags, names, populations, regions, and capitals.
- Search for countries using an input field.
- Filter countries by region (e.g., Africa, Asia, Europe).
- Sort countries by name or population.
- View detailed information about each country, including bordering countries.
- Toggle between light and dark themes.

---

## Features

### Core Features

- **Country Listing**: Displays a list of countries with key details such as flags, names, populations, and regions.
- **Search Functionality**: Search for countries using the name, even with minor typos.
- **Filter by Region**: Filter countries based on their region.
- **Sorting**: Sort countries by name or population in ascending or descending order.
- **Country Details Page**: View more detailed information, such as currency, languages, and borders.
- **Dark Mode**: Switch between light and dark themes.

### Bonus Features

- **Lazy Loading**: Flags are lazy-loaded to improve performance.
- **URL Syncing**: Search and filter parameters are stored in the URL query string for better navigation and sharing.
- **Responsive Design**: Fully responsive layout for both mobile and desktop screens.

---

## Project Structure

The project structure is organized as follows:

```plaintext
.
├── public/                  # Static files
├── src/
│   ├── assets/              # Local assets (if needed)
│   ├── components/          # Vue components
│   │   ├── HomePage.vue     # Homepage logic and layout
│   │   ├── CountryList.vue  # Detailed country page
│   ├── types/               # Type Definitions
│   │   ├── country.ts       # Country Interface
│   ├── main.ts              # Vue app entry point
│   ├── routes.ts            # Routing configurations
│   └── App.vue              # Root component
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── README.md                # Documentation
```

---

## Technologies Used

### Frameworks and Tools

- **Vue 3**: Frontend framework using the Composition API.
- **Vite**: Fast build tool for development and production.
- **TypeScript**: Strongly typed JavaScript for maintainability.
- **Axios**: For HTTP requests to fetch data from the REST Countries API.

### CSS and Design

- Custom CSS is used for theming (light and dark modes).
- **Font Awesome** is used for icons.

---

## Setup and Installation

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/JSGuru15/REST-API-Countries-App.git
cd REST-API-Countries-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Lint the Codebase

```bash
npm run lint
```

---

## Deployment

The app has been deployed to [Your Deployment URL]. You can access the live demo [here](Your Live Demo URL).

---

## Details of Implementation

### API Integration

- The app fetches data from [REST Countries API](https://restcountries.com/#api-endpoints-v2) using Axios.
- Key endpoints used:
  - `/all`: Fetch all countries for the homepage.
  - `/name/{country}`: Fetch details of a specific country.
  - `/alpha/{code}`: Fetch details of bordering countries.

### Components

1. **`CountryList.vue`**: Displays a grid of country cards with basic information.
2. **`HomePage.vue`**: Includes search, filter, and sort functionality.
3. **`CountryList.vue`**: Displays detailed information for a selected country.
4. **`App.vue`**: Root component managing global theming and routing.

### State Management

State is managed within individual components using Vue's Composition API and `ref`/`computed`. Filters and search queries are synced with URL parameters.

### Dark Mode

Implemented using Vue's reactive variables and scoped CSS classes. Users can toggle between light and dark themes via a button.

### Lazy Loading

Country flags are lazy-loaded using the `loading="lazy"` attribute for better performance.

---

## Future Improvements

- **Unit Testing**: Add tests for components using Vue Test Utils or Jest.
- **Pagination**: Add pagination to improve performance for large data sets.
- **Accessibility**: Enhance ARIA support for screen readers.
- **Server-Side Rendering (SSR)**: Improve SEO and initial load times by rendering on the server.

---

## Contributing

Feel free to fork the repository and submit pull requests. Suggestions are always welcome!

---

## License

This project is licensed under the MIT License.

---
