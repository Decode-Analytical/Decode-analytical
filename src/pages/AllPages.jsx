import React from "react";
import { Link } from "react-router-dom";
// import PaystackCard from '../components/cartAndPaymentComponents/PaystackCard';

export default function AllPages({ close }) {
  return (
    <div className="text-center h-full bg-white flex w-full flex-col justify-center box-border
    overflow-hidden items-center animate-slidesTop">
      <Link to="/">
        {" "}
        <button type="button" onClick={close}>
          HOME
        </button>
      </Link>{" "}
      <br />
      <Link to="/login">
        {" "}
        <button type="button" onClick={close}>
          LoginSignUp
        </button>
      </Link>{" "}
      <br />
      <Link to="/resetpassword">
        {" "}
        <button type="button" onClick={close}>
          PasswordReset
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/CartPage">
        {" "}
        <button type="button" onClick={close}>
          CartPage
        </button>{" "}
      </Link>
      <br />
      <Link to="/PaymentPage">
        {" "}
        <button type="button" onClick={close}>
          PaymentPage
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/Dashboard">
        {" "}
        <button type="button" onClick={close}>
          Dashboard
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/EnrolledCourses">
        {" "}
        <button type="button" onClick={close}>
          Enrolled Courses
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/ForumIntro">
        {" "}
        <button type="button" onClick={close}>
          ForumIntro
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/InForumReply">
        {" "}
        <button type="button" onClick={close}>
          InForumReply
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/WeeklyForumPage">
        {" "}
        <button type="button" onClick={close}>
          WeeklyForumPage
        </button>{" "}
      </Link>{" "}
      <br />
      {/* <Link to="/dashboard">
            dashboard
        </Link> <br /> */}
      <Link to="/mycourses">
        {" "}
        <button type="button" onClick={close}>
          mycourses
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/Courses">
        {" "}
        <button type="button" onClick={close}>
          Courses
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/profile/*">
        {" "}
        <button type="button" onClick={close}>
          profile
        </button>{" "}
        /*
      </Link>{" "}
      <br />
      <Link to="/PurchasedPage">
        {" "}
        <button type="button" onClick={close}>
          PurchasedPage
        </button>{" "}
      </Link>{" "}
      <br />
      <Link to="/InstrucructorProfile">
        {" "}
        <button type="button" onClick={close}>
          Instructor profile
        </button>{" "}
      </Link>
      <br />
      <Link to="/courseinfo">
        {" "}
        <button type="button" onClick={close}>
          course Upload
        </button>
      </Link>
    </div>
  );
}
