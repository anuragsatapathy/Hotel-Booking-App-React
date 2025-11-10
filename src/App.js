import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="main-content" style={{ flex: 1 }}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;





