import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { hero } from "../assets";
// import bg from "banner.jpg"

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const mystyle = {
    // background: "linear-gradient("white", "#9198e5")",
    background: "linear-gradient(to bottom  , rgb(225, 240, 245),white)",
    backgroundSize: "cover", // Adjust the backgroundSize as per your preference
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // You can add more styles like height, width, padding, etc., to customize the section further.
  }; 
  

  return (
    <Wrapper style={mystyle}>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data" data-aos="fade-right">
            <p className="intro-data">Welcome to </p>
            <h1> GadgetGrove </h1>
            <p>
              At GadgetGrove, we're your one-stop destination for all things
              tech! Step into our digital oasis, where innovation meets
              convenience. Explore a vast array of cutting-edge technology
              products that will enhance your lifestyle and transform the way
              you interact with the world.
            </p>
            <NavLink to="/products">
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image" data-aos="fade-left">
            <figure>
              <img
                src={hero}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
