export const configOptions = () => {
  if (typeof window === "undefined") return true;

  if (!window.localStorage.getItem("user")) return false;

  const accessToken = JSON.parse(window.sessionStorage.getItem("user")).token;

  if (!!accessToken) {
    return accessToken;
  }
};
