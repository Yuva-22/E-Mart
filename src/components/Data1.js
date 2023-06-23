import Data from "./Data";
import "./Data.css";
import i1 from "../images/img2.jpg";
import i2 from "../images/img3.jpg";
import i3 from "../images/img4.avif";
import i4 from "../images/img5.jpg";
import i5 from "../images/img6.jpg";
import i6 from "../images/img7.png";
import i7 from "../images/img8.webp";
import i8 from "../images/img9.jpg";



const Destination = () =>{
    return(
     <div className="destination">
        <h1>Our Products</h1>

        <Data
        className="first-des"
        heading="Fresh Fruits"
        text= " Velit ut tortor pretium viverra suspendisse 
        potenti nullam.Volutpat commodo sed egestas egestas 
        fringilla phasellus faucibus scelerisque. Dignissim 
        diam quis enim lobortis scelerisque fermentum dui. 
        Gravida neque convallis a cras semper. In fermentum 
        posuere urna nec tincidunt praesent semper feugiat."
        img1={i1}
        img2={i2}
        />

       <Data
        className="first-des-reverse"
        heading="Fresh Vegetables"
        text="Aliquet eget sit amet tellus cras adipiscing. 
        Egestas diam in arcu cursus euismod. Viverra mauris 
        in aliquam sem fringilla ut.Montes nascetur ridiculus
        mus mauris vitae ultricies leo integer. Ut placerat 
        orci nulla pellentesque dignissim enim sit. Sollicit
        udin nibh sit amet commodo nulla facilisi nullam. 
        Turpis massa tincidunt dui ut. Vulputate sapien nec 
        sagittis aliquam malesuada."
        img1={i3}
        img2={i4}
        />

        <Data
        className="first-des"
        heading="Dairy Products"
        text="Montes nascetur ridiculus mus mauris vitae 
        ultricies leo integer. Ut placerat orci nulla pellentes
        que dignissim enim sit. Sollicitudin nibh sit amet 
        commodo nulla facilisi nullam. Turpis massa tincidunt 
        dui ut. Vulputate sapien nec sagittis aliquam malesuada.
        Felis eget nunc lobortis mattis aliquam faucibus purus. 
        Nibh nisl condimentum id venenatis a."
        img1={i5}
        img2={i6}
        />

        <Data
        className="first-des-reverse"
        heading="Other Groceries"
        text=" Id volutpat lacus laoreet non curabitur 
        gravida. Dolor sed viverra ipsum nunc. Bibendum ut 
        tristique et egestas quis ipsum. Commodo quis 
        imperdiet massa tincidunt nunc pulvinar sapien. 
        Nec ullamcorper sit amet risus nullam eget felis 
        eget. Quis commodo odio aenean sed adipiscing diam 
        donec. Non arcu risus quis varius. Mollis aliquam ut 
        porttitor leo a diam sollicitudin tempor id. Amet 
        risus nullam eget felis eget nunc. "
        img1={i7}
        img2={i8}
        />


    </div>

    );
}

export default Destination ;