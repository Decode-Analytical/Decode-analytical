import React from 'react'
import { Link } from "react-router-dom";


export default function AllPages() {
  return (
    <div className=' text-center'>
        <Link to="/">
            HOME
        </Link> <br />

        <Link to="/LoginSignUp">
            LoginSignUp
        </Link> <br />

        <Link to="/PasswordReset">
            PasswordReset
        </Link> <br />

        <Link to="/FreeCourses">
            FreeCourses
        </Link> <br />

        

        <Link to="/PremiumCourses">
            PremiumCourses
        </Link> <br />

        <Link to="/CartPage">
            CartPage
        </Link><br />

        <Link to="/PaymentPage">
            PaymentPage
        </Link> <br />

        <Link to="/Dashboard">
            Dashboard
        </Link> <br />

        <Link to="/NotEnrolled">
            NotEnrolled
        </Link> <br />

        <Link to="/ForumIntro">
            ForumIntro
        </Link> <br />

        <Link to="/InForumReply">
         InForumReply
        </Link> <br />

        <Link to="/WeeklyForumPage">
            WeeklyForumPage
        </Link> <br />

        {/* <Link to="/dashboard">
            dashboard
        </Link> <br /> */}

        <Link to="/mycourses">
            mycourses
        </Link> <br />

        <Link to="/profile/*">
            profile/*
        </Link> <br />

        <Link to="/PurchasedPage">
            PurchasedPage
        </Link> <br />

        <Link to="">
        
        </Link>
    </div>
  )
}
