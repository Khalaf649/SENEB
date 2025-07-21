import React from "react";

export default function DataTable({ columns, data, className = "table", highlightedId = null }) {
    return (
        <div className="table-responsive w-100">
            <table className={className}>
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr
                                key={row.id || rowIndex}
                                className={row.id === highlightedId ? "bg-yellow-100 transition-all duration-500" : ""}
                            >
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>
                                        {col.render
                                            ? col.render(row, rowIndex)
                                            : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="text-center text-muted py-3">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}