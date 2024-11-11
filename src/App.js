import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import Streetstyle from './pages/streetstyle/Streetstyle';
import Nature from './pages/nature/Nature';
import Milkbath from './pages/milkbath/Milkbath';
import Studio from './pages/studio/Studio';
import Restaurants from './pages/restaurants/Restaurants';
import Contacts from './pages/contacts/Contacts';


import ScrollToTop from "./utils/scrollToTop";


function App() {
    return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/streetstyle' element={<Streetstyle/>}/>
          <Route path='/nature' element={<Nature/>}/>
          <Route path='/milkbath' element={<Milkbath/>}/>
          <Route path='/studio' element={<Studio/>}/>
          <Route path='/restaurants' element={<Restaurants/>}/>
          <Route path='/contacts' element={<Contacts/>}/>   
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
