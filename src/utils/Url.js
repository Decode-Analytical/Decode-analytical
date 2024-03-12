export const baseUrl = "https://decode-mnjh.onrender.com/api";

const urls = {
  adminOwnedCourses: `${baseUrl}/course/viewCourse`,
  adminOwnedSession: `${baseUrl}/admin/getRoomId`,
  adminGetBalance: `${baseUrl}/wallet/getBalance`,
  adminGetTransfers: `${baseUrl}/wallet/getTransactions`,
  adminGetEarnings: `${baseUrl}/admin/totalSales`,
};
export default urls;
