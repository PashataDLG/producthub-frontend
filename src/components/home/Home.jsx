import { useEffect, useState } from "react";

import { AboutSection } from "./about-section/AboutSection";
import { BlogSection } from "./blog-section/BlogSection";
import { ClientSection } from "./client-section/ClientSection";
import { CoffeeSection } from "./coffee-section/CoffeeSection";
import { ContactSection } from "./contact-section/ContactSection";

import { HeaderSection } from "./header-section/HeaderSection";

export const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/api/products')
            .then(res => res.json())
            .then((resData) => setData(resData))
            .catch(err => console.error('There was an error: ' + err));
    }, []);
    
    return (
        <>
             <HeaderSection />
             <CoffeeSection />
             <AboutSection />
             <ClientSection />
             <BlogSection />
             <ContactSection />
        </>
    );
};