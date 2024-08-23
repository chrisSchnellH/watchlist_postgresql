import './App.css';
import { Footer } from './pages/NavbarAndFooter/Footer';
import { Navbar } from './pages/NavbarAndFooter/Navbar';
import { Searchpage } from './pages/Searchpage/Searchpage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Watchlist } from './pages/Watchlist/Watchlist';
import { Homepage } from './pages/Homepage/Homepage';
import { ScrollUp } from './Utils/ScrollUp';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <main className='flex-grow-1'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/*' element={<Navigate to='/' />} />
            <Route path='/searchpage' element={<Searchpage />} />
            <Route path='/watchlist' element={<Watchlist />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;

