import { Routes, Route } from 'react-router-dom';

import Wallet from './pages/Wallet';

import Login from './pages/login/Login';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Wallet /> } />
    </Routes>
  );
}

export default App;
