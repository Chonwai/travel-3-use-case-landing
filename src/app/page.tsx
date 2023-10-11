import MainHeading from './components/MainHeading';
import FeatureSection from './components/FeatureSection';
import TryItSection from './components/TryItSection';
import Introduction from './components/Introduction';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="mx-auto">
            <MainHeading />
            <FeatureSection />
            <TryItSection />
            <Introduction />
            <Partners />
            <Footer />
        </div>
    );
}
