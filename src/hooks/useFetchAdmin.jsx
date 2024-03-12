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
