import { useEffect, useState } from "react";

export default function StatCard({ title, value, icon, bgColor = "bg-red-gradient", duration = 1000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value, 10);
        if(start === end) return;

        const incrementTime = Math.floor(duration / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return (
        <div className="col-md-4 mb-3">
            <div className={`card stat-card text-white ${bgColor} shadow`}>
                <div className="card-body d-flex justify-content-between align-items-center py-2 px-3">
                    <div>
                        <h6 className="card-title mb-3">{title}</h6>
                        <p className="fs-3 fw-bold mb-0">{count}</p>
                    </div>
                    <div className="fs-2">{icon}</div>
                </div>
            </div>
        </div>
    );
}
