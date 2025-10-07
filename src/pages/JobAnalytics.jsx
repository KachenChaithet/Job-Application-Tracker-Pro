import { useOutletContext } from "react-router-dom"
import BarChart from "../Components/Charts/BarChart"
import CircleChart from "../Components/Charts/CircleChart"
import { apiDashbord, getLast30DaysData } from "../utils/apiDashbord"
import { color } from "chart.js/helpers"
import ApplicationsLineChart from "../Components/Charts/LineChart"

const JobAnalytics = () => {
    const { job, FetchJobAll } = useOutletContext()

    const chartValues = apiDashbord({ data: job })
    const get30day = getLast30DaysData({ data: job })
    console.log(get30day);


    const total = chartValues.total
    const interviewCount = chartValues.Interview
    const offerCount = chartValues.Offer

    const interviewRate = ((interviewCount / total) * 100).toFixed(1);
    const offerRate = ((offerCount / total) * 100).toFixed(1);
    const uniqueCompanies = new Set(job.map(j => j.company)).size
    console.log(uniqueCompanies);
    



    const statusBar = [
        { Rate: interviewRate + '%', title: 'Interview Rate', text: '2 of 4 applications', color: 'text-[#2b7fff]' },
        { Rate: offerRate + '%', title: 'Offer Rate', text: '1 of 4 applications', color: 'text-[#00c951]' },
        { Rate: total, title: 'Total Applications', text: 'All time' },
        { Rate: uniqueCompanies, title: 'Unique Companies', text: 'Applied to' },

    ]

    return (
        <div className="mt-10">
            <h1 className="text-[24px] font-semibold">Analytics</h1>
            <p className="text-neutral-500">Insights into your job search progress</p>
            <div className="flex justify-between gap-8 my-10">
                {statusBar.map((item) => (
                    <div key={item.key} className="border border-[#e5e5e5] py-4 w-full rounded-lg text-center font-semibold flex flex-col   justify-center items-center gap-1 ">
                        <h1 className={`text-4xl font-bold text-start ${item.color}`}>{item.Rate}</h1>
                        <h2 className="font-medium text-[14px] text-gray-500">{item.title}</h2>
                        <h2 className="font-medium text-[14px] text-gray-500">{item.text}</h2>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <CircleChart />
                    <ApplicationsLineChart />
                </div>
                <BarChart />
            </div>
        </div>
    )
}
export default JobAnalytics