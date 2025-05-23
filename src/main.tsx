import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'animate.css'
import App from './App'
import GoToTop from './components/GoToTop/GoToTop.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <GoToTop />
    </Provider>
  </StrictMode>,
)
