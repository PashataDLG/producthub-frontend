import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Copyright } from './components/copyright/Copyright';
import { About } from './components/about/About';
import { Blog } from './components/blog/Blog';
import { Coffees } from './components/coffees/Coffees';
import { Contact } from './components/contact/Contact';
import { Login } from './components/login/Login';

function App() {
    return (
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/coffees' element={<Coffees />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
                <Copyright />
            </main>
        </>
    );
}

export default App;