import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/7.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
         <Navbar/>
       
       <Hero
       cName="hero-contact"
       heroImg={AboutImg}
       title="Contact"
       btnClass="hide"
       />
       <ContactForm/>
       <Footer/>
        </>
    )

}
export default Contact;