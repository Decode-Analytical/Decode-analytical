import { useState } from "react";
import urls from "../utils/Url";
import axios from "axios";
import handleErrorResponse from "../utils/errorHandler";

export const useFetchAdminCourses = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [courses, setCourses] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchCourses = async () => {
    setIsloading(true);

    try {
      const response = await axios.get(urls.adminOwnedCourses, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.courses) {
        setCourses(response?.data?.courses);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
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

    try {
      const response = await axios.get(urls.adminOwnedSession, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.meeting) {
        setSessions(response?.data?.meeting);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
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

    try {
      const response = await axios.get(urls.adminGetBalance, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data && response.data.wallet) {
        setBalance(response?.data?.wallet);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchBalance, balance, isLoading, error };
};

export const useFetchTransfers = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [transfers, setTransfers] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchTransfers = async () => {
    setIsloading(true);

    try {
      const response = await axios.get(urls.adminGetTransfers, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.totalWithdrawal) {
        setTransfers(response?.data?.totalWithdrawal);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
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
      const response = await axios.get(urls.adminGetEarnings, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.totalEarnings) {
        setEarnings(response?.data?.totalEarnings);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
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
      const response = await axios.get(urls.adminGetAllRegStudents, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.totalStudents) {
        setAllRegStudents(response?.data?.totalStudents);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
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
      const response = await axios.get(urls.adminGetCourseVisit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.visitCount) {
        setCourseVisit(response?.data?.visitCount);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchCourseVisit, courseVisit, isLoading, error };
};

export const useFetchReviews = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [reviews, setReviews] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchReviews = async () => {
    setIsloading(true);

    try {
      const response = await axios.get(urls.adminGetAllReviews, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const totalReviews = response?.data?.reviews.length;

      if (response.data && response.data.reviews) {
        setReviews(totalReviews);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchReviews, reviews, isLoading, error };
};

export const useFetchCourseById = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [course, setCourse] = useState(0);

  const token = JSON.parse(localStorage.getItem("user")).token;

  const fetchCourse = async (id) => {
    setIsloading(true);

    try {
      const response = await axios.get(urls.adminViewCourseById(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.course) {
        setCourse(response.data.course);
      }
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
    } finally {
      setIsloading(false);
    }
  };

  return { fetchCourse, course, isLoading, error };
};
