export const baseURL = "https://decode-mnjh.onrender.com/api";
// export const baseURL = "https://server-eight-beige.vercel.app/api";

const urls = {
  studentLogin: `${baseURL}/user/login`,
  adminLogin: `${baseURL}/admin/adminSignIn`,
  adminProfile: `${baseURL}/user/viewProfile`,
  adminOwnedCourses: `${baseURL}/course/viewCourse`,
  adminOwnedSession: `${baseURL}/admin/tutorViewOwnMeetings`,
  adminGetBalance: `${baseURL}/wallet/getBalance`,
  adminTransfer: `${baseURL}/wallet/transfer`,
  adminGetTransfers: `${baseURL}/wallet/getWithdrawal`,
  adminGetEarnings: `${baseURL}/admin/adminTotalEarnings`,
  adminCreatePin: `${baseURL}/pin/generatePin`,
  adminResetPin: `${baseURL}/pin/updatePin`,
  adminForgotPin: `${baseURL}/pin/forgotPin`,
  adminGetRegStudentsForTutor: `${baseURL}/student/totalStudentRegisteredForAdminCourse`,
  adminGetTotalRegStudents: `${baseURL}/student/studentPaidCount`,
  adminViewCourseSales: `${baseURL}/admin/totalSales`,
  adminViewSessionSales: `${baseURL}/admin/tutorViewSales`,
  adminGetCourseVisit: `${baseURL}/admin/adminDailyCourseVisitCount`,
  adminCourseWeeklyAnalytics: `${baseURL}/admin/adminWeeklyCourseSalesAnalytics`,
  adminCourseMonthlyAnalytics: `${baseURL}/admin/adminMonthlyCourseSalesAnalytics`,
  adminProfileUpdate: `${baseURL}/user/userUpdateProfile`,
  adminImageUpdate: `${baseURL}/user/studentUpdate`,
  adminValidateAccount: `${baseURL}/wallet/verifyAccountName`,
  adminGetAllReviews: `${baseURL}/course/review`,
  adminCreateLiveSession: `${baseURL}/admin/adminScheduleMeeting`,
  adminEarningsChart: `${baseURL}/admin/adminWeeklyMonthlyAndYearlyEarnings`,
  adminWithdrawalsChart: `${baseURL}/admin/adminWeeklyMonthlyAndYearlyWithdrawals`,
  adminViewCourseById: (requestId) =>
    `${baseURL}/course/getViewCourseById/${requestId}`,
  adminDeleteCourseById: (requestId) =>
    `${baseURL}/course/deleteCourse/${requestId}`,
};
export default urls;
