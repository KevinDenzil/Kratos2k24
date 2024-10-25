import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Success from './pages/Success';
import Failure from './pages/Failure';
import CartStatus from './context/CartStatus';
import EventPage from './pages/EventPage';
import Home from './pages/Home';
import CheckOut from './pages/CheckOut';
import TransitionComponent from './components/Transition';
import { TransitionProvider } from './context/TransitionContext';
import CartPage from './pages/CartPage';
import EventsPage from './pages/EventsPage';
import { Analytics } from '@vercel/analytics/react'
import './Global.css'



function App() {
  return (
    <BrowserRouter>
    <TransitionProvider>
      <CartStatus>
        <Header />
        <Routes>
          <Route path="/" index element= {<TransitionComponent><Home /></TransitionComponent>} />
          <Route path="/events/:category" element={<TransitionComponent><Events /></TransitionComponent>} />

          <Route path="/eventspage" element={<TransitionComponent><EventsPage /></TransitionComponent>} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartStatus>
      </TransitionProvider>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
