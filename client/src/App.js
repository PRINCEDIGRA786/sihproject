
import './App.css';
import Home from './pages/Home';
import Comps from './components/StudentDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Otr from './pages/Otr'
import Studentregister from './pages/Studentregister';
import InstitutionRegister from './pages/Instituteregister';
import InstituteLogin from './pages/InstituteLogin';
import Applyscholarship from './pages/Applyscholarship';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/studentDashboard' element={<Comps />} />
          <Route path='/otr' element={<Otr />} />
          <Route path='/studentregister' element={<Studentregister />} />
          <Route path='/instituteregister' element={<InstitutionRegister />} />
          <Route path='/institutelogin' element={<InstituteLogin />} />
          <Route path='/apply' element={<Applyscholarship />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
