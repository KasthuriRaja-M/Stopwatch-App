# Stopwatch App

A modern, beautiful React stopwatch application with lap functionality and responsive design.

## Features

- ⏱️ **Precise Timing**: Accurate stopwatch with millisecond precision
- 🏃 **Start/Stop Control**: Easy start and stop functionality
- 🔄 **Reset**: Reset the stopwatch to zero
- 📝 **Lap Times**: Record and display lap times
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- ♿ **Accessible**: Keyboard and screen reader friendly

## Screenshots

The app features a clean, modern interface with:
- Large, easy-to-read time display
- Intuitive control buttons
- Scrollable lap times list
- Responsive design for all screen sizes

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd stopwatch-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## Usage

### Basic Controls
- **Start**: Click the "Start" button to begin the stopwatch
- **Stop**: Click the "Stop" button to pause the stopwatch
- **Reset**: Click the "Reset" button to reset the stopwatch to 00:00.00
- **Lap**: Click the "Lap" button while running to record the current time

### Lap Times
- Lap times are displayed in a scrollable list below the controls
- Each lap shows the lap number and the recorded time
- Lap times are only available when the stopwatch is running

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features
- **Create React App**: Development environment

## Project Structure

```
stopwatch-app/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Component styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Features in Detail

### Time Display
- Shows time in MM:SS.ms format
- Updates every 10 milliseconds for smooth animation
- Uses monospace font for consistent alignment

### Lap Functionality
- Records lap times only when stopwatch is running
- Displays lap number and time
- Scrollable list for many laps
- Hover effects for better UX

### Responsive Design
- Adapts to different screen sizes
- Mobile-optimized button layout
- Touch-friendly interface

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE). 