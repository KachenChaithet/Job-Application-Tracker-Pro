import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import JobForm from "./JobForm"
import { PlusIcon } from "lucide-react"
import { Outlet } from "react-router-dom"
import axios from "axios"

const Layout = ({ children }) => {
    const [isAdd, setIsAdd] = useState(false)
    const [job, setJob] = useState([])
    console.log(job);

    const FetchJobAll = async () => {
        try {

            const response = await axios.get('http://localhost:5000/job/getall')
            setJob(response.data.AllJob)
        } catch (error) {
            console.error("Failed to fetch jobs:", error)
        }
    }

    useEffect(() => {
        FetchJobAll()
    }, [])

    return (
        <>
            <div className="container mx-auto px-4 py-8">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-[24px] font-semibold">Job Application Tracker Pro</h1>
                        <p className="text-neutral-500">Organize and track your job search journey</p>
                    </div>
                    <button
                        onClick={() => setIsAdd(true)}
                        className="cursor-pointer text-white flex bg-black gap-2 font-semibold justify-center items-center px-3 py-2 rounded-md"
                    >
                        <PlusIcon className="h-4 w-4" /> Add Application
                    </button>
                </div>

                {isAdd && <JobForm onClose={() => setIsAdd(false)} fetchJobs={FetchJobAll} />}

                <Navbar />
                <Outlet context={{ job, FetchJobAll }} />{/* รองรับ content จาก Home */}
            </div>

        </>
    )
}

export default Layout
