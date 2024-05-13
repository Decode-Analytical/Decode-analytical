import styled from "styled-components";
import bg from "./homeBg.png";

export const Header = styled.div`
  margin: 1rem 0 3rem 0;
  color: #ffffff;

  background-image: linear-gradient(
      270deg,
      rgba(4, 14, 83, 0.5) 26.02%,
      rgba(4, 14, 83, 0.5) 100%
    ),
    url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 715px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .txt {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    &__big {
      font-family: Montserrat;
      font-size: 3.6rem;
      font-weight: 700;
      width: 90%;
      text-align: center;
      line-height: 1.3;
    }

    &__small {
      font-family: Montserrat;
      font-size: 1.15rem;
      font-weight: 500;
      text-align: center;
      width: 60%;
      line-height: 1.7;
    }

    &__button {
      display: flex;
      gap: 2rem;
      margin-top: 4rem;

      .Btn {
        border: 1px solid #ffffff;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s;

        p {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 500;
        }

        &:hover {
          opacity: 0.5rem;
          transform: scale(1.1);
        }

        &__free {
          background: #030b42;
        }
      }
    }
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 8px;
    width: 1200px;
    height: 270px;
    margin-top: -13rem;
    gap: 80px;
    /* padding: auto 20rem; */

    .box {
      box-shadow: 0px 1px 5px 0px #00000033;
      box-shadow: 0px 3px 1px 0px #0000001f;
      box-shadow: 0px 2px 2px 0px #00000024;
      background: #ffffff;
      padding: 2rem 1rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 190px;
      height: 138px;

      .head {
        color: #040e53;
        font-family: Montserrat;
        font-size: 39px;
        font-weight: 700;
      }
      .txt {
        color: #01051d;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;
