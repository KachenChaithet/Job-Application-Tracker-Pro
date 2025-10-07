import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useOutletContext } from "react-router-dom"
import { getLast30DaysData } from "../../utils/apiDashbord"
import moment from "moment"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ApplicationsLineChart = () => {
    const { job } = useOutletContext()

    const last30Days = getLast30DaysData({ data: job })

    const chartData = {
        labels: last30Days.map(d => moment(d.date).format("MMM D")),
        datasets: [
            {
                label: "Pending",
                data: last30Days.map(d => d.Pending),
                borderColor: "#36A2EB",
                backgroundColor: "#36A2EB",
                tension: 0.3, // ทำเส้นโค้งนิดหน่อย
            },
            {
                label: "Interviewing",
                data: last30Days.map(d => d.Interviewing),
                borderColor: "#FFCE56",
                backgroundColor: "#FFCE56",
                tension: 0.3,
            },
            {
                label: "Offer",
                data: last30Days.map(d => d.Offer),
                borderColor: "#00FF00",
                backgroundColor: "#00FF00",
                tension: 0.3,
            },
            {
                label: "Rejected",
                data: last30Days.map(d => d.Rejected),
                borderColor: "#FF6384",
                backgroundColor: "#FF6384",
                tension: 0.3,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 10, // แสดง label สูงสุด 10 ตัว ให้ไม่แน่น
                },
            },
        },
    }

    return (
        <div className="w-[50%]  border border-[#e5e5e5] rounded-md flex flex-col justify-between p-8">
            <h1 className="font-medium text-[20px]">Applications Over Time (30 Days)</h1>
            <div className="h-[70%] w-full flex justify-center">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

export default ApplicationsLineChart
