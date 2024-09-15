import { Routes, Route } from 'react-router-dom';

import { useAuth } from './context/auth-context';

import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Copyright } from './components/copyright/Copyright';
import { About } from './components/about/About';
import { Coffees } from './components/coffees/Coffees';
import { Contact } from './components/contact/Contact';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import LoadingOverlay from './components/loading/Loading';
import AddProduct from './components/add-product/AddProduct';

function App() {
    const { isTokenExpired, removeToken } = useAuth();

    if (isTokenExpired) { console.log(true); removeToken(); };

    return (
        <>
            <LoadingOverlay />
            <Navigation />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/coffees' element={<Coffees />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/add-product' element={<AddProduct />} />
                </Routes>
                <Footer />
                <Copyright />
            </main>
        </>
    );
}

export default App;