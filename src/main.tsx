import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'animate.css'
import 'sweetalert2/src/sweetalert2.scss'
import App from './App'
import GoToTop from './Components/GoToTop/GoToTop.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';
import { LocationProvider } from './Context/LocationContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocationProvider>
      <Provider store={store}>
        <App />
        <GoToTop />
      </Provider>
    </LocationProvider>
  </StrictMode>,
)
