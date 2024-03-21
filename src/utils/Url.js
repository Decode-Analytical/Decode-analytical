export const baseUrl = "https://decode-mnjh.onrender.com/api";

const urls = {
  adminOwnedCourses: `${baseUrl}/course/viewCourse`,
  adminOwnedSession: `${baseUrl}/admin/getRoomId`,
  adminGetBalance: `${baseUrl}/wallet/getBalance`,
  adminTransfer: `${baseUrl}/wallet/transfer`,
  adminGetTransfers: `${baseUrl}/wallet/getWithdrawal`,
  adminGetEarnings: `${baseUrl}/admin/totalSales`,
  adminGetAllRegStudents: `${baseUrl}/admin/adminViewTotalStudentRegistered`,
  adminGetCourseVisit: `${baseUrl}/admin/adminDailyCourseVisitCount`,
  adminGetAllReviews: `${baseUrl}/course/review`,
};
export default urls;
