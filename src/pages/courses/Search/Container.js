import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5rem 3rem;
  /* width: 100vw; */

  &__filter {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Source Sans Pro;
    /* border: 1px solid grey; */

    .check_box {
      display: flex;
      align-items: center;
      margin-left: -0.5rem;
      padding-bottom: 0.4rem;
      /* width: 100%; */

      .check {
        width: 2rem;
        height: 1.1rem;
      }
      label {
        font-size: 0.99rem;
        width: 100%;
      }
    }

    &--heading {
      font-family: Source Sans Pro;
      font-size: 20px;
      font-weight: 600;
      color: #020625;
      margin-bottom: 1rem;
    }
    .txt {
      color: #020625;
      font-family: Source Sans Pro;
      font-size: 16px;
      font-weight: 600;
      padding-bottom: 0.6rem;
    }
    .btn_showMore {
      color: #040e53;
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
  &__result {
    /* border: 1px solid black; */
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    place-items: center;
    grid-column-gap: 15px;
    grid-row-gap: 70px;
    /* padding: 4rem; */
    /* gap: 1rem; */

    .card {
      /* margin-top: 4rem; */
      height: 500px;
      width: 20rem;
      padding: 1rem;
      border-radius: 1.2rem;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0px 1.64px 8.18px 1.64px #00000029;

      &__image {
        border-radius: 1.2rem;
        height: 45%;
        width: 100%;
        // border: 1px solid grey;
      }
      &__heading {
        font-family: Montserrat;
        font-size: 26px;
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
        gap: 3rem;

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
        padding: 0 1rem;

        p {
          font-family: Montserrat;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .enroll-btn {
          padding: 0.5rem 3rem;
          background: #040e53;
          color: #ffffff;
          border-radius: 0.7rem;
        }
      }
    }
  }
`;
