import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Add this at the top


export default function StatCard({
    title,
    titleLink = null,
    value,
    icon,
    warning = false, 
    className = "",
    bgColor = "bg-red-gradient",
    duration = 1000
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value, 10);
        if (start === end) return;

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
            <div className={`card stat-card ${className} text-white ${bgColor} shadow`}>
                <div className="card-body d-flex justify-content-between align-items-center py-2 px-3">
                    <div>
                        {titleLink ? (
                            <h6 className="stat-title stat-link mb-3">
                                <a
                                    href={titleLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-with-icon"
                                >
                                    {title}
                                    <FaArrowRight className="ms-2" />
                                    </a>
                            </h6>
                        ) : (
                            <h6 className="card-title mb-3">{title}</h6>
                        )}

                        <p className="fs-3 fw-bold mb-0">{count}
                            
                        </p>
                        {/* Warning message */}
                        {warning && (
                            <small className="text-warning d-block mt-1">
                                ⚠ Low blood stock
                            </small>
                        )}
                    </div>
                    <div className="fs-2">{icon}</div>
                </div>
            </div>
        </div>
    );
}