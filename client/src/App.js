// import logo from 'logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Payment from './Payment.js';
import Fail from './fail.js';
import Success from './success.js';



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Payment />} />
  <Route path="/success" element={<Success />}/>
  <Route path="/fail" element={<Fail />}/>
</Routes>
</BrowserRouter>

  );
}

export default App 