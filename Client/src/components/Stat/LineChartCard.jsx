import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

export default function LineChartCard({
    title,
    data,
    xKey = "month",
    yKey = "donations",
    strokeColor = "#b30000",
}) {
    return (
        <div className="card chart-card p-3 h-100 shadow-sm">
            <h5>{title}</h5>
            <LineChart width={400} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={yKey} stroke={strokeColor} strokeWidth={2} />
            </LineChart>
        </div>
    );
}