import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CustomCursor from './components/CustomCursor'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Adding the cursor here ensures it stays on top of every page and component */}
    <CustomCursor />
    <App />
  </React.StrictMode>
);