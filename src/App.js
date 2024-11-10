import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LoginRegisterGuest from './LoginRegisterGuest';
import ColorSort from './ColorSort';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LoginRegisterGuest />} />
          <Route path="/color-sort" element={<ColorSort />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;