import LandingSection from "@/Components/HomePage/Landing";
import Homestyle from '../styles/Home.module.scss'
import AboutSection from "@/Components/HomePage/AboutSection";
import PortfolioSection from "@/Components/HomePage/Portfolio";
import ServiceSection from "@/Components/HomePage/Services";
import ContactSection from "@/Components/HomePage/Contact";

export const metadata = {
  title: "Digital Monkeys | Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className={Homestyle.main}>
      {/* <Navbar/> */}
      <LandingSection/>
      <AboutSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <ContactSection/>
    </main>
  )
}
