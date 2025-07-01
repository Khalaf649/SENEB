import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartCard({ title, data, dataKey="value" , nameKey="name", colors}) {
    const renderLabel = ({ name }) => name;

    return (
        <div className="card chart-card p-3 h-100 shadow-sm">
            <h5>{title}</h5>
            <PieChart width={400} height={300}>
                <Pie data={data}
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100} 
                    label={renderLabel}
                    dataKey={dataKey} 
                    nameKey={nameKey}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}