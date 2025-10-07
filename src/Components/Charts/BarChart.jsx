import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { useOutletContext } from "react-router-dom"
import { apiDashbord } from "../../utils/apiDashbord"




ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
    const { job, FetchJobAll } = useOutletContext()

    const chartValues = apiDashbord({ data: job })


    const lebel = [
        chartValues.Pending,
        chartValues.Interview,
        chartValues.Offer,
        chartValues.Rejected,
    ]


    return (
        <div className="w-full border border-[#e5e5e5] rounded-md p-6 h-[500px]">
            <Bar
                data={{
                    labels: chartValues.label,
                    datasets: [
                        {
                            label: 'Job',
                            data: lebel,
                            backgroundColor: ['#36A2EB', '#FFCE56', '#3CB371', '#FF6384'],
                        },
                    ]
                }}
            />
        </div>
    )
}

export default BarChart
