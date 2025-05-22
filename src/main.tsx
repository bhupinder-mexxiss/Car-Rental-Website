import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'animate.css'
import App from './App.tsx'
import GoToTop from './components/GoToTop/GoToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GoToTop />
  </StrictMode>,
)
