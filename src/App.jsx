import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/homeComponents/navbar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import LoginSignUp from "./pages/login/LoginSignUp";
import PasswordReset from "./components/loginComponents/PasswordReset";

import PremiumCourses from "./pages/courseDetailPage/PremiumCourses";
// import FreeCourses from "./pages/courseDetailPage/FreeCourses";
import CartPage from "./pages/cartAndPaymentPage/CartPage";
import PaymentPage from "./pages/cartAndPaymentPage/PaymentPage";
import NotEnrolled from "./pages/forumPage/NotEnrolled";
import ForumIntro from "./pages/forumPage/ForumIntro";
import InForumReply from "./pages/forumPage/InForumReply";
import WeeklyForumPage from "./pages/forumPage/WeeklyForumPage";
import Profile from "./pages/profile/Profile";
import MyCourse from "./pages/MyCourse/MyCourse";
import PurchasedPage from "./pages/purchsedPages/PurchasedPage";
import AllPages from "./pages/AllPages";
import InstrucructorProfile from "./pages/instructorProfile/InstrucructorProfile";
import Courses from "./pages/courses/Courses";
import Signin from "./pages/authetication/Signin";
import Password from "./pages/authetication/Password";
import Auth from "./pages/authetication/Auth";
import Individual from "./pages/authetication/Individual";
import InstructorProfile from "./pages/homepage/InstructorProfile";
// import ResetPassword from "./pages/authetication/ResetPassword";
// import Nysc from "./pages/authetication/Nysc";
import FreeCourses from "./pages/courseDetailPage/FreeCourses";
// import FreeCourse

import NewModules from "./pages/courseUpload/NewModule";
import NewCourse from "./pages/courseUpload/NewCourse";

import CourseInfo from "./pages/courseUpload/CourseInfo";
import ResetPassword from "./pages/authetication/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Nysc from "./pages/authetication/Nysc";
import CourseOverview from "./components/coursesComponents/premium/CourseOverview";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import NoAuthPage from "./pages/NoAuth/noAuthPage";
import AdminLogin from "./pages/AdminLogin/adminLogin";
import PaystackCard from "./components/cartAndPaymentComponents/PaystackCard";
<<<<<<< HEAD
import Search from "./pages/Search/Search";
=======
import ScheduleMeeting from "./pages/scheduleMeeting/ScheduleMeeting";
>>>>>>> b91f6bdb0f39cd54437b0538563629adfb6e5df4

function App() {
  return (
    <div className="App font-montserrat">
      <Router>
        <div className=" flex justify-between relative">
          <div className="flex-1">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/LoginSignUp" element={<LoginSignUp />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />
              <Route path="/FreeCourses" element={<FreeCourses />} />
              <Route path="/premiumCourses/:_id" element={<PremiumCourses />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/PaymentPage" element={<PaymentPage />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/NotEnrolled" element={<NotEnrolled />} />
              <Route path="/ForumIntro" element={<ForumIntro />} />
              <Route path="/InForumReply" element={<InForumReply />} />
              <Route path="/WeeklyForumPage" element={<WeeklyForumPage />} />
              <Route path="/mycourses" element={<MyCourse />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/PurchasedPage" element={<PurchasedPage />} />
              <Route
                path="/InstrucructorProfile"
                element={<InstrucructorProfile />}
              />
              <Route path="/Courses" element={<Courses />} />
              <Route path="/nysc" element={<Nysc />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/forgetpassword" element={<Password />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/individual" element={<Individual />} />
              <Route path="/tutor/:id" element={<InstructorProfile />} />
              <Route path="/courseinfo" element={<CourseInfo />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              {/*===========>>>>>> this will be removed, not part of the code. it is just so we can navigate all pages  */}
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/noAuth" element={<NoAuthPage />} />
              <Route path="/newmodule/:courseId" element={<NewModules />} />
              <Route path="/newcourse" element={<NewCourse />} />
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
              <Route path="/PaystackCard/:price" element={<PaystackCard />} />
<<<<<<< HEAD
              <Route path="/AllPages" element={<AllPages />} /> {/*===========>>>>>> this will be removed, not part of the code. it is just so we can navigate all pages  */}
              <Route path="/Search/:term" element={<Search />} />
=======
              <Route path="/AllPages" element={<AllPages />} />{" "}
              <Route path="/schedulemeeting" element={<ScheduleMeeting />} />
              {/*===========>>>>>> this will be removed, not part of the code. it is just so we can navigate all pages  */}
>>>>>>> b91f6bdb0f39cd54437b0538563629adfb6e5df4
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
