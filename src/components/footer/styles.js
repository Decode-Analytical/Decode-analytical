import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;
  background: #030b42;
  color: #ffffff;
  width: 100%;
  padding: 7rem 5rem 5rem 5rem;
  font-family: Montserrat;

  .links_box {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .Links {
    display: flex;
    justify-content: space-between;
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    /* justify-content: space-between; */
  }
  .box-word {
    padding: 0 5rem 5rem 0;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .link {
    font-size: 13px;
    /* font-weight: 700; */
  }
  .word {
    display: flex;
    gap: 0.8rem;
  }

  .footer-logo {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
  }
  .logos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .icons {
    display: flex;
    gap: 0.7rem;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  .app {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .app__logo {
      display: flex;
      gap: 1.5rem;
    }
  }
`;
