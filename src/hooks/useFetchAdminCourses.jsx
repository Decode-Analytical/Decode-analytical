import { useState } from "react";
import urls from "../utils/Url";

export const useFetchAdminCourses = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [courses, setCourses] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchCourses = async () => {
    setIsloading(true);

    let response;

    try {
      const response = await fetch(urls.adminOwnedCourses, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.courses) {
        setCourses(data.courses);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };
  return { fetchCourses, courses, isLoading, error };
};
