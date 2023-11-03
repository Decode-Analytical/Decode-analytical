import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import PaystackCard from '../components/cartAndPaymentComponents/PaystackCard';


export default function AllPages() {
    const[admin, setAdmin] =useState(false)
    useEffect(() => {
        function checkUser() {
            let userLoginData = JSON.parse(localStorage.getItem("user"))
            if (userLoginData?.user.role == "admin") {
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        }
        checkUser()
      }, []);
  return (
    <div className=' text-center'>
        <Link to="/">
            HOME
        </Link> <br />

        <Link to="/login">
            LoginSignUp
        </Link> <br />
        

        <Link to="/resetpassword">
            PasswordReset
        </Link> <br />

        <Link to="/FreeCourses">
            FreeCourses
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

        <Link to="/Courses">
            Courses
        </Link> <br />

        <Link to="/profile/*">
            profile/*
        </Link> <br />

        <Link to="/PurchasedPage">
            PurchasedPage
        </Link> <br />

        <Link to="/InstrucructorProfile">
            Instructor profile
        </Link><br />

         <Link to="/courseinfo">
            course Upload
        </Link>
        {admin && (
            <Link to="/AdminDashboard">
                Admin Dashboard
            </Link>
        )}
    </div>
  )
}
