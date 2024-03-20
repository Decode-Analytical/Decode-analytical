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

export const useFetchAdminSessions = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [sessions, setSessions] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchSessions = async () => {
    setIsloading(true);

    let response;

    try {
      const response = await fetch(urls.adminOwnedSession, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.sessions) {
        setSessions(data.sessions);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };
  return { fetchSessions, sessions, isLoading, error };
};

export const useFetchBalance = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [balance, setBalance] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchBalance = async () => {
    setIsloading(true);

    let response;

    try {
      const response = await fetch(urls.adminGetBalance, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setBalance(data.wallet);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchBalance, balance, isLoading, error };
};

export const useFetchTransfers = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [transfers, setTransfers] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchTransfers = async () => {
    setIsloading(true);

    let response;

    try {
      const response = await fetch(urls.adminGetTransfers, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setTransfers(data.transactions);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchTransfers, transfers, isLoading, error };
};

export const useFetchEarnings = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [earnings, setEarnings] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchEarnings = async () => {
    setIsloading(true);

    try {
      const response = await fetch(urls.adminGetEarnings, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setEarnings(data.totalSales);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchEarnings, earnings, isLoading, error };
};

export const useFetchAllRegStudents = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [allRegStudents, setAllRegStudents] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchAllRegStudents = async () => {
    setIsloading(true);

    try {
      const response = await fetch(urls.adminGetAllRegStudents, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      
      console.log(data, "data");

      if (response.ok) {
        
        setAllRegStudents(data.totalStudents);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchAllRegStudents, allRegStudents, isLoading, error };
};

export const useFetchCourseVisit = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [courseVisit, setCourseVisit] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchCourseVisit = async () => {
    setIsloading(true);

    try {
      const response = await fetch(urls.adminGetCourseVisit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      
      console.log(data);

      if (response.ok) {
        
        setCourseVisit(data.visitCount);
      }
    } catch (error) {
      // setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchCourseVisit, courseVisit, isLoading, error };
};

export const useFetchCoursesCreated = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [coursesCreated, setCoursesCreated] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchCoursesCreated = async () => {
    setIsloading(true);

    try {
      const response = await fetch(urls.adminGetAllCoursesCreated, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      
      console.log(data);
      console.log(data.message, "Message");
      console.log(data.courses.length, "Total");
      const totalCourses = data?.courses.length


      if (response.ok) {
        
        setCoursesCreated(totalCourses);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchCoursesCreated, coursesCreated, isLoading, error };
};

export const useFetchReviews = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [reviews, setReviews] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchReviews = async () => {
    setIsloading(true);

    try {
      const response = await fetch(urls.adminGetAllReviews, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      
      console.log(data);
      console.log(data.message, "Message");
      console.log(data.reviews.length, "Total");
      const totalReviews = data?.reviews.length


      if (response.ok) {
        
        setReviews(totalReviews);
      }
    } catch (error) {
      setError(data.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchReviews, reviews, isLoading, error };
};
