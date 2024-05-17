import styled from "styled-components";
import bg from "./bg.png";
export const Wrapper = styled.div``;

export const Header = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 560px;

  padding: 4rem 4rem;
  display: flex;

  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 70%;

    &_txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .heading {
        font-family: Montserrat;
        font-size: 73.46px;
        font-weight: 700;
        line-height: 98.15px;
        color: #ffffff;
      }
    }
    &_grid {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      /* place-items: center; */
      grid-column-gap: 3rem;
      grid-row-gap: 18px;
      color: #ffffff;

      .box {
        display: flex;
        gap: 1rem;
        align-items: center;

        .txt {
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 500;
          line-height: 39.63px;
        }
        &_icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .stars {
      display: flex;
      gap: 0.6rem;
      font-size: 1.5rem;
      align-items: center;

      .star {
        color: gold;
      }
      .not-fill {
        color: grey;
      }
      .txt {
        color: #ffffff;
        padding-left: 1.5rem;
        font-family: Montserrat;
        font-size: 21px;
        font-weight: 400;
      }
    }
  }
  .card {
    box-shadow: 0px 1.15px 5.76px 1.15px #00000029;
    background: #ffffff;
    width: 33%;
    height: 610px;
    border-radius: 9px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */
    justify-content: space-between;

    &__img {
      width: 100%;
      height: 40%;
      border-radius: 9px;
    }
    &__price {
      font-family: Montserrat;
      font-size: 61.95px;
      font-weight: 600;
      color: #303030;
    }
    &__enroll {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 700;
      color: #303030;
      span {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
      }
    }
    .btn__enroll {
      background: #040e53;
      width: 100%;
      padding: 1rem;
      border-radius: 13px;
      color: #ffffff;
      font-family: Montserrat;
      font-size: 22.75px;
      font-weight: 500;
    }

    &_cart {
      display: flex;
      gap: 1rem;
      width: 100%;

      .cart {
        border: 0.89px solid #040e53;
        font-family: Montserrat;
        font-size: 25.09px;
        font-weight: 500;
        color: #040e53;
        border-radius: 13px;
        padding: 0.8rem;
        width: 75%;
      }
      .like {
        border: 0.89px solid #040e53;
        font-size: 35px;
        font-weight: 500;
        color: #040e53;
        border-radius: 13px;
        padding: 0.8rem;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
export const Content = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .head {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .heading {
      font-family: Montserrat;
      font-size: 39px;
      font-weight: 700;
      color: #303030;
    }

    .txt {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 400;
      line-height: 33.33px;
      color: #000000;
    }
  }
  .requirement {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: Montserrat;

    .head {
      font-size: 32px;
      font-weight: 700;
      line-height: 44px;
      color: #303030;
    }
    .list {
      font-size: 20px;
      font-weight: 400;
      color: #303030;
      line-height: 1.7;
    }
  }
  .whatToLearn {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .heading {
      font-family: Montserrat;
      font-size: 21.27px;
      font-weight: 600;
      line-height: 29.78px;
      letter-spacing: -0.10636334121227264px;
    }
  }
  .Module {
    display: flex;
    color: #303030;
    flex-direction: column;

    .head {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      .heading {
        font-family: Montserrat;
        font-size: 21.27px;
        font-weight: 600;
        line-height: 29.78px;
        letter-spacing: -0.10636334121227264px;
      }
      .box {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        &_icon {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
    .module__maping {
      padding: 3rem 0;
      /* display: flex;
      justify-content: space-between; */

      .modules {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        border-bottom: 1px solid grey;
        padding: 0.7rem 0;
      }
      .toggle {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &__icon {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center;
        }
      }
      .module__title {
        //styleName: Subtitle/Medium;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        line-height: 33.33px;
      }
      .module__describe {
        font-family: Montserrat;
        font-size: 17px;
      }
      .btn__toggle {
      }
    }
  }
`;
