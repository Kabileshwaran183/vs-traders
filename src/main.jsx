import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style.css';
import App from './App.jsx'
import './Events.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App />
   </BrowserRouter>


)
