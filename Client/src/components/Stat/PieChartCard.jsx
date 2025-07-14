import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function PieChartCard({
    title,
    data,
    dataKey = "value",
    nameKey = "name",
    colors,
    className = ""
}) {
    const renderLabel = ({ name }) => name;

    return (
        <div className={`card chart-card shadow-sm ${className}`}>
            <h5 className="chart-title">{title}</h5>

            <div className="chart-container pie-flex-layout">
                {/* Pie Chart */}
                <div className="pie-wrapper">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius="70%"
                                label={renderLabel}
                                dataKey={dataKey}
                                nameKey={nameKey}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Side Legend */}
                <ul className="custom-legend">
                    {data.map((entry, index) => (
                        <li key={index}>
                            <span
                                className="legend-color"
                                style={{ backgroundColor: colors[index % colors.length] }}
                            ></span>
                            {entry[nameKey]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
