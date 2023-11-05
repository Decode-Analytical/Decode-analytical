import { useLogout } from "../../hooks/useLogout";
import "../homepage/index.css";
import BecomeTutor from "../../components/homepageComponents/BecomeTutor";
import TutorComponent from "../../components/homepageComponents/TutorComponent";
import Hero from "../../components/homepageComponents/Hero";
import Course from "../../components/homepageComponents/Course";


export default function Homepage() {
  const { logout } = useLogout();


  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <main className="font-montserrat">
      <button onClick={handleLogout}>LogOut</button>
      <Hero />
      <Course />
      <TutorComponent />
      <BecomeTutor />
    </main>
  );
}
