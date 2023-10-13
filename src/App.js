import logo from './logo.svg';
import './App.css';

import { HashRouter as Router,Switch, Routes, Route } from 'react-router-dom';
import { Navbar, Footer,  } from './components/components';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router  >
    {/* <div className='App'> */}
    <Navbar />
     <div className='contentLoader'>
       <Routes>
           <Route index element={<Home />} />
           <Route path='/Dashboard' element={<Dashboard />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
       </Routes>
     </div>
     <Footer />
    {/* </div> */}
 </Router>
  );
}

export default App;
