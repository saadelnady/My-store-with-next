import React from "react";

const Table = ({ cols, rows, data }) => {
  return (
    <div className="custom-table overflow-x-auto">
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.key} className="t-head">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              {rows.map((row) => (
                <td key={row.key} className="td">
                  {row.render ? row.render(item) : item[row.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
