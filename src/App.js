
import './App.css';
import ENews from './components/ENews';

import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
  <>
 
        
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:category' element={<ENews />}/>
        <Route path='/*' element={<h1>So sorry but this page isnot available</h1>} />
      </Routes>
    

 
  </>
  );
}

export default App;
