import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Content = styled.div`
  box-shadow: 0px 0px 16.75px 0px #00000026;
  background: #ffffff;
  width: 90%;
  height: 100vh;
  padding: 2rem 1.5rem;

  .container {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    width: 100%;

    /* overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    padding: 0.5rem; */

    &::-webkit-scrollbar {
      width: 5px; /* for vertical scrollbar */
      height: 5px; /* for horizontal scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: red;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-button {
      width: 20px;
    }

    .headings {
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 700;
      line-height: 26.51px;
      border-bottom: 1px solid #1e1e1e40;
      padding: 20px 4px;
    }

    &__cart {
      display: flex;
      width: 100%;
      margin-top: 3rem;
      /* align-items: center; */
      justify-content: center;
      gap: 5rem;

      &-card {
        display: flex;
        flex-direction: column;
        width: 75%;

        /* align-items: center; */
      }
      &-total {
        display: flex;
        flex-direction: column;
        gap: 10rem;
        width: 25%;

        .total {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: #303030;
          height: 10rem;

          &_button {
            padding: 12px 24px;
            width: 95%;
            border-radius: 9px;
            background: #040e53;
            color: #ffffff;
          }

          &-txt {
            font-family: Montserrat;
            font-size: 22px;
            font-weight: 600;
            line-height: 36.67px;
          }
          &-price,
          .icon {
            font-family: Montserrat;
            font-size: 40px;
            font-weight: 700;
            line-height: 66.67px;
          }
        }
        .price_box {
          display: flex;
          align-items: center;
          width: 95%;

          input {
            border: 1px solid #040e53;
            padding: 12px 17px;
            gap: 8px;
            border-radius: 9px;
          }
        }
      }
    }

    .card {
      border-bottom: 0.5px solid #303030;
      display: flex;
      /* gap: 2rem; */
      padding: 1rem 0;
      width: 749.3pxpx;
      height: 157px;
      padding: 15px 0px 15px 10px;
      justify-content: space-between;
      align-items: center;

      &-name {
        display: flex;
        /* width: 50%; */
        justify-content: space-around;
        gap: 0.9rem;
        /* align-items: center; */

        .image {
          width: 142px;
          height: 127px;
          border-radius: 7px;
        }

        &_txt {
          display: flex;
          flex-direction: column;
          /* padding: 0.5rem; */
          justify-content: space-between;

          .head {
            font-family: Montserrat;
            font-size: 21.96px;
            font-weight: 700;
            line-height: 1.2;
            color: #040e53;
            width: 40%;
          }
          .author {
            font-family: Montserrat;
            font-size: 13.17px;
            font-weight: 400;
            line-height: 12.3px;
            color: #1e1e1e;
          }
        }
        .stars {
          display: flex;
          gap: 1rem;
          align-items: center;

          .rate {
            font-family: Montserrat;
            font-size: 13.17px;
            font-weight: 600;
            line-height: 12.3px;
            color: #676102;
          }
          .stars-box {
            display: flex;
            flex-direction: row;
            gap: 0.4rem;

            .star {
              color: #b8ad04;

              &-outline {
                color: #b8ad04;
              }
            }
          }
          .number {
            font-family: Montserrat;
            font-size: 11.71px;
            font-weight: 400;
            line-height: 12.3px;
            color: #303030;
          }
        }
        .info {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          /* width: 100%; */

          li {
            font-family: Montserrat;
            font-size: 11.71px;
            font-weight: 400;
            line-height: 12.3px;
            color: #303030;
          }
        }
      }
      &-price {
        display: flex;
        gap: 2rem;
        align-items: center;

        &__btn {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          align-items: flex-start;

          .button {
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.6px;
            transition: all 0.2s;
            padding-bottom: 0.2rem;

            &:hover {
              border-bottom: 1px solid grey;
              opacity: 0.4;
              transform: scale(1.1);
            }
            /* background-color: none; */
          }
          .later {
            color: #040e53;
          }
          .remove {
            color: #e81515;
          }
        }

        &__amount {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;

          .amount-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0rem;
          }

          .amount,
          .icon {
            font-family: Montserrat;
            font-size: 25px;
            font-weight: 700;
            line-height: 19.6px;
            color: #040e53;
          }
          .gap {
            padding-left: 0.3rem;
          }
          .strike {
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 400;
            line-height: 19.6px;
            text-align: left;
            color: #303030;
          }
        }
      }
    }
  }
`;
