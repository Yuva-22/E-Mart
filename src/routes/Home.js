import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../images/img1.jpeg";

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
      </>

    )

}

export default Home;