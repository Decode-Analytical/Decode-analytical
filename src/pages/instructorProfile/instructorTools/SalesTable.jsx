import React from "react";
import DataTable from "react-data-table-component";
// import { customStyles } from "../../../utils/table-actions/CustomTableStyles";
// import { TableData } from "../../../utils/Constants";
import stack from "../../../assets/instructorProfileImages/sales.svg";
import { customStyles } from "../../../utils/table-actions/CustomTableStyles";

const SalesTable = ({ data }) => {
  const columns = [
    {
      // name: "Course",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img src={stack} alt="stack" className="w-5" />
          {row.course}
        </div>
      ),
      grow: 2,
    },
    {
      name: "Date",
      cell: (row) => (
        <div>
          {/* {format(new Date(row.createdAt), "MM/dd/yyyy")} */}
          {row.date}
        </div>
      ),
      center: true,
    },
    {
      name: "Price",
      cell: (row) => <div>${row.price}</div>,
      center: true,
    },
    {
      name: "Enrolled",
      cell: (row) => <div>{row.enrolled} students</div>,
      center: true,
    },
    {
      name: "Total Income",
      cell: (row) => <div>${row.totalIncome}</div>,
      center: true,
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        customStyles={customStyles}
        data={data}
        // pagination={false}
      />
    </>
  );
};

export default SalesTable;
