
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set the document title to the new app name
document.title = "QwetuLink";

createRoot(document.getElementById("root")!).render(<App />);
