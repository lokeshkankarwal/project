# RoadResQ - Roadside Assistance Application

RoadResQ is a full-stack application that connects users with nearby mechanics for roadside assistance. This repository contains both the frontend and backend code for the application.

## Project Structure

- `/frontend` - React-based web application
- `/backend` - Node.js/Express API server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables by creating a `.env` file in the backend directory. See the backend README for details.

4. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Email Configuration for Password Reset

The password reset functionality requires proper email configuration. Follow these steps to set it up:

1. **Gmail Setup**:
   - Use a Gmail account for sending emails
   - Enable 2-factor authentication on your Gmail account
   - Generate an "App Password" from your Google Account settings:
     - Go to your Google Account > Security > 2-Step Verification
     - At the bottom, select "App passwords"
     - Select "Mail" as the app and "Other" as the device
     - Enter a name (e.g., "RoadResQ")
     - Click "Generate"

2. **Update Backend .env File**:
   - Set `EMAIL_USER` to your Gmail address
   - Set `EMAIL_PASS` to the App Password generated above

## Features

- User authentication (register, login, logout)
- Password management (change, reset via email)
- Profile management with tabbed interface
- Real-time chat between users and mechanics
- Mechanic availability and location tracking
- Garage management for mechanics
- Rating system for mechanics

## Development Notes

- The frontend is built with React, Material-UI, and React Router
- The backend uses Express, MongoDB, and JWT for authentication
- Real-time communication is implemented using Socket.IO

## Troubleshooting

### Password Reset Issues

If you encounter issues with the password reset functionality:

1. Check that the email configuration in the backend `.env` file is correct
2. Ensure that the Gmail account has 2FA enabled and you're using an App Password
3. Check the backend logs for specific error messages
4. If using Gmail, ensure that "Less secure app access" is turned off (as you'll be using App Passwords instead)

## License

MIT