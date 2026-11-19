import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BudgetWheel({ total, spent }) {
    const remaining = total - spent;

    const data = {
        labels: ["Spent", "Remaining"],
        datasets: [
            {
                data: [spent, remaining],
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    return (
        <div style={{ height: 300, width: 300 }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}