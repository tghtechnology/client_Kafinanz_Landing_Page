import AccoutingService from "../components/AccoutingService";
import Advantages from "../components/Advantages";
import ChooseUs from "../components/ChooseUs";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Info from "../components/Info";
import OurServices from "../components/OurServices";
import Planes from "../components/Planes";
// import ServiceDetails from "../components/ServiceDetails";
import Footer from "../components/utils/Footer";
import Navbar from "../components/utils/Navbar";

const Home = () => {
    return(
        <>
        <Navbar/>
        <Header/>
        <main>
            <ChooseUs/>
            <AccoutingService/>
            <Planes/>
            {/* <ServiceDetails/> */}
            <Advantages/>
            <OurServices/>
            <Info/>
            <Contact/>
        </main>
        <Footer/>
        </>
    )
}

export default Home;