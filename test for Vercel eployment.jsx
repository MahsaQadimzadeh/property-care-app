/* Vite + React project to replicate Expo app config */

// 1. main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 2. App.jsx
import React from 'react';
import './App.css';
import splashImage from '/splash.png';
import Map from './Map.jsx';

function App() {
  return (
    <div id="app">
      <div id="splash-screen">
        <img src={splashImage} alt="Splash" />
      </div>
      <Map />
    </div>
  );
}

export default App;

// 3. Map.jsx
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Add custom markers or overlays here */}
    </GoogleMap>
  );
}

export default Map;

// 4. App.css
#splash-screen {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#splash-screen img {
  width: 200px;
  object-fit: contain;
}

// 5. index.css (reset + base styles)
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #ffffff;
}

// 6. .env
VITE_GOOGLE_MAPS_API_KEY=your_real_api_key_here

// 7. public/index.html (excerpt)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="/manifest.json" />
    <title>Placenet</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>

// 8. public/manifest.json
{
  "name": "Placenet",
  "short_name": "Placenet",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "Placenet Web App",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}

// 9. Install dependencies
// Run this in your project root:
// npm install @react-google-maps/api

// To start development:
// npm run dev
