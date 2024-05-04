import { useState, useMemo } from "react";
import axios from "axios";
import urls from "../utils/Url";
import handleErrorResponse from "../utils/errorHandler";

const useFetchData = (url, initialData) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const token = useMemo(() => {
    return JSON.parse(localStorage.getItem("user")).token;
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // if (!response) {
      //   return;
      // }
      if (response.status === 200 || response.status === 201)
        setData(response?.data);
    } catch (error) {
      handleErrorResponse(error);
      setError(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, error };
};

export const useFetchAdminProfile = () => {
  return useFetchData(urls.adminProfile, []);
};
export const useFetchAdminCourses = () => {
  return useFetchData(urls.adminOwnedCourses, []);
};

export const useFetchAdminSessions = () => {
  return useFetchData(urls.adminOwnedSession, []);
};
export const useFetchCourseSales = () => {
  return useFetchData(urls.adminViewCourseSales, {});
};
export const useFetchSessionSales = () => {
  return useFetchData(urls.adminViewSessionSales, {});
};

export const useFetchBalance = () => {
  return useFetchData(urls.adminGetBalance, 0);
};

export const useFetchTransfers = () => {
  return useFetchData(urls.adminGetTransfers, 0);
};

export const useFetchEarnings = () => {
  return useFetchData(urls.adminGetEarnings, 0);
};
export const useFetchEarningsChart = () => {
  return useFetchData(urls.adminEarningsChart, {});
};
export const useFetchWithdrawalsChart = () => {
  return useFetchData(urls.adminWithdrawalsChart, {});
};

export const useFetchRegStudents = () => {
  return useFetchData(urls.adminGetRegStudentsForTutor, 0);
};
export const useFetchTotalRegStudents = () => {
  return useFetchData(urls.adminGetTotalRegStudents, 0);
};

export const useFetchCourseVisit = () => {
  return useFetchData(urls.adminGetCourseVisit, 0);
};

export const useFetchReviews = () => {
  return useFetchData(urls.adminGetAllReviews, 0);
};
export const useFetchAboutMe = () => {
  return useFetchData(urls.adminGetAboutMe, "");
};

export const useFetchCourseById = (id) => {
  return useFetchData(urls.adminViewCourseById(id), {});
};
export const useFetchWeeklyAnalytics = () => {
  return useFetchData(urls.adminCourseWeeklyAnalytics, {});
};
export const useFetchMonthlyAnalytics = () => {
  return useFetchData(urls.adminCourseMonthlyAnalytics, {});
};
