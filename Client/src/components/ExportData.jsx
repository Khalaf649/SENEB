export default function ExportData(filename, data, columns) {
    if (!data || !columns || data.length === 0 || columns.length === 0) {
        console.warn("No data or columns provided for export.");
        return;
    }

    const csvRows = [];

    // Add header row using column labels or keys
    const headers = columns.map(col => col.label || col.key || col.accessor || ""); 
    csvRows.push(headers.join(","));

    // Add data rows
    data.forEach(row => {
        const values = columns.map(col => {
            let cell = row[col.key || col.accessor];

            // Convert undefined/null to empty string
            if (cell === undefined || cell === null) cell = "";

            // Escape quotes and commas
            if (typeof cell === "string") {
                cell = `"${cell.replace(/"/g, '""')}"`;
            }

            return cell;
        });
        csvRows.push(values.join(","));
    });

    // Create CSV content
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Trigger download
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
