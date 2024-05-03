export const baseURL = "https://decode-mnjh.onrender.com/api";
// export const baseURL = "https://server-eight-beige.vercel.app/api";

const urls = {
  studentLogin: `${baseURL}/user/login`,
  adminLogin: `${baseURL}/admin/adminSignIn`,
  adminProfile: `${baseURL}/user/viewProfile`,
  adminOwnedCourses: `${baseURL}/course/viewCourse`,
  adminOwnedSession: `${baseURL}/admin/getRoomId`,
  adminGetBalance: `${baseURL}/wallet/getBalance`,
  adminTransfer: `${baseURL}/wallet/transfer`,
  adminGetTransfers: `${baseURL}/wallet/getWithdrawal`,
  adminGetEarnings: `${baseURL}/admin/adminTotalEarnings`,
  adminCreatePin: `${baseURL}/pin/generatePin`,
  adminResetPin: `${baseURL}/pin/updatePin`,
  adminForgotPin: `${baseURL}/pin/forgotPin`,
  adminGetAllRegStudents: `${baseURL}/admin/adminViewTotalStudentRegistered`,
  adminGetTotalRegStudents: `${baseURL}/student/studentPaidCount`,
  adminGetCourseVisit: `${baseURL}/admin/adminDailyCourseVisitCount`,
  adminProfileUpdate: `${baseURL}/user/userUpdateProfile`,
  adminImageUpdate: `${baseURL}/user/studentUpdate`,
  adminValidateAccount: `${baseURL}/wallet/verifyAccountName`,
  adminGetAllReviews: `${baseURL}/course/review`,
  adminAddNewCourse: `${baseURL}/course/registeredCourse`,
  adminCreateLiveSession: `${baseURL}/admin/adminScheduleMeeting`,
  adminEarningsChart: `${baseURL}/admin/adminWeeklyMonthlyAndYearlyEarnings`,
  adminWithdrawalsChart: `${baseURL}/admin/adminWeeklyMonthlyAndYearlyWithdrawals`,
  adminViewCourseById: (requestId) =>
    `${baseURL}/course/getViewCourseById/${requestId}`,
  adminDeleteCourseById: (requestId) =>
    `${baseURL}/course/deleteCourse/${requestId}`,
};
export default urls;
