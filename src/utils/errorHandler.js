import { ErrorToast } from "./toast";

const displayedErrors = {};

const handleErrorResponse = (error) => {
  let errorMessage = "An error occurred. Please try again later.";

  if (error.response) {
    switch (error.response.status) {
      case 400:
        errorMessage = "Bad request. Please try again.";
        break;
      case 401:
        errorMessage = "Your session has expired. Please log in again.";
        break;
      case 403:
        errorMessage = "Access forbidden. Please contact support.";
        break;
    }
  }

  if (!displayedErrors[errorMessage]) {
    ErrorToast(errorMessage);
    displayedErrors[errorMessage] = true;

    setTimeout(() => {
      delete displayedErrors[errorMessage];
    }, 5000);
  }
};

export default handleErrorResponse;
