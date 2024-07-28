import { Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Footer from '../components/footer/Footer';
import Register from '../auth/register/Register';

const Routing = () => {
  return (
      
    <div className="routes">
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;