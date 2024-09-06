import { useProduct } from '../../context/product-context';

import { AboutSection } from './about-section/AboutSection'
import { BlogSection } from "./blog-section/BlogSection";
import { ClientSection } from "./client-section/ClientSection";
import { CoffeeSection } from "./coffee-section/CoffeeSection";
import { ContactSection } from "./contact-section/ContactSection";

import { HeaderSection } from "./header-section/HeaderSection";

export const Home = () => {
    const { getProducts } = useProduct();

    const products = getProducts();

    console.log(products);

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