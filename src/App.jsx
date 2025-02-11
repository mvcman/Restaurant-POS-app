import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Auth, Orders, Tables, Menu } from './pages';
import Header from './components/shared/Header';
import BottomNav from './components/shared/BottomNav';

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Header />
        <div className="bg-[#1f1f1f] w-full h-[calc(100vh-4rem)] relative overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<div>Not Found!</div>} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </div>
  )
}

export default App
