import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Success from './pages/Success';
import Failure from './pages/Failure';
import CartStatus from './CartStatus';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <CartStatus>
        <Header />
        <Routes>
          <Route path="/" index element= {<Home />} />
          <Route path="/events/:category" element={<Events />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </CartStatus>
    </BrowserRouter>
  );
}

export default App;
