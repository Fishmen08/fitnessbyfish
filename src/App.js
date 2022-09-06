import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProfile from './components/UpdateDetails';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Workouts from './components/Workouts';
import NavbarHolder from './components/NavbarHolder';
import Contact from './components/Contact';
import SinglePage from './components/SinglePage';
import PasswordReset from './components/PasswordReset';

function App() {
  
  return (
    <div className="App w-screen">
      <AuthProvider>
        <BrowserRouter>
        <NavbarHolder />
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<SinglePage />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/password-reset' element={<PasswordReset />} />
            {/* <Route path='testimonials' element={<Testimonials />} /> */}
            <Route path='contact' element={<Contact />} />
            <Route path='/update-profile' 
              element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>} />
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>} />
              <Route path='/workouts' 
              element={
              <PrivateRoute>
                <Workouts />
              </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}


export default App;
