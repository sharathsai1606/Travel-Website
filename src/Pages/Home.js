import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
       
       <Hero
       cName="hero"
       heroImg="https://images.unsplash.com/photo-1565772838491-cbeb32fac6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
       title="Let's make your Travel Dreams a reality"
       text="Experience the world like never before, book now!"
       buttonText="Travel Plan"
       url="/travelpage"
       btnClass="show"
       />
       <Destination/>
       <Trip/>
       <Footer/>
        </>
    );

}
export default Home;