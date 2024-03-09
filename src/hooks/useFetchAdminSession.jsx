import { useState } from "react";
import urls from "../utils/Url";

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
