import { Outlet } from 'react-router'
import Header from '../Components/Header/Header.tsx'
import Footer from '../Components/Footer/Footer.tsx'
import AOS from 'aos';
import { useEffect } from 'react';


const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  return (
    <div className='relative max-w-[1800px] mx-auto'>
      <Header />
      <div className='pb-14'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout