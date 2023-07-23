import styled from "styled-components";
import { brand1, brand2, brand3, brand4, brand5 } from "../assets";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src={brand1}
              alt="trusted-brands"
              style={{ height: "50px", width: "200px" }}
            />
          </div>
          <div className="slide">
            <img
              src={brand2}
              alt="trusted-brands"
              style={{ height: "50px", width: "200px" }}
            />
          </div>
          <div className="slide">
            <img
              src={brand3}
              alt="trusted-brands"
              style={{ height: "40px", width: "200px" }}
            />
          </div>
          <div className="slide">
            <img
              src={brand4}
              alt="trusted-brands"
              style={{ height: "40px", width: "200px" }}
            />
          </div>
          <div className="slide">
            <img
              src={brand5}
              alt="trusted-brands"
              style={{ height: "50px", width: "200px" }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
