import Banner from "../components/Banner/Banner";
import SecondBanner from "../components/SecondBanner/SecondBanner";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OurServices from "../components/OurServices/Ourservices";
import Testimonial from "../components/Testimonial/Testimonial";
import WhyUs from "../components/WhyUs/WhyUs";
import { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <SecondBanner />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
