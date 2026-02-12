import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  className?: string;
}

export function Table<T extends { id: string }>({ 
  data, 
  columns, 
  onRowClick,
  className = '' 
}: TableProps<T>) {
  console.log("Table props:", { data, columns });

  const getCellValue = (row: T, column: Column<T>) => {
    const value =
      typeof column.accessor === "function"
        ? column.accessor(row)
        : (row[column.accessor] as React.ReactNode);
    console.log("Cell value:", value);
    return value;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse" role="table">
        <thead>
          <tr className="bg-muted-bg border-b border-muted-light">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`text-left p-4 font-medium text-muted-dark ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row)}
              className={`
                border-b border-muted-light
                ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-muted-bg/30'}
                ${onRowClick ? 'cursor-pointer hover:bg-primary/5' : ''}
                transition-colors
              `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-4 ${column.className || ''}`}
                >
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
