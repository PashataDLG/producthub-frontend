import { AboutSection } from "./components/about-section/AboutSection"
import { BlogSection } from "./components/blog-section/BlogSection"
import { ClientSection } from "./components/client-section/ClientSection"
import { CoffeeSection } from "./components/coffee-section/CoffeeSection"
import { ContactSection } from "./components/contact-section/ContactSection"
import { CopyrightSection } from "./components/copyright-section/CopyrightSection"
import { FooterSection } from "./components/footer-section/FooterSection"
import { HeaderSection } from "./components/header-section/HeaderSection"

function App() {
    return (
        <>
            <HeaderSection />
            <CoffeeSection />
            <AboutSection />
            <ClientSection />
            <BlogSection />
            <ContactSection />
            <FooterSection />
            <CopyrightSection />
        </>
    )
}

export default App
