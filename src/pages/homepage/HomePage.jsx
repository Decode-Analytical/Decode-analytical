import "../homepage/index.css";
import BecomeTutor from "../../components/homepageComponents/BecomeTutor";
import TutorComponent from "../../components/homepageComponents/TutorComponent";
import Hero from "../../components/homepageComponents/Hero";
import Course from "../../components/homepageComponents/Course";


export default function Homepage() {

  return (
    <main className="font-montserrat">
      <Hero />
      <Course />
      <TutorComponent />
      <BecomeTutor />
    </main>
  );
}
