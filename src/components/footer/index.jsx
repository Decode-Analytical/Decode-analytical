import React from "react";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";
import WorldImg from '../../assets/world.png'
import logo from '../../assets/logo.png'
import x from '../../assets/x.png';
import fb from '../../assets/fb.png';
import lldIn from '../../assets/linkdin.png';
import instgram from '../../assets/instagram.png';
import googlePlay from '../../assets/playstr.png'
import appstore from '../../assets/playstore.png'
const Index = () => {
  const todaysDate = new Date().getFullYear();
  return (
    <Wrapper>
      <section className="Links">
        <div className="links_box">
        <div className="box">
         <Link className="link" to='#'>
         Decode Academy
         </Link>
          
          <Link className="link" to="#">
          Teach on Decode Academy
          </Link>
          <Link className="link" to="#">
          Manage Cookie Preferences
          </Link>
          <Link className="link" to="#">
          Partners
          </Link>
          <Link className="link" to="#">
          Directory
          </Link>
          <Link className="link" to="#">
          About Decode Academy Course
          </Link>
          <Link className="link" to="#">
          Contact us
          </Link>
        </div>
        <div className="box">
         <Link to='#'>
         Careers
         </Link>
          <Link className="link" to="#">
          Blog
          </Link>
          <Link className="link" to="#">
          Tech Blog
          </Link>
          <Link className="link" to="#">
          Professional Certificates
          </Link>
          <Link className="link" to="#">
          Investors
          </Link>
        </div>
        <div className="box">
         <Link to='#'>
         Terms
         </Link>
          
          <Link className="link" to="#">
          Privacy policy
          </Link>
          <Link className="link" to="#">
          Social Impact
          </Link>
          <Link className="link" to="#">
          Accreditation
          </Link>
          <Link className="link" to="#">
          Cookie settings
          </Link>
          <Link className="link" to="#">
          Privacy
          </Link>
          <Link className="link" to="#">
          Discover Careers
          </Link>
        </div>
        </div>
        <div className="box-word">
         <Link className="link word" to='#'>
          <img src={WorldImg}/>
         English
         </Link>
          
          <p>
          © {todaysDate || "2024 "} Decode Academy
          </p>
        </div>
      </section>
      <section className="footer-logo">
        <div className="logos">
          <div className="logo" >
            <Link to='/'>
            <img src={logo}/></Link>
            <div className="txt">
              <Link to='#'><p>Customer Support</p></Link>
              <Link to='#'> <p>FAQs</p></Link>
            </div>
          </div>
          <div className="icons">
          <Link to='#'>
            <img src={lldIn} className="icon"/></Link>
          <Link to='#'>
            <img src={fb} className="icon"/></Link>
          <Link to='#'>
            <img src={instgram} className="icon"/></Link>
          <Link to='#'>
            <img src={x} className="icon"/></Link>
          </div>
          
        </div>
        <div className="app">
          <p>Rated</p>
          <div className="app__logo">
            <Link><img src={appstore} className=" "/></Link>
            <Link><img src={googlePlay} className=" "/></Link>
          </div>
          <p>
          © Decode Academy {todaysDate || "2024 "} 
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
