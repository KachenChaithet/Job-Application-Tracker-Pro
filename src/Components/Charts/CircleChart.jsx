import { Doughnut } from "react-chartjs-2"
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useOutletContext } from "react-router-dom"
import { apiDashbord } from "../../utils/apiDashbord"

ChartJS.register(ArcElement, Tooltip, Legend)

const CircleChart = () => {
    const { job, FetchJobAll } = useOutletContext()

    const chartValues = apiDashbord({ data: job })


    const lebel = [
        chartValues.Pending,
        chartValues.Interview,
        chartValues.Offer,
        chartValues.Rejected,
    ]

    const chartData = {
        labels: chartValues.label,
        datasets: [
            {
                label: 'Job Status',
                data: lebel,
                backgroundColor: ['#36A2EB', '#FFCE56', '#3CB371', '#FF6384'],
                borderWidth: 1,
            },
        ],
    }

    const chartOptions = {
        plugins: {
            legend: { display: false },  // ❌ ซ่อน legend
        }
    }

    return (
        <div className="w-[50%] border border-[#e5e5e5] rounded-md  h-[500px] flex flex-col justify-between p-8">
            <h1 className="font-medium text-[20px]">Application Status Distribution</h1>
            <div className="h-[70%] w-full flex justify-center">
                <Doughnut data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

export default CircleChart
