import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { FaArrowRight } from "react-icons/fa"; // Add this at the top


export default function LineChartCard({
    title,
    titleLink = null,
    data,
    xKey = "month",
    yKey = "donations",
    strokeColor = "#b30000",
    className = ""
}) {
    return (
        <div className={`card chart-card shadow-sm ${className}`}>
            {titleLink ? (<h5 className="chart-title chart-link">
                <a 
                    href={titleLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-with-icon"
                >
                        {title}
                        <FaArrowRight className="ms-2" />
                </a>
            </h5>
            ) : (
                <h5 className="chart-title">{title}</h5>
            )}
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={xKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={yKey} stroke={strokeColor} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
