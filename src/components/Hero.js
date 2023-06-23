import "./HeroStyles.css";


function Hero(props){
    return(<>
      <div className={props.cName}>
          <img src={props.heroImg} alt="hero"></img>
      </div>
    </>)

}

export default Hero;