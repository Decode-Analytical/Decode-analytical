import React from "react";
import DataTable from "react-data-table-component";
// import { customStyles } from "../../../utils/table-actions/CustomTableStyles";
// import { TableData } from "../../../utils/Constants";
import stack from "../../assets/adminDashboardImages/sales.svg";
import { customStyles } from "../../utils/table-actions/CustomTableStyles";
import { format } from "date-fns";
import Spinner from "../../utils/Spinner";
import { currencyFormatter } from "../../utils/functn";

const SalesTable = ({ isLoading, data, error }) => {
  const columns = [
    {
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img src={stack} alt="stack" className="w-5" />
          {row.course_title}
        </div>
      ),
      grow: 2,
    },
    {
      name: "Date",
      cell: (row) => (
        <div>{format(new Date(row.createdAt), "MMM dd, yyyy")}</div>
      ),
      center: true,
    },
    {
      name: "Price",
      cell: (row) => (
        <div className="text-green1">
          {currencyFormatter(row.isPrice_course)}
        </div>
      ),
      center: true,
    },
    {
      name: "Enrolled",
      cell: (row) => (
        <div>
          {row.totalRegisteredByStudent} student
          {row.totalRegisteredByStudent > 1 && "s"}
        </div>
      ),
      center: true,
    },
    {
      name: "Total Income",
      cell: (row) => (
        <div className="text-green1">
          {currencyFormatter(row.totalRegisteredByStudent * row.isPrice_course)}
        </div>
      ),
      center: true,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="mb-5 font-semibold text-sm">Error fetching data</p>
      ) : (
        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={data}
          // pagination={false}
        />
      )}
    </>
  );
};

export default SalesTable;
