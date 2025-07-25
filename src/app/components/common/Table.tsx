import React, { ReactNode } from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectedRow?: T;
  onRowClick?: (row: T) => void;
}
const className = {
    wrapper:
      "p-4 w-full text-white h-full rounded-md text-left overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-brand-tertiary scrollbar-track-brand-secondary",
    table: "w-full",
    heading:
      "px-1 text-paragraph py-3 uppercase gradient-brand-primary text-table-header font-semibold text-sm p-2",
    row: "text-paragraph hover:bg-row-highlight cursor-pointer rounded-md",
    data: "px-1 py-1 first:rounded-l-lg last:rounded-r-lg",
  };
  

export const Table = <T,>({ columns, data, selectedRow, onRowClick }: TableProps<T>) => {
  return (
    <div className={className.wrapper}>
    <table className={className.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.accessor)} className={className.heading}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => onRowClick && onRowClick(row)}
            className={
                row === selectedRow
                  ? className.row + " bg-row-highlight"
                  : className.row
              }
          >
            {columns.map((column) => (
              <td key={String(column.accessor)} className={className.data}>
                {row[column.accessor] as ReactNode}
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