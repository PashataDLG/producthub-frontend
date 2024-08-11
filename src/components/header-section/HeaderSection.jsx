import { Navigation } from "./navigation/Navigation";
import { Banner } from "./banner/Banner";

export const HeaderSection = () => {
    return (
        <div className="header_section">
            <Navigation />
            <Banner />
        </div>
    );
};