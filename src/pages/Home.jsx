import axios from "axios";
import { Briefcase, Calendar, CircleCheckBig, CircleX, Clock10, PlusIcon, TrendingUp } from "lucide-react"
import moment from "moment";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";




const statusMap = [
    { label: "Total Applications", key: "total", icon: <Briefcase className="w-4 h-4 text-gray-500" /> },
    { label: "Pending", key: "Pending", icon: <Clock10 className="w-4 h-4 text-blue-500" /> },
    { label: "Interviews", key: "Interview", icon: <Calendar className="w-4 h-4 text-yellow-500" /> },
    { label: "Offers", key: "Offer", icon: <CircleCheckBig className="w-4 h-4 text-green-500" /> },
    { label: "Rejected", key: "Rejected", icon: <CircleX className="w-4 h-4 text-red-500" /> },
];

const statusColors = {
    Applied: "bg-white text-black border-gray-300",
    Interviewing: "bg-[#eceef2] text-black border border-neutral-300",
    Rejected: "bg-red-700 text-white border-red-300",
    Offer: "bg-black text-white ",
}

const Home = () => {

    const { job, FetchJobAll } = useOutletContext()


    const counts = {
        total: job.length,
        Pending: job.filter(a => a.status === "Pending").length,
        Interview: job.filter(a => a.status === "Interviewing").length,
        Offer: job.filter(a => a.status === "Offer").length,
        Rejected: job.filter(a => a.status === "Rejected").length,
    }

    useEffect(() => {
        FetchJobAll()
    }, [])




    return (<>
        {/* add */}

        <div className="flex flex-col gap-8 mt-8">

            {/* showstatus */}
            <div className="">
                <div className="">
                    <h1 className="text-[24px]  font-semibold">Job Application Tracker</h1>
                    <p className="text-neutral-500">Track and manage your job applications in one place</p>

                </div>
            </div>

            <div className="flex justify-between">
                {statusMap.map((item) => (
                    <div key={item.key} className="border pl-6 border-[#e5e5e5] py-3 w-[240px] rounded-lg text-center font-semibold flex  justify-start items-center gap-2 ">
                        {item.icon}
                        <div className="">
                            <div className="text-2xl font-bold text-start ">{counts[item.key]}</div>
                            <div className="font-medium text-[14px] text-gray-500">{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="border border-[#e5e5e5] rounded-md p-4 overflow-auto h-[600px]">
                <div className="flex gap-2 items-center">
                    <TrendingUp />
                    <h1 className="text-[20px]">Recent Applications</h1>
                </div>
                <div className="flex flex-col gap-4 mt-10">
                    {job.map((job, index) => (
                        <div className="bg-[#f5f5f7] rounded-md p-4 flex justify-between items-center">
                            <div className="">
                                <h1 className="font-semibold text-[18px]">{job.title}</h1>
                                <p className="text-[#717191] text-[14px]">{job.company}  {job.location}</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <span className={`border rounded-full px-2 font-semibold text-[14px] ${statusColors[job.status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>{job.status}</span>
                                <span className="text-[14px] text-[#717191]">{moment(job.createdAt).format('DD/MM/YYYY')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </>
    )
}
export default Home