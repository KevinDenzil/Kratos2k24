import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Success from './pages/Success';
import Failure from './pages/Failure';
import CartStatus from './CartStatus';
import EventPage from './pages/EventPage';
import Home from './pages/Home';
import TransitionComponent from './components/Transition';
import { TransitionProvider } from './context/TransitionContext';
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
          <Route path="/event/:eventName" element={<EventPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </CartStatus>
      </TransitionProvider>
    </BrowserRouter>
  );
}

export default App;
