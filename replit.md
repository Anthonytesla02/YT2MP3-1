# YouTube to MP3 Converter

A React-based web application that allows users to search YouTube videos and convert them to MP3 audio files.

## Project Structure

- `client/` - React frontend (Create React App)
  - Runs on port 5000
  - Uses SCSS for styling
  - React Router for navigation
  
- `api/` - Express backend API
  - Runs on port 3001 (localhost)
  - Handles video downloads and MP3 conversion using ffmpeg

## Setup Requirements

### Environment Variables

- `REACT_APP_YOUTUBE_API_KEY` - YouTube Data API key (required for video search and details)

### System Dependencies

- Node.js 20
- ffmpeg (for audio conversion)

## Running the Application

The application is started via `start.sh` which runs both:
1. API server (port 3001)
2. React frontend (port 5000)

## Features

- Search YouTube videos
- View video details
- Download videos as MP3 audio files
- Related video suggestions

## API Endpoints

- `GET /download/:videoId` - Downloads and converts a YouTube video to MP3

## Notes

- The frontend uses CRA's proxy feature to forward `/download/*` requests to the API backend
- ffmpeg is required for audio conversion functionality
