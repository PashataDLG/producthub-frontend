import { AboutSection } from "./about-section/AboutSection";
import { BlogSection } from "./blog-section/BlogSection";
import { ClientSection } from "./client-section/ClientSection";
import { CoffeeSection } from "./coffee-section/CoffeeSection";
import { ContactSection } from "./contact-section/ContactSection";

import { HeaderSection } from "./header-section/HeaderSection";

export const Home = () => {
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