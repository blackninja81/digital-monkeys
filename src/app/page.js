import LandingSection from "@/Components/HomePage/Landing";
import Homestyle from '../styles/Home.module.scss'
import Navbar from '@/Layouts/Navbar'
import Footer from '@/Layouts/Footer'
export default function Home() {
  return (
    <main className={Homestyle.main}>
      {/* <Navbar/> */}
      <LandingSection/>
    </main>
  )
}
