import './App.css';
import Navbar from "./navbar.jsx";
import Footer from './footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const noFooterPaths = ['/bag','/wishlist', '/men', '/women','/login','/beauty','/electronics','/sports','/household','/luggage','/special'];
  const showFooter = !noFooterPaths.includes(location.pathname);
const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}
export default App;