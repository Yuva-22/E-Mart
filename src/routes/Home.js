import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../images/img1.jpeg";
import Data1 from "../components/Data1";
import Footer from "../components/Footer";

function Home(){
    return(
      <>
      <NavBar />
      <Hero 
      cName="hero"
      heroImg={img1}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      btntext="Travel plan"
      url="/"
      btnclass="show"
      />
      <Data1 />
      <Footer />
      </>

    )

}

export default Home;