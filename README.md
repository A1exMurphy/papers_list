# Paper's List

## Overview
Paper's List is an application designed to facilitate crowd-sourcing and discovery of networking events in the Minneapolis area. Leveraging a modern technology stack, the application provides a seamless user experience for both event organizers and attendees.

## Technology Stack
- **JavaScript**: Core language for both frontend and backend development.
- **React**: Frontend library for building dynamic user interfaces.
- **Node.js**: Server-side runtime for building scalable network applications.
- **Saga**: Middleware for managing side effects in React/Redux applications, enhancing asynchronous flows.
- **Redux**: State management library for predictable state container architecture.
- **HTML & CSS**: Fundamental web technologies for structuring and styling the application.
- **MUI (Material-UI)**: React components implementing Google's Material Design, ensuring a sleek and responsive UI.
- **Cloudinary**: Image management service for handling media assets.

## Features
- **Crowd-Sourced Events**: Users can contribute and discover networking events happening in Minneapolis.
- **User Authentication**: Secure user accounts for event organizers and attendees.
- **Interactive UI**: Intuitive and user-friendly interface for seamless navigation.
- **Real-time Updates**: Utilizing Redux and Saga for smooth, real-time data synchronization.

## Dependencies
```json
{
  "name": "prime-solo-project",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": "20.x"
  },
  "dependencies": {
    "@cloudinary/react": "^1.11.2",
    "@cloudinary/url-gen": "^1.16.1",
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.15.7",
    "@mui/material": "^5.15.7",
    "@mui/styled-engine-sc": "^6.0.0-alpha.14",
    "axios": "^1.6.2",
    "bcryptjs": "^2.4.3",
    "cloudinary": "^1.41.3",
    "cookie-session": "^2.0.0",
    "dotenv": "^16.0.3",
    "express": "^4.17.1",
    "multer": "^1.4.5-lts.1",
    "multer-storage-cloudinary": "^4.0.0",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "pg": "^8.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.6",
    "react-router-dom": "^5.3.4",
    "redux": "^4.1.2",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "styled-components": "^6.1.8"
  },
  "scripts": {
    "start": "node server/server.js",
    "client": "vite",
    "server": "nodemon server/server.js",
    "build": "vite build",
    "test": "vitest"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "nodemon": "^2.0.4",
    "vite": "^5.0.7",
    "vitest": "^1.0.4"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not ie <= 11",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "heroku-run-build-script": true
}
```
## Getting Started
1. Clone the repository: `git clone https://github.com/your-username/papers-list.git`
2. Navigate to the project directory: `cd papers-list`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Contributing
We welcome contributions from the community. Feel free to submit bug reports, feature requests, or even pull requests. Please follow our [Contribution Guidelines](CONTRIBUTING.md) for a smooth collaboration process.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
For any inquiries, reach out to us at [cathy@rockpaperstar.com](mailto:cathy@rockpaperstar.com).

Happy networking with Paper's List!
