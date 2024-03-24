export const baseURL = "https://decode-mnjh.onrender.com/api";

const urls = {
  studentLogin: `${baseURL}/user/login`,
  adminLogin: `${baseURL}/admin/adminSignIn`,
  adminOwnedCourses: `${baseURL}/course/viewCourse`,
  adminOwnedSession: `${baseURL}/admin/getRoomId`,
  adminGetBalance: `${baseURL}/wallet/getBalance`,
  adminTransfer: `${baseURL}/wallet/transfer`,
  adminGetTransfers: `${baseURL}/wallet/getWithdrawal`,
  adminGetEarnings: `${baseURL}/admin/adminTotalEarnings`,
  adminGetAllRegStudents: `${baseURL}/admin/adminViewTotalStudentRegistered`,
  adminGetCourseVisit: `${baseURL}/admin/adminDailyCourseVisitCount`,
  adminGetAllReviews: `${baseURL}/course/review`,
};
export default urls;
