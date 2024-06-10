import styled from "styled-components";
import bg from "./homeBg.png";
import person from "./person.png";
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
      margin-top: 5rem;

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

export const Value = styled.div`
  padding: 4rem 5.5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 7rem;

  .img {
    background-image: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${person});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 45%;
    height: 600px;
    border-radius: 0.6rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 600px;
    justify-content: space-between;

    .head {
      font-family: Montserrat;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .boxes {
      display: flex;
      gap: 1rem;

      .icons {
        width: 9rem;
        height: 9rem;
      }
      .txt {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        &_head {
          font-family: Montserrat;
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
        }
        &_p {
          //styleName: Body/Regular;
          font-family: Montserrat;
          font-size: 0.87rem;
          font-weight: 500;
          text-align: justify;
          line-height: 1.9;
          width: 95%;
        }
      }
    }
  }
`;

export const Explore = styled.div`
  padding: 3rem;

  width: 100%;

  .explore {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &__head {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;

      .heading {
        font-family: Montserrat;
        font-size: 31px;
        font-weight: 700;
        color: #000000;
      }
      .txt {
        //styleName: Subtitle/Semibold;
        font-family: Montserrat;
        font-size: 1.15rem;
        font-weight: 600;
        color: #040e53;
      }
      .tx-1 {
        //styleName: Subtitle/Bold;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 700;
        background: #000000;
      }
      .sub_txt {
        //styleName: Subtitle/Medium;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: 500;
        color: #000000;
        width: 80%;
        line-height: 1.8;
        text-align: center;
      }
    }
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 4rem;
  align-items: center;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    place-items: center;
    grid-column-gap: 5px;
    grid-row-gap: 50px;
    padding: 0 4rem;
  }

  .card {
    /* margin-top: 4rem; */
    height: 500px;
    width: 23rem;
    padding: 1.2rem 1.2rem 1.6rem 1.2rem;
    border-radius: 1.2rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 1.64px 8.18px 1.64px #00000029;

    &__image {
      border-radius: 1.2rem;
      height: 50%;
      width: 100%;
      // border: 1px solid grey;
    }
    &__heading {
      font-family: Montserrat;
      font-size: 25px;
      font-weight: 600;
      line-height: 32.85px;
      color: #040e53;
    }
    &__figure {
      display: flex;
      gap: 0.5rem;
      color: #1e1e1ebf;

      /* justify-content: center; */
      align-items: center;

      &--img {
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 100%;
      }
      &--name {
        font-size: 0.9rem;
        font-weight: 400;
      }
      span {
        font-weight: 500;
      }
    }

    &__star {
      display: flex;
      gap: 1rem;

      .stars {
        display: flex;
        gap: 0.1rem;
        align-items: center;
      }
      .star {
        color: gold;
        font-size: 1.3rem;
      }
      .empty-star {
        color: grey;
        font-size: 1.3rem;
      }
    }
    &__date {
      display: flex;
      justify-content: space-between;

      &--time {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        p {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 400;
        }
      }
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 1rem; */
      font-family: Montserrat;

      p {
        font-size: 1rem;
      }
      .enroll-btn {
        /* padding: 0.5rem 3rem; */
        color: #000;
        border-radius: 0.7rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;

        &-2 {
          border: 1px solid grey;
          padding: 0.4rem 1.2rem;
          transition: all 0.3s;
          &:hover {
            background: #040e53;
            color: #ffffff;
          }
        }
      }
    }
  }
  .LinkToCoursePage {
    display: flex;
    align-self: center;

    .link {
      border: 2px solid black;

      padding: 0.6rem 1.3rem;
      border-radius: 0.7rem;
      font-family: Rubik;
      font-size: 1.2rem;
      font-weight: 600;
      color: #040e53;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-14px);
        background: #040e53;
        color: #ffffff;
      }
    }
  }
`;

export const FeedBack = styled.div`
  background: #f9f9f9;
  /* height: 1440px; */

  .explore {
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &__head {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;

      .heading {
        font-family: Montserrat;
        font-size: 31px;
        font-weight: 700;
        color: #000000;
      }
      .txt {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 700;
        color: #000000;
      }
      .sub_txt {
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: 500;
        color: #000000;
        width: 70%;
        line-height: 1.8;
        text-align: center;
      }
    }
    &__box {
      display: flex;
      padding: 3rem 0rem;
      align-items: center;
      justify-content: center;
      gap: 1.3rem;

      .box {
        width: 380px;
        height: 377px;
        box-shadow: 0px 0px 4px 0px #030b4240;
        background: #f9f9f9;
        padding: 1.7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-radius: 0.5rem;

        &__img {
          width: 148.3px;
          height: 148.3px;
        }
        .box__txt {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;

          .head {
            //styleName: Subtitle/Bold;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 700;
          }
          .stars {
            display: flex;
            gap: 0.4rem;
            font-size: 1.3rem;

            .star {
              color: gold;
            }
            .empty-star {
              color: gray;
              border: gray;
            }
          }
          .sub_txt {
            font-family: Montserrat;
            font-size: 13.96px;
            font-weight: 400;
            line-height: 1.5;
            color: #000000;
            text-align: center;
          }
        }
      }
    }
  }
`;

export const Tutor = styled.div`
  padding: 4rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .box__txt {
    width: 50%;
    display: flex;
    gap: 0.7rem;
    /* height: 10rem; */
    flex-direction: column;
    justify-content: space-between;

    .head_txt {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 700;
      line-height: 33.33px;
      color: #000000;
    }
    .sub_head {
      font-family: Montserrat;
      font-size: 31px;
      font-weight: 700;
      line-height: 51.67px;
      color: #040e53;
    }
    .sub_txt {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      color: #000000;
      /* width: 100%; */
      text-align: justify;
      padding-top: 0.5rem;
    }
    .link {
      width: 15rem;
      .btn_link {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        gap: 0.9rem;
        padding: 0.9rem 1.1rem;
        background: #040e53;

        color: #ffffff;
        border-radius: 0.5rem;
        //styleName: Body/Medium;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 26.67px;
        text-align: left;
        transition: all 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
