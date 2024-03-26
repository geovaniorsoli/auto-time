// app/page.tsx
import { Button } from '@nextui-org/button';
import  Nav from "../components/Navbar";
import Header from "../components/Header"
import About from "../components/About"
import Footer from "../components/Footer"
export default function Page() {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Footer />
    </>
  )
}