import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";


import App from './App'



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
        <App />);