import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FinanceOfficerLogin() {
  const navigate = useNavigate();
  const [officerId, setOfficerId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    alert('Login Successful');
    // Navigate to finance dashboard or another appropriate page
    navigate('/finance-dashboard');
  };

  // Check if both fields are filled
  const isFormValid = officerId.trim() !== '' && password.trim() !== '';

  return (
    <>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <img
            src={require('../assets/logo.jpg')}
            alt="loading"
            className="h-32 w-32 brightness-95 contrast-200"
          />
          <div className="pt-5">
            <h1 className="text-4xl font-extrabold cursor-pointer" onClick={() => navigate('/')}>PMSS</h1>
            <h3 className="text-lg font-semibold">Academic Year 2024-2025</h3>
          </div>
        </div>

        <Navbar />
      </div>

      <div className="flex items-center justify-center py-8 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md shadow-blue-500 w-96">
          <h2 className="text-2xl font-extrabold mb-6 text-center">Finance Officer Login</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Officer ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Officer ID"
              value={officerId}
              onChange={(e) => setOfficerId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-gray-600 mb-4 text-sm">
            Don't have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer font-semibold"
              onClick={() => navigate('/finance-register')}
            >
              Register as Finance Officer
            </span>
          </p>

          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`w-full py-2 rounded-md transition duration-200 text-white ${
              isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
