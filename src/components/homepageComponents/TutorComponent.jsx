import React, { useEffect, useState } from "react";
import Tutor from "./Tutor";
import { useAuthContext } from "../../hooks/authContext";

export default function TutorComponent() {
  const { user } = useAuthContext();

  const [tutor, setTutor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutor = async () => {
      const response = await fetch(
        "https://decode-mnjh.onrender.com/api/admin/viewAllInstructors",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setTutor(json.instructors);
      }
    };
    if (user) {
      fetchTutor();
    }
  }, [user]);


  return (
    <section className=" text-center bg-slate-100 py-28 text-[20px]  px-[10%]">
      <h6 className="font-bold text-base">Amazing Stories</h6>
      <h5 className="font-bold text-[23px]">FEEDBACKS FROM LEARNERS</h5>
      <p className="mb-10 text-lg">
        Join Decode Analytical now to unlock a world of knowledge and
        skill-building. Become part of our community, learn from experts, and
        later share your inspiring success story!
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {tutor &&
          tutor.map((tutors) => {
            return <Tutor key={tutors._id} firstName={tutors.firstName}
            lastName={tutors.lastName}
            id={tutors._id}
            picture={tutors.picture}
            comment={tutors.comments}
             />;
          })}
        <Tutor />
      </div>
    </section>
  );
}
