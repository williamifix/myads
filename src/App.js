import logo from './logo.svg';
import './App.css';

import { HashRouter as Router,Switch, Routes, Route } from 'react-router-dom';
import { Navbar, Footer,SiteNotice } from './components/components';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing';
import TermsNCondition from './pages/TermsNConditions';
import Privacy from './pages/privacy';
import Sitemap from './pages/sitemap';
import Contact from './pages/contact';
import CreateListing from './pages/CreateListing';
// import { SiteNotice } from './components/components';


function App() {
  return (
    <Router  basename='/'>
    {/* <div className='App'> */}
    <Navbar />
     <div className='contentLoader'>
       <Routes>
           <Route index element={<Home />} />
           <Route path='/Dashboard' element={<Dashboard />} />
           <Route path='/Pricing' element={<Pricing />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/TermsNConditions' element={<TermsNCondition />} />
           <Route path='/Privacy' element={<Privacy />} />
           <Route path='/Sitemap' element={<Sitemap />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/CreateListing' element={<CreateListing />} />
       </Routes>
     </div>
     <SiteNotice/>
     <Footer />
    {/* </div> */}
 </Router>
  );
}

export default App;
