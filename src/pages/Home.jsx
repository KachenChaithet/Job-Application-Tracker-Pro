import { Briefcase, Calendar, CircleCheckBig, CircleX, Clock10, PlusIcon } from "lucide-react"


const applications = [
    { id: 1, company: "Google", position: "Frontend", status: "Pending" },
    { id: 2, company: "Facebook", position: "Backend", status: "Interview" },
    { id: 3, company: "Amazon", position: "Fullstack", status: "Offer" },
    { id: 4, company: "Netflix", position: "Frontend", status: "Rejected" },
    { id: 5, company: "Tesla", position: "Backend", status: "Pending" },
];

const statusMap = [
    { label: "Total Applications", key: "total", icon: <Briefcase className="w-4 h-4 text-gray-500" /> },
    { label: "Pending", key: "Pending", icon: <Clock10 className="w-4 h-4 text-blue-500" /> },
    { label: "Interviews", key: "Interview", icon: <Calendar className="w-4 h-4 text-yellow-500" /> },
    { label: "Offers", key: "Offer", icon: <CircleCheckBig className="w-4 h-4 text-green-500" /> },
    { label: "Rejected", key: "Rejected", icon: <CircleX className="w-4 h-4 text-red-500" /> },
];


const Home = () => {

    const counts = {
        total: applications.length,
        Pending: applications.filter(a => a.status === "Pending").length,
        Interview: applications.filter(a => a.status === "Interview").length,
        Offer: applications.filter(a => a.status === "Offer").length,
        Rejected: applications.filter(a => a.status === "Rejected").length,
    }
    return (<>
        {/* add */}

            <div className="flex flex-col gap-8 mt-8">

                {/* showstatus */}
                <div className="">
                    <div className="">
                        <h1 className="text-[24px] font-semibold">Job Application Tracker</h1>
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
            </div>


    </>
    )
}
export default Home